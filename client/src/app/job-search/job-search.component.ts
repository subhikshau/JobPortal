import { Component } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {
  searchKeywords: string = '';
  searchLocation: string = '';
  // Add more filter properties if needed

  searchResults: any[] = []; // Placeholder for the search results, assuming an array of job objects

  onSearch() {
    // Perform the actual search logic here, like calling an API with search parameters
    // For this example, we'll just display some dummy data as search results

    this.searchResults = [
      {
        title: 'Frontend Developer',
        company: 'ABC Tech',
        location: 'New York',
        salary: '$80,000 - $100,000'
      },
      {
        title: 'Backend Developer',
        company: 'XYZ Solutions',
        location: 'San Francisco',
        salary: '$90,000 - $110,000'
      },
      // Add more dummy data as needed
    ];
  }
}



