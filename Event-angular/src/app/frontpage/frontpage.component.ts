import { Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css',
  encapsulation: ViewEncapsulation.None 
})
export class FrontpageComponent implements OnInit {
  userName: string | null = '';
  userPicture: string | null = '';
  constructor(private router: Router) { }
  ngOnInit(): void {
       // Retrieve user details from sessionStorage
       this.userName = sessionStorage.getItem('userName');
       this.userPicture = sessionStorage.getItem('userPicture');
   
  }
  auth = inject(AuthService);
  signOut(){
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userPicture");
    this.auth.signOut();

  }
/*
  logout() {
    // Clear the session storage
    sessionStorage.clear();
  
    // Optionally navigate to login page or homepage
    this.router.navigate(['/frontpage']);
  }
    */
  

  navigateToAnnexure() {
    this.router.navigate(['/annexure']);
  }
  navigateToAudio() {
    this.router.navigate(['/audio']);
  }
  navigateToAccessories() {
    this.router.navigate(['/accessories']);
  }
  navigateToPhotography() {
    this.router.navigate(['/photography']);
  }
  navigateToExternaltansport() {
    this.router.navigate(['/externaltransport']);
  }
  navigateToGuest() {
    this.router.navigate(['/guest']);
  }
  navigateToGuestdetails() {
    this.router.navigate(['/guestdetails']);
  }
  navigateToHostel() {
    this.router.navigate(['/hostel']);
  }
  navigateToInternaltransport() {
    this.router.navigate(['/internaltransport']);
  }
  navigateToLOcaltransport() {
    this.router.navigate(['/localtransport']);
  }
  navigateToVenue() {
    this.router.navigate(['/venue']);
  }
}

