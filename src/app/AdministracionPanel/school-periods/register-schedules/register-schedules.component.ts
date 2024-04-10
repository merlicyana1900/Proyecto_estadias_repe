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
  selector: 'app-register-schedules',
  standalone: true,
  imports: [],
  templateUrl: './register-schedules.component.html',
  styleUrl: './register-schedules.component.css',
})
export class RegisterSchedulesComponent implements OnInit, AfterViewInit {
  @ViewChild('modalHorario') modalHorario!: ElementRef;
  @ViewChild('modalCargaArchivo') modalCargaArchivo!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('HORARIOS - PERIODO AQUI');
  }

  ngAfterViewInit(): void {
    this.modalHorario.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });

    this.modalCargaArchivo.nativeElement.addEventListener(
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

  navigateToQualificationsRegister() {
    this.router.navigate(['/dashboard/schoolperiods/qualifications/1']);
  }
}
