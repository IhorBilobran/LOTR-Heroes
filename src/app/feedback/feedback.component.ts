import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  public feedbackForm: FormGroup


  constructor(private fb: FormBuilder) {
    this.feedbackForm = fb.group({
      'userMail': ['',[Validators.required, Validators.email]],
      'feedback': ['',[Validators.required]]
    });
  }

  show(val) {
    console.log(this.feedbackForm.valid)
    if (this.feedbackForm.valid) {
      alert('Done')
      console.log(this.feedbackForm)
    }
  }

  ngOnInit() {
  }

}
