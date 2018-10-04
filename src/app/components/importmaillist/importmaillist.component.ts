import { Component, OnInit, Input } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-importmaillist',
  templateUrl: './importmaillist.component.html',
  styleUrls: ['./importmaillist.component.css']
})
export class ImportmaillistComponent implements OnInit {
  @Input() selected;
  private importmails = [];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResource('/importmails').subscribe(res => {
      console.log(res);
      this.importmails = res.importmails;
    });
  }
