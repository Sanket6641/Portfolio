import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'AISSMS Institue of Information Technology,Pune',
      course: 'B.E (E&TC)',
      duration: '2021-2024',
      score: 'Ongiong',
    },
    {
      institute: 'Nowrosjee Wadia College,Pune',
      course: 'HSC',
      duration: '2020',
      score: '72.92%',
    },
    {
      institute: 'SEMS Saswad',
      course: 'SSC',
      duration: '2018',
      score: '85.20%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
