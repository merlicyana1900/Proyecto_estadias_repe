import { Component, OnInit, inject } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import { Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  private userService = inject(UsersService);

  constructor(
    private sharedDataService: SharedDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.sharedDataService.changeTitle('ADMINISTRACIÓN DE USUARIOS');
  }

  navigateToNewUser() {
    this.userService.isNewUser = true;
    this.router.navigate(['/dashboard/users/newUser']);
  }

  navigateToEditUser() {
    this.userService.isNewUser = false;
    this.router.navigate(['/dashboard/users/1']);
  }
}
