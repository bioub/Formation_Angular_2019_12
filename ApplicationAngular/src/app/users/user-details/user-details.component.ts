import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { map, switchMap } from "rxjs/operators";
import { forkJoin, Subscription, Observable } from 'rxjs';

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get("id")),
      switchMap((id) => this.userService.getById(id)),
    );
  }

}
