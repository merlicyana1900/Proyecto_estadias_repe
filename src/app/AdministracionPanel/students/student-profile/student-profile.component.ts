import { Component, OnInit, inject } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import { StudentsService } from '../../../services/students.service';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css',
})
export class StudentProfileComponent implements OnInit {
  private studentService = inject(StudentsService);
  isNewStudent = true;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.isNewStudent = this.studentService.isNewStudent;

    if (this.studentService.isNewStudent) {
      this.isNewStudent = true;
      this.sharedDataService.changeTitle('Creación del Perfil del Alumno');
    } else {
      this.isNewStudent = false;
      this.sharedDataService.changeTitle('Edición del Perfil del Alumno');
    }
  }
}
