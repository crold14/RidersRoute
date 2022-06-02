import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  rutaId: string;
  arrReviews: any
  login: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewsService: ReviewsService) {
    this.arrReviews = []
    if (localStorage.getItem('token')) {
      this.login = true
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.rutaId = params['rutaId']

      const response = await this.reviewsService.getById(params['rutaId'])
      this.arrReviews = response;
      console.log(response);





    })
  }
}
