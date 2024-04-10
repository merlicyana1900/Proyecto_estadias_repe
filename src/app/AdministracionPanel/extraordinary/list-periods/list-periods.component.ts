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
  selector: 'app-list-periods',
  standalone: true,
  imports: [],
  templateUrl: './list-periods.component.html',
  styleUrl: './list-periods.component.css',
})
export class ListPeriodsComponent implements OnInit, AfterViewInit {
  @ViewChild('modalExtra') modalExtra!: ElementRef;
  @ViewChild('modalExtraHorarios') modalExtraHorarios!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;
  modalTitle: string = '';

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle(
      'ADMINISTRACIÓN DE PERIODOS DE EXAMENES EXTRAORDINARIOS'
    );
  }

  ngAfterViewInit(): void {
    this.modalExtra.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });

    this.modalExtraHorarios.nativeElement.addEventListener(
      'hidden.bs.modal',
      () => {
        this.closeModal();
      }
    );
  }

  navigateToViewPeriod() {
    this.router.navigate(['/dashboard/extraordinarytests/1']);
  }

  showModal(isNewPeriod?: boolean): void {
    if (isNewPeriod !== undefined) {
      this.modalTitle = isNewPeriod
        ? 'Nuevo Extraordinario'
        : 'Editar Extraordinario';
    }
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }
}
