import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom
  // preserveWhitespaces: true,
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
