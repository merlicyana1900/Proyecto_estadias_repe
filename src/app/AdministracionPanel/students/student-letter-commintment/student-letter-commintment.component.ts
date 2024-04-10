import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-student-letter-commintment',
  standalone: true,
  imports: [],
  templateUrl: './student-letter-commintment.component.html',
  styleUrl: './student-letter-commintment.component.css',
})
export class StudentLetterCommintmentComponent
  implements OnInit, AfterViewInit
{
  @ViewChild('ModalCartaCompromiso') modalLetterCommitment!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;
  modalTitle: string = '';
  isNew: boolean = false;
  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('CARTAS COMPROMISO DE ALUMNOS');
  }

  ngAfterViewInit(): void {
    this.modalLetterCommitment.nativeElement.addEventListener(
      'hidden.bs.modal',
      () => {
        this.closeModal();
      }
    );
  }

  showModal(isNew?: boolean): void {
    if (isNew !== undefined) {
      this.modalTitle = isNew
        ? 'Nueva Carta Compromiso'
        : 'Editar Carta Compromiso';
      this.isNew = isNew ? true : false;
    }

    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }
}
