import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  ViewContainerRef,
  OnDestroy
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { WidgetComponent } from './widget.component';

@Directive({
  selector: '[widgetTarget]'
})
export class WidgetDirective implements OnDestroy {
  private overlayRef: OverlayRef;
  @Input() widgetTarget: WidgetComponent;

  @HostListener('click')
  open() {
    // Set position
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.el)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ]);

    const overlayRef = this.overlayRef || this.overlay.create({
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
      positionStrategy
    });

    // Returns an OverlayRef (which is a PortalHost)
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());

    // Create ComponentPortal that can be attached to a PortalHost
    const widget = new TemplatePortal(this.widgetTarget.templateref, this.viewContainerRef);

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(widget);
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  ngOnDestroy(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      delete this.overlayRef;
    }
  }
}
