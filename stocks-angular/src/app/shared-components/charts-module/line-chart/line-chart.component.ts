import { Component, OnInit } from '@angular/core';
import {ChartsEventsService} from '../services/charts-events.service';

const DefaultLables: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {

  data: any;
  options: any;

  constructor(private eventsService: ChartsEventsService) {
    this.options = {
      title: {
        display: true,
        fontSize: 16
      },
      legend: {
        position: 'top'
      },
    };
  }

  ngOnInit() {
    this.eventsService.getMessage().subscribe((dataObj) => {
      this.data = {
        labels: DefaultLables,
        datasets: [
          {
            label: dataObj.data.label,
            data: dataObj.data.values
          }
        ]
      };
    });
  }
}

