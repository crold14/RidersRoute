import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent implements OnInit {

  estrella: string
  formulario: FormGroup
  rutaId: number

  constructor
    (
      private activatedRoute: ActivatedRoute,
      private reviewsService: ReviewsService,
      private router: Router
    ) {
    this.estrella = ''
    this.formulario = new FormGroup({
      title: new FormControl('', [
        Validators.required,
      ]),

      coment: new FormControl('', [
        Validators.required,
      ]),

      val: new FormControl('', [
        Validators.required,
      ]),
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async params => {
      this.rutaId = params['rutaId']

    })
  }

  async onSubmit() {
    this.activatedRoute.params.subscribe(async params => {
      this.rutaId = params['rutaId']
      console.log(this.formulario.value);

      const response = await this.reviewsService.newReview(this.rutaId, this.formulario.value)

      alert('Review registrada')

      this.router.navigate(['/rutas/', this.rutaId])
    })
  }
  checkError(fieldName: string, errorType: string) {
    return this.formulario.get(fieldName).hasError(errorType) && this.formulario.get(fieldName).touched;

  }

}