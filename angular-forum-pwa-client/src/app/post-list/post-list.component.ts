import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  postList: Array<string>;
  constructor() { }

  ngOnInit() {
    this.postList = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  }

}
