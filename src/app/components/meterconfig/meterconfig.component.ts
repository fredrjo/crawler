import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConnectService } from '../../services/connect.service';

@Component({
  selector: 'app-meterconfig',
  templateUrl: './meterconfig.component.html',
  styleUrls: ['./meterconfig.component.css']
})
export class MeterconfigComponent implements OnInit {

    private meters = [];
    private meter;
    private task_id = 0;
    private meter_id = '';
    private extras = '';
    private import_id = '';
    private disabled = false;
  constructor(private route: ActivatedRoute, private conn: ConnectService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.conn.getResource('/meter/' + id).subscribe(res => {
      console.log(res);
      this.meter = res;
      this.task_id = res.task_id;
      this.meter_id = res.meter_id;
      this.extras = res.export;
      this.disabled = res.disabled;
      this.import_id = res.import_id;
    });
  }
  goToTask() {
    this.router.navigate(['/tasksetup/' + this.task_id]);
  }

}
