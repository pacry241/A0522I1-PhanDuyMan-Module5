import { Component, OnInit } from '@angular/core';
import {Article} from "../article/article";
import {ArticleComponent} from "../article/article.component";

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css']
})
export class AddNewArticleComponent implements OnInit {


  newArticle: ArticleComponent;
  constructor() { }

  ngOnInit(): void {
  }

}
