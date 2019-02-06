import { Component, OnInit } from '@angular/core';
import { BlogpostService } from './../blogpost.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  title = 'Blog';
  // blogs: Blogpost;
  error: {};
  
  dataArray: any;

  constructor(
    private titleServices: Title,
    private BlogpostService: BlogpostService
    ) { }

  ngOnInit() {
    this.titleServices.setTitle(this.title);
    this.dataArray = [];
    this.BlogpostService.getBlogs()
    .subscribe(res => {
      console.log(res)
      this.dataArray = res;
    })
  }

}
