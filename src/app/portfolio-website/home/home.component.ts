import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from '../about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,FooterComponent,AboutComponent,CommonModule,MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showProjects:boolean=true

  uiuxProjects = [
    {
      name: 'Seafood Delivery',
      description: 'A user-friendly UI design for a seafood delivery app, created using Figma.',
      image: '/assets/seafood.png',
      behanceUrl: 'https://www.behance.net/gallery/200841575/Seafood-Delivery'
    },
    {
      name: 'Cake Shop',
      description: 'A beautifully designed cake shop website prototype created using Figma',
      image: '/assets/cake.png',
      behanceUrl: 'https://www.behance.net/gallery/200843057/Cake-Shop'
    },
    {
      name: 'Project Manager',
      description: 'A comprehensive project management tool prototype, designed using Figma.',
      image: '/assets/project.png',
      behanceUrl: 'https://www.behance.net/gallery/200844697/Project-manager'
    }

  ];
  webProjects = [
    {
      name: 'My Portfolio',
      description: 'Explore my Angular-powered portfolio showcasing various projects, highlighting my passion.',
      image: '/assets/portfolio-2.png',
      githubUrl: 'https://incredible-caramel-d7ed76.netlify.app/portfolio-website/home/'
    },
    {
      name: 'Fashion',
      description: 'Discover the latest trends on my fashion website, built using Spring Boot, React, and MySQL.',
      image: '/assets/fashion.jpg',
      githubUrl: 'https://github.com/Rajamanthri/fashion.git'
    },
    {
      name: 'To-Do-List',
      description: 'Manage tasks efficiently with a responsive to-do list application built using HTML, CSS, and JavaScript.',
      image: '/assets/todo.png',
      githubUrl: 'https://ubiquitous-dango-7811c6.netlify.app/'
    },

    {
      name: 'Click-Me Game',
      description: 'Enjoy a fun and interactive "Click Me" game built with HTML, CSS, and JavaScript.',
      image: '/assets/click.png',
      githubUrl: 'https://github.com/Rajamanthri/Click-Me-game.git'
    },

    {
      name: 'Number Game',
      description: 'Enjoy a fun and interactive "Number Game" game built with HTML, CSS, and JavaScript.',
      image: '/assets/number.png',
      githubUrl: 'https://superb-lokum-c77437.netlify.app/'
    },

    {
      name: 'My Portfolio',
      description: 'Explore my HTML,CSS,JS-powered portfolio showcasing various projects.',
      image: '/assets/portfolio-1.png',
      githubUrl: 'https://jovial-peony-9dc126.netlify.app/'
    }
  ];

}
