import { Component, OnInit, Input } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-grabber',
  templateUrl: './grabber.component.html',
  styleUrls: ['./grabber.component.css']
})
export class GrabberComponent implements OnInit {
  @Input() selected;
  private grabbers = [];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResource('/grabbers').subscribe(res => {
      console.log(res);
      this.grabbers = res.grabbers;
    });
  }

}
