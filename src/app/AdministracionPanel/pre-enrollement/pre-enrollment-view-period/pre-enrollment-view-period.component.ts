import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-pre-enrollment-view-period',
  standalone: true,
  imports: [],
  templateUrl: './pre-enrollment-view-period.component.html',
  styleUrl: './pre-enrollment-view-period.component.css',
})
export class PreEnrollmentViewPeriodComponent implements OnInit, AfterViewInit {
  @ViewChild('CargaResultadosModal') cargaResultadosModal!: ElementRef;
  @ViewChild('CargaFolioModal') cargaFolioModal!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('Nombre dinamico');
  }

  ngAfterViewInit(): void {
    this.cargaResultadosModal.nativeElement.addEventListener(
      'hidden.bs.modal',
      () => {
        this.closeModal();
      }
    );

    this.cargaFolioModal.nativeElement.addEventListener(
      'hidden.bs.modal',
      () => {
        this.closeModal();
      }
    );
  }

  showModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }
}
