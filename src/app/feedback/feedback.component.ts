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
      'userMail': ['some'],
      'feedback': ['feedback']
    });
  }

  show(val) {
    alert(JSON.stringify(val))
  }

  ngOnInit() {
  }

}
