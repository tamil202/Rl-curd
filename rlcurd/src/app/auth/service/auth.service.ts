import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private tost: ToastrService,
    private router: Router
  ) {}
  // data post
  isSendData = async (obj: object) => {
    console.log(obj);

    try {
      this.http.post('http://localhost:3000/register', obj).subscribe({
        next: (data: any) => {
          this.tost.success(data.message);
          this.router.navigate(['test/login']);
        },
        error: (e) => {
          this.tost.error(e);
          console.log('error of after post method ', e);
        },
      });
    } catch (error) {
      console.log('Error of data post in service ', error);
    }
  };
  //  email validation
  isValidEmail = (userEamil: string) => {
    try {
      this.http.post('http://localhost:3000/finduser', userEamil).subscribe({
        next: (data: any) => {
          console.log(data.message);
        },
        error: (e) => {
          console.error(e);
        },
      });
    } catch (error) {}
  };
}
