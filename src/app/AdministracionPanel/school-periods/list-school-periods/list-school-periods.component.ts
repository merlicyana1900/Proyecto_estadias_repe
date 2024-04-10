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
  selector: 'app-list-school-periods',
  standalone: true,
  imports: [],
  templateUrl: './list-school-periods.component.html',
  styleUrl: './list-school-periods.component.css',
})
export class ListSchoolPeriodsComponent implements OnInit, AfterViewInit {
  @ViewChild('modalMaterias') modalMaterias!: ElementRef;
  @ViewChild('modalGrupos') modalGrupos!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('ADMINISTRACIÓN DE PERIODOS ESCOLARES');
  }

  ngAfterViewInit(): void {
    this.modalMaterias.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });

    this.modalGrupos.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });
  }

  showModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }

  navigateToSchedulesRegister() {
    this.router.navigate(['/dashboard/schoolperiods/1']);
  }
}
