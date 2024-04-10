import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import { Router } from '@angular/router';
import { StudentsService } from '../../../services/students.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-students',
  standalone: true,
  imports: [],
  templateUrl: './list-students.component.html',
  styleUrl: './list-students.component.css',
})
export class ListStudentsComponent implements OnInit, AfterViewInit {
  private studentService = inject(StudentsService);
  @ViewChild('collapsed') collapse!: ElementRef;
  @ViewChild('collapseShow') collapseShow!: ElementRef;
  @ViewChild('modalOpciones') modalOptions!: ElementRef;
  @ViewChild('modalBackdrop') modalBackdrop!: ElementRef;
  @ViewChild('ModalFoto') modalImage!: ElementRef;
  className = 'show';

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('Administración de Alumnos');
  }

  ngAfterViewInit(): void {
    this.collapse.nativeElement.addEventListener('click', () =>
      this.toggleData()
    );

    this.modalOptions.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });

    this.modalImage.nativeElement.addEventListener('hidden.bs.modal', () => {
      this.closeModal();
    });
  }

  showModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'block';
  }

  closeModal(): void {
    this.modalBackdrop.nativeElement.style.display = 'none';
  }

  navigateToNewStudent() {
    this.studentService.isNewStudent = true;
    this.router.navigate(['/dashboard/students/create']);
  }

  navigateToEditStudent() {
    this.studentService.isNewStudent = false;
    this.router.navigate(['/dashboard/students/1']);
  }

  navigateToReportsStudent() {
    this.router.navigate(['/dashboard/students/reports/1']);
  }

  navigateToProofsStudent() {
    this.router.navigate(['/dashboard/students/proofs/1']);
  }

  navigateToLetterCommintment() {
    this.router.navigate(['/dashboard/students/letterCommitment/1']);
  }

  toggleData(): void {
    const collapseShow = this.collapseShow.nativeElement;
    const isShown = collapseShow.classList.contains(this.className);

    collapseShow.style.height = `${collapseShow.scrollHeight}px`;

    if (isShown) {
      requestAnimationFrame(() => {
        collapseShow.classList.add('collapsing');
        collapseShow.classList.remove('collapse');
        collapseShow.classList.remove(this.className);
        collapseShow.style.height = '';

        setTimeout(() => {
          collapseShow.classList.remove('collapsing');
          collapseShow.classList.add('collapse');
        }, 350);
      });
    } else {
      requestAnimationFrame(() => {
        collapseShow.classList.remove('collapse');
        collapseShow.classList.add('collapsing');
        collapseShow.style.height = `${collapseShow.scrollHeight}px`;

        setTimeout(() => {
          collapseShow.classList.add('collapse');
          collapseShow.classList.add(this.className);
          collapseShow.classList.remove('collapsing');
          collapseShow.style.height = '';
        }, 350);
      });
    }
  }

  saveStudenImg() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
      }
    });
  }
}
