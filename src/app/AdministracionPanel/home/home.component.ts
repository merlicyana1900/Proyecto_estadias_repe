import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  public chart: any;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('Panel de Administración');
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'ENERO',
          'FEBRERO',
          'MARZO',
          'ABRIL',
          'MAYO',
          'JUNIO',
          'JULIO',
          'AGOSTO',
        ],
        datasets: [
          {
            label: 'Aprobados',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'limegreen',
          },
          {
            label: 'Reprobados',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'red',
          },
        ],
      },
      options: {
        aspectRatio: 3.0,
      },
    });
  }
}
