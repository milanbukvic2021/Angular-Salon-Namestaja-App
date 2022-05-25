import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  stats1 = [
    { value: 222, label: '# of Users' },
    { value: 111, label: 'Revenue' },
    { value: 333, label: 'Reviews' },
  ];

  items1 = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on 111',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in 111',
    },
  ];

  /////////////////////////////////
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in',
    },
  ];
}
