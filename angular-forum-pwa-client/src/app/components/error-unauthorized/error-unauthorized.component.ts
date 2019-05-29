import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-error-unauthorized',
  templateUrl: './error-unauthorized.component.html',
  styleUrls: ['./error-unauthorized.component.scss']
})
export class ErrorUnauthorizedComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const replaceUrl = this.activatedRoute.snapshot.queryParams.url;
    if (replaceUrl) {
      this.location.replaceState(replaceUrl);
    }
  }

}
