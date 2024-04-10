import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-student-reports',
  standalone: true,
  imports: [],
  templateUrl: './student-reports.component.html',
  styleUrl: './student-reports.component.css',
})
export class StudentReportsComponent implements OnInit, AfterViewInit {
  @ViewChild('ModalReporte') modalReport!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('REPORTES DE ALUMNO');
  }

  ngAfterViewInit(): void {
    this.modalReport.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });
  }

  showModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }
}
