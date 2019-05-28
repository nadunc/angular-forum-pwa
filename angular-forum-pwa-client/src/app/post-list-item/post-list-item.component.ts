import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  private imageName: string;
  private title: string;

  @Input() fullView = false;

  constructor() {
  }

  ngOnInit() {
    this.imageName = 'https://avatars.dicebear.com/v2/jdenticon/nadun.c.svg';
    this.title = 'Test title';
  }

}
