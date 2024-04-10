import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';

@Component({
  selector: 'app-register-qualifications',
  standalone: true,
  imports: [],
  templateUrl: './register-qualifications.component.html',
  styleUrl: './register-qualifications.component.css',
})
export class RegisterQualificationsComponent implements OnInit {
  isNewStudent = true;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.sharedDataService.changeTitle(
      'CALIFICACIONES - MATERIA - GRUPO - DOCENTE'
    );
  }
}
