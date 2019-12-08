import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { matMenuAnimations } from '@angular/material/menu';
import { trigger, style, state, transition, group, query, animate } from '@angular/animations';

const fade = trigger('fade', [
  state('void', style({
    opacity: 0,
    transform: 'scale(0.8)'
  })),
  transition(':enter',  animate('120ms cubic-bezier(0, 0, 0.2, 1)', style({transform: 'scale(1)', opacity: 1}))),
  transition(':leave', animate('100ms 25ms linear', style({transform: 'scale(1.1)', opacity: 0})))
]);

@Component({
  selector: 'mat-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [ fade ]
})
export class WidgetComponent {
  @ViewChild('templateref') public templateref: TemplateRef<any>;
}
