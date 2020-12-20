import { Component, OnInit } from '@angular/core';
import { Book1,Book2 } from '../all-book/book';
import { BookdataService } from '../bookdata.service';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormArray , AbstractControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  signupForm: FormGroup;

  arrBooks: Book1[]=[];
  taskID;
  count;
  res;
  size:number;
  constructor(private _data: BookdataService, private _actroute: ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {

    this._data.getAllBook().subscribe(
      (data:Book1[])=>{
        this.arrBooks=data;
      }
    );
    this.signupForm = new FormGroup({

          name: new FormControl(null, [
            Validators.required,]),
          writer: new FormControl(null, [
            Validators.required,]),
          pages: new FormControl(null, [
            Validators.required,]),
          price: new FormControl(null, [
            Validators.required,]),
    });

  }
  onSignup(){

    let count:number=1;
    for( let item of this.arrBooks){
      if(this.signupForm.get('name').value == item.name){
        alert('Book name is already exist, Try with another name');
        break;
      }
      count++;
    }

    if(count-1==this.arrBooks.length)
      {
        alert('Successfully Added');
        this._data.addBook(this.signupForm.value).subscribe(
              (x:any)=>{
                 if(x.affectedValue==1){
                  this.arrBooks.push(this.signupForm.value);

                 }}

                  );
                  this._router.navigate(['/all-book']);
      }
  }

  }
