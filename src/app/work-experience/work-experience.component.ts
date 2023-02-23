import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Intern',
      company: 'SalvorOn Technologies(GapMaps)',
      duration: 'Jan 2023 - Now',
      description: [
        'Learning Angular 15 and related concepts.',
        'Deveploping a Self Portfolio.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
