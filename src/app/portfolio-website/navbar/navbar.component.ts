// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [],
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

//   constructor(public router:Router){

//   }
//   onHome(){
//     this.router.navigate(['./portfolio-website/home'])
//   }
//   onProject(){
//     const skillSelection=document.getElementById('skills-section')
//     if(skillSelection){
//       if (this.router.url.includes('/home')) {
//         skillSelection.scrollIntoView({behavior:'smooth',block:'start'})
//       } else {
//         this.router.navigate(['./portfolio-website/home']).then(() => {
//           // Wait a bit for the navigation to complete
//           skillSelection.scrollIntoView({behavior:'smooth',block:'start'});
//         });
//       }
      
//     }
//   }
//   onAbout(){
//     this.router.navigate(['./portfolio-website/about'])
//   }
//   onContact(){
//     this.router.navigate(['./portfolio-website/contact'])
//   }
// }


import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public router: Router) { }

  onHome() {
    this.router.navigate(['./portfolio-website/home']);
  }

  onProject() {
    if (this.router.url.includes('/home')) {
      const skillSelection = document.getElementById('skills-section');
      if (skillSelection) {
        skillSelection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.router.navigate(['./portfolio-website/home']).then(() => {
        setTimeout(() => {
          const skillSelection = document.getElementById('skills-section');
          if (skillSelection) {
            skillSelection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100); // Adjust the timeout duration if necessary
      });
    }
  }

  onAbout() {
    this.router.navigate(['./portfolio-website/about']);
  }

  onContact() {
    this.router.navigate(['./portfolio-website/contact']);
  }
}

