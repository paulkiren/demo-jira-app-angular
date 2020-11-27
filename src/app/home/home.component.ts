import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  tickets = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.apiService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.tickets = data;
    });
  }
}
