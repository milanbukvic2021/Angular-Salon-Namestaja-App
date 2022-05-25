import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() close2 = new EventEmitter();

  constructor(private el: ElementRef) {}

  ngOnInit1(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy1(): void {
    this.el.nativeElement.remove();
  }

  onCloseClick1() {
    this.close2.emit();
  }

  /////////////////////////////////

  @Output() close1 = new EventEmitter();

  // constructor(private el: ElementRef) {}

  ngOnInit() {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.el.nativeElement.remove();
  }

  onCloseClick() {
    this.close1.emit();
  }
}
