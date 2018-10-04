import { Component, OnInit, Input} from '@angular/core';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  private contacts = [];
  constructor(private conn: ConnectService) { }
  @Input() selected;

  ngOnInit() {
    this.conn.getResource('/contacts').subscribe(res => {
      this.contacts = res.contacts;
    });
  }

}
