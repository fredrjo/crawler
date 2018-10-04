import { Component, OnInit, Input } from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-urllist',
  templateUrl: './urllist.component.html',
  styleUrls: ['./urllist.component.css']
})
export class UrllistComponent implements OnInit {
  @Input() selected;
  private urls = [];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResource('/urls').subscribe(res => {
      console.log(res);
      this.urls = res.urls;
    });
  }

}
