import { Component, OnInit } from '@angular/core';
import { ConnectService} from '../../services/connect.service';

@Component({
  selector: 'app-taskrun',
  templateUrl: './taskrun.component.html',
  styleUrls: ['./taskrun.component.css']
})
export class TaskrunComponent implements OnInit {

    lastRuns = [];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResource('/taskruns').subscribe(res => {
      this.lastRuns = res.taskruns;
    });
  }

}
