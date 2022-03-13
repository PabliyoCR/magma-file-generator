import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ELEMENT } from '../../models/element.model';

@Component({
  selector: 'section[app-preview]',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @ViewChild('preview') preview!: ElementRef

  @Output() toPrint: EventEmitter<any> = new EventEmitter();

  constructor() { }

  @Input() element!: ELEMENT;

  ngOnInit(): void {

  }

  ngAfterViewInit() { }

  print() {
    this.toPrint.emit()
  }

}
