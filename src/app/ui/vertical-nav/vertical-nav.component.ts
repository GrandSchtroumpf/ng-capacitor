import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
  Inject,
  forwardRef,
  ContentChild,
  ElementRef,
  Renderer2,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'vertical-nav',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalNavComponent {
  constructor(private el: ElementRef) {}

  get height(): number {
    return this.el.nativeElement ? (this.el.nativeElement.offsetHeight || 0) : 0;
  }
}

@Component({
  selector: 'vertical-nav-container',
  templateUrl: './vertical-nav.component.html',
  styleUrls: ['./vertical-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalNavContainerComponent implements OnInit {
  private isOpen = new BehaviorSubject(false);
  public offset$: Observable<number>;

  @Input()
  @HostBinding('class.opened')
  get opened(): boolean {
    // This is trigger wayyy more than it should.
    return this.isOpen.getValue();
  }
  set opened(isOpen: boolean) {
    this.isOpen.next(isOpen);
  }

  // tslint:disable-next-line: no-use-before-declare
  @ContentChild(VerticalNavComponent) nav: VerticalNavComponent;

  ngOnInit() {
    this.offset$ = this.isOpen.asObservable().pipe(
      map((isOpen) => isOpen ? this.nav.height : 0)
    );
  }
}



@Component({
  selector: 'vertical-nav-content',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VerticalNavContentComponent implements AfterViewInit, OnDestroy {

  constructor(
    @Inject(forwardRef(() => VerticalNavContainerComponent)) private container,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.container.offset$.subscribe(offset => {
      this.renderer.setStyle(this.el.nativeElement, 'margin-top', `${offset}px`);
    });
  }

  ngOnDestroy() {
    this.container.isOpen.complete();
  }

}
