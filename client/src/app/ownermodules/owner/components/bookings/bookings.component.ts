import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  isLoading = false
  bookings: any[] = []
  today = new Date();
  isFormSubmitted: boolean = false;

  // Function to handle form submission
  submitForm() {
    // Assuming you have some form submission logic here, like an API call

    // For this example, we will just set a timeout to simulate the submission
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.isFormSubmitted = true;
      // Reset the form after showing the success message if needed
      // Reset your form data here
    }, 2000); // Simulate a 2-second delay for the submission process
  }

  constructor(private http: HttpClient) {
    const userId = localStorage.getItem('userId')
    const theaterName = localStorage.getItem('theater')
    this.isLoading = true
    this.http.get<any[]>(`http://localhost:5100/bookings`).subscribe((res) => {
      this.bookings = res.filter((booking: { theater_id: { name: string } }) => booking.theater_id.name === theaterName);
      console.log(res);
      this.isLoading = false;
    });

  }

  isDateBeforeToday(journeyDate: string): boolean {
    const today = new Date();
    const journey = new Date(journeyDate);
    return journey < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  }

  onCancleTicket(id: string) {
    this.http.delete(`http://localhost:5100/bookings/${id}`).subscribe((res) => {
      const userId = localStorage.getItem('userId')
      this.isLoading = true
      // this.http.get<any[]>(`http://localhost:5100/bookings/theaters`).subscribe((res) => {
      //   this.bookings = res
      //   this.isLoading = false
      // })
    })
  }

}
