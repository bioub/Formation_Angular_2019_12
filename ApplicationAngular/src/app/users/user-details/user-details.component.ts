import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";
import { User } from "../user.model";
import { map, switchMap } from "rxjs/operators";
import { forkJoin, Subscription } from 'rxjs';

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"]
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User;

  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((paramMap) => {
    //   this.userService.getById(paramMap.get('id')).subscribe((user) => {
    //     this.user = user;
    //   })
    // })
    // --------{id: 123}-------
    // map((paramMap) => paramMap.get('id'))
    // --------123-----------

    // equivalent de Promise.all
    // forkJoin(
    //   this.userService.getById(1),
    //   this.userService.getById(2),
    // ).subscribe((users) => {
    //   console.log(users);
    // });

    const users$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get("id")),
      switchMap((id) => this.userService.getById(id)),
    );

    this.subscription = users$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
