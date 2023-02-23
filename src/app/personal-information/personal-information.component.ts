import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Sanket Zende'],
    ['DOB', '11/09/2001'],
    ['Work Exp', 'Fresher'],
    ['Education', 'B.E(E&TC)(2024)'],
    ['Interests', 'Cricket,Travelling'],
  ];

  aboutMe: string[] = [
    'Hi, I am a E&TC Engineer & Fresher in Software industry.',
    'Has an Ability to get familier to new thing Quicker.',
    'Interested in new Technologies and eager to learn them.',
    'Like to complete task before Deadline',
    'Currently, Completing my Degree from AISSMS IOIT,PUNE-01',
  ];

  constructor() {}

  ngOnInit(): void {}
}
