import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-meterlist',
  templateUrl: './meterlist.component.html',
  styleUrls: ['./meterlist.component.css']
})
export class MeterlistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private myMeters = [];
  @Input() meters;
  private dataSource;
  displayedColumns: string[] = ['Energinet Id', 'Vendor Id', 'Extras', 'Disabled'];
  constructor(private conn: ConnectService) { }

  ngOnInit() {
    this.conn.getResource('/meters').subscribe(res => {
      this.meters = res.meters;
      this.dataSource = new MatTableDataSource(this.meters);
      this.dataSource.paginator = this.paginator;
    });
  }

}
