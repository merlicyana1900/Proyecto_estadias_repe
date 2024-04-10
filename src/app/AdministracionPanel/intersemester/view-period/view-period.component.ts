import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-view-period',
  standalone: true,
  imports: [],
  templateUrl: './view-period.component.html',
  styleUrl: './view-period.component.css',
})
export class IntersemesterViewPeriodComponent implements OnInit, AfterViewInit {
  @ViewChild('modalCambioMateriaInt') modalCambioMateria!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('NOMBRE DINAMICO AQUI');
  }

  ngAfterViewInit(): void {
    this.modalCambioMateria.nativeElement.addEventListener(
      'hidden.bs.modal',
      () => {
        this.closeModal();
      }
    );

    this.modalCambioMateria.nativeElement.addEventListener(
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
