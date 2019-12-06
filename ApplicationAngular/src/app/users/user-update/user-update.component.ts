import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../user.model';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user$: Observable<User>;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.user$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get("id")),
      switchMap((id) => this.userService.getById(id)),
    );
  }

  updateUser(user) {
    console.log(user);
  }
}
