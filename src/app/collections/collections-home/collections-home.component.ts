import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  partOfLink1 = 'hi';

  data1 = [
    { name: 'Mike', age: 25, job: 'Designer', employed: true },
    { name: 'Ake', age: 44, job: 'Engineer', employed: true },
    { name: 'Sike', age: 45, job: 'Designer', employed: false },
    { name: 'Like', age: 35, job: 'Actor', employed: false },
  ];

  headers1 = [
    { key: 'employed', label: 'Has A Job' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
  //////////////////////////////////////////////////////////////
  partOfLink = 'hi';
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true },
    { name: 'Elyse1', age: 125, job: 'Engineer1', employed: true },
  ];
  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  constructor() {}

  ngOnInit() {}
}
