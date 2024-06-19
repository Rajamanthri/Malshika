import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  linkdinLink= 'https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3Byk3Aav36TqOBIUGBtOWcJw%3D%3D';
  emailAddress='mcrajamanthri50@gmail.com';
  BehanceLink= 'https://www.behance.net/malshikrajaman';
  constructor(public router:Router){

  }

  onHome(){
    window.scrollTo({top:0,behavior:'smooth'})
  }
  onAbout(){
    this.router.navigate(['./portfolio-website/about'])
  }
  onContact(){
    this.router.navigate(['./portfolio-website/contact'])
  }
}
