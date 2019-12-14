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
    if (!this.overlayRef) {
      // Set position
      const positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(this.el)
        .withPositions([{
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        }]);

      // Get or Create overlay reference
      this.overlayRef = this.overlay.create({
        backdropClass: 'cdk-overlay-transparent-backdrop',
        hasBackdrop: true,
        positionStrategy
      });

      // Returns an OverlayRef (which is a PortalHost)
      this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
    }

    // Create TemplatePortal based on the input from element
    const widget = new TemplatePortal(this.widgetTarget.templateref, this.viewContainerRef);

    // Attach Tempalte to PortalHost
    this.overlayRef.attach(widget);
  }

  constructor(
    private el: ElementRef<HTMLElement>,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  // Destroy the reference from the DOM if it exists and clean up overlayRef
  ngOnDestroy() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      delete this.overlayRef;
    }
  }
}
