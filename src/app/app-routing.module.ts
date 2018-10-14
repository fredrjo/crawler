import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksetupComponent} from './components/tasksetup/tasksetup.component';
import { MeterconfigComponent} from './components/meterconfig/meterconfig.component';
import { ControlpanelComponent} from './components/controlpanel/controlpanel.component';
import { GrabberconfigComponent } from './components/grabberconfig/grabberconfig.component';


const routes: Routes = [
  { path: '', component: ControlpanelComponent },
  { path: 'tasksetup/:id', component: TasksetupComponent },
  { path: 'meterconfig/:id', component: MeterconfigComponent },
   {path: 'grabberconfig', component: GrabberconfigComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
