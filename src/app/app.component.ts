import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Item } from './api.service';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-ng';
  items: Array<Item>;
  constructor(
    private apiService: ApiService,
    public updates:SwUpdate
  ) {
    updates.available.subscribe(event => {
      updates.activateUpdate().then(() => this.updateApp());
    });
  }

  updateApp(){
    document.location.reload();
    console.log("The app is updating right now");

  }
  ngOnInit() {

    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log(data);
      this.items = data;
    }, (err) => {
      console.log(err);
    });
  }
}
