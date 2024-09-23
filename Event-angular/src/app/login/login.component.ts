declare var google: any;

//import { Token } from '@angular/compiler';
import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class LoginComponent implements OnInit {
  private router = inject(Router);
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '1049135047951-0g03i268j2lqn4iqd8g1mf8m0t68u9e2.apps.googleusercontent.com',
      callback: (resp: any)=> this.handleLogin(resp), 
    });

    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350
    })
    
  }

  private decodeToken(token: string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response: any){
    if(response){
      //decode the token
      const payLoad = this.decodeToken(response.credential);
      console.log("Decoded Payload:", payLoad);

      //store in session
      sessionStorage.setItem("loggedInUser", JSON.stringify(payLoad));
       // Extract the user name and picture from the decoded payload
      const userName = payLoad.name;
      const userPicture = payLoad.picture;

    // Store userName and userPicture for display on the frontpage
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("userPicture", userPicture);
      //Navigate to frontpage
      this.router.navigate(['frontpage'])

    }
 
  }

}
