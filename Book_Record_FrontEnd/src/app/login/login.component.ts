import { Component, OnInit } from '@angular/core';

import { BookdataService } from '../bookdata.service';


import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../reg/register';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  a: any;
  b: any;
  arrBooks:Register[]=[];
  constructor(private _data: BookdataService, private _actroute: ActivatedRoute,private _router: Router) { }


  ngOnInit(): void {
    this._data.getAllReg().subscribe(
      (data:Register[])=>{
        this.arrBooks=data;
      }
    );
  }

  login(){
    let count:number=1;
    for( let item of this.arrBooks){
      if(this.a == item.email && this.b== item.password){
        alert('Successfully Logged in');
        this._router.navigate(['/view-card']);
        break;
      }
      count++;
    }

    if(count-1==this.arrBooks.length)
      {
        alert('Something is wrong, Try again');

      }

  }

}
