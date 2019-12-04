import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.userService.getById(paramMap.get('id')).subscribe((user) => {
        this.user = user;
      })
    })
  }


}
