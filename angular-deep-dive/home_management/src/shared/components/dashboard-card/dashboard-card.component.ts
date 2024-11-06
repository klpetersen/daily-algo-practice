import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {

  image = input.required<{ src: string, alt: string }>({});
  title = input.required<string>();

}
