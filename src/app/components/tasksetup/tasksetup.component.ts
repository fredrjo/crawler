import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-tasksetup',
  templateUrl: './tasksetup.component.html',
  styleUrls: ['./tasksetup.component.css']
})
export class TasksetupComponent implements OnInit {
  private title;
  private day;
  private hour;
  value: string;
  viewValue: string;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
    private tasks;
    public meters = [];
    private grabber;
    private url;

  constructor(private conn: ConnectService) {
    console.log('started');
  }

  ngOnInit() {
    this.conn.getResource('/tasks').subscribe(res => {
      console.log(res);
      this.tasks = res.tasks[0];
      this.meters = this.tasks.meters;
      this.grabber = this.tasks.grabber.name;
      this.url = this.tasks.url.visit_url;
      this.title = this.tasks.name;
      this.day = this.tasks.weekday;
      this.hour = this.tasks.hour;
    });
  }

}
