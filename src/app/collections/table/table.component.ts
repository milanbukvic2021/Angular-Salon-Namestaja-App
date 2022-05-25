import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() data1 = [];
  @Input() headers1 = [];

  @Input('class') classNames = '';

  @Input() data = [];
  @Input() headers = [];

  constructor() {}

  ngOnInit() {}
}
