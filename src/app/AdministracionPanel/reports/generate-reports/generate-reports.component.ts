import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-generate-reports',
  standalone: true,
  imports: [],
  templateUrl: './generate-reports.component.html',
  styleUrl: './generate-reports.component.css',
})
export class GenerateReportsComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('REPORTES ADMINISTRATIVOS');
  }
}
