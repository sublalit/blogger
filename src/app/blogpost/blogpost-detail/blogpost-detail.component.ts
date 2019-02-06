import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  img: any
  allImages:any;
  detailImg:string;

  constructor(
    private router: Router,
    private BlogpostService: BlogpostService, 
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.BlogpostService.getFeaturedBlogs(this.id)
    .subscribe(res => {
      this.data=res;
    });


    this.BlogpostService.getBlogsImg()
    .subscribe(res => {
      this.allImages = res;

      this.allImages.forEach(element => {
        
        if(element.id==this.id)
        {
          this.detailImg= element.url;
        }

      });

    })
  

    
    });

    
    
  }

  gotoHome() {
    this.router.navigate(['/blog'])
  }

}
