import { Component, OnInit, inject } from '@angular/core';
import { TeachersService } from '../../../services/teachers.service';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-view-teachers',
  standalone: true,
  imports: [],
  templateUrl: './view-teachers.component.html',
  styleUrl: './view-teachers.component.css',
})
export class ViewTeachersComponent implements OnInit {
  private teacherService = inject(TeachersService);
  isNewTeacher = true;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.isNewTeacher = this.teacherService.isNewTeacher;

    if (this.teacherService.isNewTeacher) {
      this.sharedDataService.changeTitle('Nuevo Docente');
    } else {
      this.sharedDataService.changeTitle('Editar Docente');
    }
  }
}
