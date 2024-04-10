import { Component, OnInit, inject } from '@angular/core';
import { SharedDataService } from '../../../services/shared-data.service';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-view-user',
  standalone: true,
  imports: [],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
})
export class ViewUserComponent implements OnInit {
  private userService = inject(UsersService);
  isNewUser = true;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit() {
    this.isNewUser = this.userService.isNewUser;

    if (this.userService.isNewUser) {
      this.sharedDataService.changeTitle('Nuevo Usuario');
    } else {
      this.sharedDataService.changeTitle('Editar Usuario');
    }
  }
}
