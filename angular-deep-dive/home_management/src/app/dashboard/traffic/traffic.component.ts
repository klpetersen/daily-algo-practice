import { Component } from '@angular/core';
import { TrafficDataService } from '../../../shared/services /traffic-data.service';
import { DashboardCardComponent } from "../../../shared/components/dashboard-card/dashboard-card.component";

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {

    constructor(private trafficDataService: TrafficDataService) {}

    get dummyTrafficData() {
      return this.trafficDataService.getTrafficData(); 
    }

    calcMaxTraffic() {
      return this.trafficDataService.calcMaxTraffic();
    }

}
