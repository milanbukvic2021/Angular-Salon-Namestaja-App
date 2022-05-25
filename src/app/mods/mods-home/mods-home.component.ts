import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;

  constructor() {}
  ngOnInit(): void {}

  onClick1() {
    this.modalOpen = !this.modalOpen;
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
