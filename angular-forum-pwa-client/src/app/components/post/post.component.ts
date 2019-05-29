import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  private imageName: string;
  private title: string;

  constructor() { }

  ngOnInit() {
    this.imageName = 'https://avatars.dicebear.com/v2/bottts/nadunc.svg';
    this.title = 'Test title';
  }

}
