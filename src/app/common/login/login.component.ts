import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  liked: boolean = false;
  Loginform: FormGroup;

  constructor(private _rest: RestService, private _state: StateService, private _router: Router) {
    this.Loginform = new FormGroup({
      Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Password: new FormControl('', [Validators.minLength(5), Validators.maxLength(20)])
    })
  }

  ngOnInit(): void {
    this._state.checktoken();
  }
  checktoken() {
    const token = localStorage.getItem('token');
    if (token) {
      this._state.token = token;
      this._state.decodeToken();
      this._router.navigate(['/Cartts']);
    }
  }

  Login() {
    this._rest.Login(this.Loginform.value).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data.data);
      this._state.token = (data.data);
      this._state.decodeToken();
      this._router.navigate(['/Cartts']);
    }, err => {
      console.log(err);
    })
  }

  Show() {
    this.liked = !this.liked;
  }
}
