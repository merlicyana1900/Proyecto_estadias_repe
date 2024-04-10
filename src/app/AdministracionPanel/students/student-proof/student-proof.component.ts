import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-student-proof',
  standalone: true,
  imports: [],
  templateUrl: './student-proof.component.html',
  styleUrl: './student-proof.component.css',
})
export class StudentProofComponent implements OnInit, AfterViewInit {
  @ViewChild('ModalReporte') modalReport!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('JUSTIFICANTES DE ALUMNOS');
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
