import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-upload-files',
  standalone: true,
  imports: [],
  templateUrl: './upload-files.component.html',
  styleUrl: './upload-files.component.css',
})
export class UploadFilesComponent implements OnInit {
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('Carga de Archivos');
  }
}
