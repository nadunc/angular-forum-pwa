import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  private title: string;
  private description: string;

  constructor() {
  }

  ngOnInit() {
  }

  addPost() {
    console.log(this.title, this.description);
  }
}
