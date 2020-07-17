import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataService) { }

  users: Object;

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }


}
