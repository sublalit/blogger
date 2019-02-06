import { Component, OnInit } from '@angular/core';
import { BlogpostService } from './../blogpost.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {
  data: any;
  id: any;

  constructor(
    private BlogpostService: BlogpostService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.BlogpostService.getFeaturedBlogs(this.id)
    .subscribe(res => {
      console.log(res);
      this.data=res;
    })
    });
    
  }

}
