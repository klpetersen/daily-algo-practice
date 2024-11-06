import { Component } from '@angular/core';
import { DashboardCardComponent } from "../../../shared/components/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus = 'online';
}
