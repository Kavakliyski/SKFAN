import { Component, OnInit } from '@angular/core';
// import { StatusService } from './shared/status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.statusService
    // .getStatus()
    // .then((result: any) => {
    //   this.status = result.status;
    // });
  }

  // status = 'DOWN';
  title = 'Sofia-Knights-MMT-WebSite';
}

