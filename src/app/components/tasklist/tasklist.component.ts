import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ConnectService } from '../../services/connect.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() tasks;
  private dataSource;
  displayedColumns: string[] = ['Name', 'Weekday', 'Hour', 'Disabled'];
  constructor(private conn: ConnectService, public router: Router) { }

  ngOnInit() {
    this.conn.getResource('/tasks').subscribe(res => {
      this.tasks = res.tasks;
      this.dataSource = new MatTableDataSource(this.tasks);
      this.dataSource.paginator = this.paginator;
    });
  }
  addTask() {
      this.conn.postResource('/tasks', {}).subscribe(res => {
        console.log(res);
        this.router.navigate(['/tasksetup/' + res.id]);
      });
    }
}
