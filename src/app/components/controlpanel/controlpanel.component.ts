import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-controlpanel',
  templateUrl: './controlpanel.component.html',
  styleUrls: ['./controlpanel.component.css']
})
export class ControlpanelComponent implements OnInit {

  constructor(private conn: ConnectService) { }

  ngOnInit() {
  }

}
