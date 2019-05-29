import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  private imageName: string;

  constructor() { }

  ngOnInit() {
    this.imageName = 'https://avatars.dicebear.com/v2/jdenticon/nadun.c.svg';
  }

}
