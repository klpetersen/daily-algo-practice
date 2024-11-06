import { Component } from '@angular/core';
import { DashboardCardComponent } from "../../../shared/components/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

}
