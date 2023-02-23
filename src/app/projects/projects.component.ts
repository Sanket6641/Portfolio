import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Web Development',
      technologies: 'HTML, CSS, Figma',
      description: [
        'Designed the view of the site with figma',
        'Designed the same by HTML & CSS',
        'Learned new technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
