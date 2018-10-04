import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-meterconfig',
  templateUrl: './meterconfig.component.html',
  styleUrls: ['./meterconfig.component.css']
})
export class MeterconfigComponent implements OnInit {

    private meters = [];
  constructor(private route: ActivatedRoute,private conn: ConnectService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.conn.getResource('/meter/' + id).subscribe(res => {
      console.log(res);
    });
  }

}
