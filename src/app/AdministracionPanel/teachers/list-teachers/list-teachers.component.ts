import { Component, OnInit, inject } from '@angular/core';
import { TeachersService } from '../../../services/teachers.service';
import { Router } from '@angular/router';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-list-teachers',
  standalone: true,
  imports: [],
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css',
})
export class ListTeachersComponent implements OnInit {
  private teacherService = inject(TeachersService);

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('ADMINISTRACIÓN DE DOCENTES');
  }

  navigateToNewTeacher() {
    this.teacherService.isNewTeacher = true;
    this.router.navigate(['/dashboard/teachers/newTeacher']);
  }

  navigateToEditTeacher() {
    this.teacherService.isNewTeacher = false;
    this.router.navigate(['/dashboard/teachers/1']);
  }
}
