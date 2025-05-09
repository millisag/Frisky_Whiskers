import { Component } from '@angular/core';
import { ActivityListComponent } from "../../../features/activity-list/activity-list.component";
import { TreatListComponent } from "../../../features/treat-list/treat-list.component";
import { HeaderComponent } from "../../../shared/header/header.component";

@Component({
  selector: 'app-dashboard-page',
  imports: [ActivityListComponent, TreatListComponent, HeaderComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
