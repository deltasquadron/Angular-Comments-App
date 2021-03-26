import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: '/comments.component.html', styleUrls: ['/comments.component.css']
})
export class CommentsComponent {
  titles = ['']
  addTitle(commentTitle: string) {
    if (commentTitle) {
      this.titles.push(commentTitle);
    }
  }

  comments = [''];
  addComment(newComment: string) {
    if (newComment) {
      this.comments.push(newComment);
    }
  }
  types = ['']
  addTypeOfComment(TypeOfComment: string) {
    if (TypeOfComment) {
      this.types.push(TypeOfComment);
    }
  }
  
}