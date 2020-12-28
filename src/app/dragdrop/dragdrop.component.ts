import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DragdropService } from '../service/dragdrop.service';
import { User } from '../user';

@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.css']
})
export class DragdropComponent implements OnInit {

  busyGetUser: Subscription;
  users: User[];

  constructor(private _userApi: DragdropService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.busyGetUser = this._userApi.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.users, event.previousIndex, event.currentIndex);
    this.users.forEach((user, idx) => {
      user.sno = idx + 1;
    });
  }

}
