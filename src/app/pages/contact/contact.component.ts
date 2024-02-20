import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  enquiry: any[] = [];
  enquiryform: FormGroup;

  constructor(private rest: RestService) {
    this.enquiryform = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required]),
      Mobileno: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
      Date: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {

  }

  Addcontact() {
    this.rest.enquiry(this.enquiryform.value).subscribe((result: any) => {
      console.log(result);
      this.enquiry.push(result);
      this.enquiryform.reset();
    }, (err: any) => {
      console.log(err);
    })
  }

}
