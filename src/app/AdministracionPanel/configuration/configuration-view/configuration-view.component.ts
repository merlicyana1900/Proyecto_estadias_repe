import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-configuration-view',
  standalone: true,
  imports: [],
  templateUrl: './configuration-view.component.html',
  styleUrl: './configuration-view.component.css',
})
export class ConfigurationViewComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('CONFIGURACIONES GENERALES');
  }
}
