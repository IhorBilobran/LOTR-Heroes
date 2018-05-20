import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.sass']
})
export class FeedbackComponent implements OnInit {

  public feedbackForm: FormGroup
  public userMail: AbstractControl;
  public feedback: AbstractControl;


  constructor(private fb: FormBuilder) {
    this.feedbackForm = fb.group({
      'userMail': ['',[Validators.required, Validators.email]],
      'feedback': ['',[Validators.required]]
    });
    this.userMail = this.feedbackForm.controls['userMail'];
    this.feedback = this.feedbackForm.controls['feedback'];
  }

  show(val) {
    console.log(val)
    if (this.feedbackForm.valid) {
      alert('Done')
      console.log(this.feedbackForm)
    }
    // reset values
    this.feedbackForm.reset();
  }

  ngOnInit() {
  }

}
