// import { Component } from '@angular/core';
// import { NavbarComponent } from '../navbar/navbar.component';
// import { FooterComponent } from '../footer/footer.component';
// import { CommonModule } from '@angular/common';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   standalone: true,
//   imports: [NavbarComponent,FooterComponent,CommonModule,ReactiveFormsModule],
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss'
// })
// export class ContactComponent {
//   userForm:any;

//   constructor(public formbuilder:FormBuilder){
  
//   }
//   ngOnInit(){
//     this.userForm = this.formbuilder.group({
//       name: [null],
//       email: [null],
//       message: [null],
//     });
//   }
  
//   onSubmit(){
//     console.log("Form Submitted",this.userForm.value);
    
//   }
// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.http.post('https://your-backend-endpoint.com/api/contact', formData)
        .subscribe(response => {
          console.log("Form Submitted successfully", response);
          alert('Your message has been sent successfully!');
          this.userForm.reset();
        }, error => {
          console.error("Error submitting form", error);
          alert('There was an error sending your message. Please try again later.');
        });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
