import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Beginner',
      rating: 70,
    },
    {
      name: 'Wordpress',
      level: 'Beginner',
      rating: 85,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Beginner',
      rating: 75,
    },
    {
      name: 'JAVA',
      level: 'Beginner',
      rating: 80,
    },
    {
      name: 'C,C++',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'DSA',
      level:'Intermidiate',
      rating: 75
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
