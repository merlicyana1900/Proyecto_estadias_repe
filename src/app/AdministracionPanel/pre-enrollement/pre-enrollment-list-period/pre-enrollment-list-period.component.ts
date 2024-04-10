import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-enrollment-list-period',
  standalone: true,
  imports: [],
  templateUrl: './pre-enrollment-list-period.component.html',
  styleUrl: './pre-enrollment-list-period.component.css',
})
export class PreEnrollmentListPeriodComponent implements OnInit, AfterViewInit {
  @ViewChild('modalExtra') modalExtra!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;
  modalTitle: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle(
      'ADMINISTRACION DE PERIODOS DE INSCRIPCIONES NUEVO INGRESO'
    );
  }

  ngAfterViewInit(): void {
    this.modalExtra.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModalPeriods();
    });

    this.modalExtra.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModalPeriods();
    });
  }

  navigateToViewPeriod() {
    this.router.navigate(['/dashboard/preenrollment/1']);
  }

  openModalPeriods(isNewPeriod: boolean): void {
    this.modalTitle = isNewPeriod ? 'Editar Periodo' : 'Nuevo Periodo';
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModalPeriods(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }
}
