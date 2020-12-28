import { Injectable } from '@angular/core';
import { User, USERS } from '../user';
import { of, Observable } from "rxjs";
import { delay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class DragdropService {

  constructor() { }
  getUsers(): Observable<User[]> {
    return of(USERS).pipe(delay(400));
  }
}
