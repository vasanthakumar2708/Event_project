import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {
  constructor(private router: Router) { }

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
