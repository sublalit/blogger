import { Component, OnInit } from '@angular/core';
import { BlogpostService } from './../blogpost.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {
  p: number = 1;
  title = 'Blog';
  // blogs: Blogpost;
  error: {};
  
  dataArray: any;
  imgArray: any;

  constructor(
    private titleServices: Title,
    private BlogpostService: BlogpostService
    ) { }

  ngOnInit() {
    this.titleServices.setTitle(this.title);
    this.dataArray = [];
    this.imgArray = [];
    this.BlogpostService.getBlogs()
    .subscribe(res => {
      this.dataArray = res;
    })

    this.BlogpostService.getBlogsImg()
    .subscribe(res => {
      this.imgArray = res;
    })
  }

}
