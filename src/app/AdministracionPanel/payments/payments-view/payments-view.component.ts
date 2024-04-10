import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import {
  Select2Module,
  Select2Data,
  Select2UpdateEvent,
} from 'ng-select2-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-payments-view',
  standalone: true,
  imports: [CommonModule, Select2Module],
  templateUrl: './payments-view.component.html',
  styleUrl: './payments-view.component.css',
})
export class PaymentsViewComponent implements OnInit {
  overlay = false;
  studentValue = '';
  studentData: Select2Data = [
    { value: 'alumno1', label: 'Juan' },
    { value: 'alumno2', label: 'Mauro', disabled: true },
    { value: 'alumno3', label: 'Miguel' },
    { value: 'alumno4', label: 'Ivan' },
    { value: 'alumno5', label: 'Carlos' },
    { value: 'alumno6', label: 'Arturo', disabled: true },
  ];

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('Listado de Pagos');
  }

  update(event: Select2UpdateEvent<any>) {
    this.studentValue = event.value;
  }
}
