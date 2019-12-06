import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { filter } from 'rxjs/operators';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  delay = 1000;
  show = true;

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit() {

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
    .subscribe((event) => {
      let activatedRoute = this.activatedRoute;
      while (activatedRoute.firstChild) {
        activatedRoute = activatedRoute.firstChild;
      }
      activatedRoute.data.subscribe((data) => {
        this.title.setTitle(data.title || 'ApplicationAngular');
      });
    })
  }
}
