import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Book2, Book1 } from './all-book/book';
import { Register } from './reg/register';

@Injectable({
  providedIn: 'root'
})
export class BookdataService {
search:any;
  url: string='http://localhost:3000/book/';
  url1: string='http://localhost:3000/reg/';


  url4: string="https://openlibrary.org/search.json?q='${search}'&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,author_name,name&mode=everything";

  constructor(private _http:HttpClient) { }
  getAllBook(){
    return this._http.get(this.url);
  }

  getAllReg(){
    return this._http.get(this.url1);
  }
  deleteBook(name){
    let head= new HttpHeaders().set('Content-Type', 'application/JSON');
    return this._http.delete(this.url+name,{headers:head});
  }
  addBook(item:Book1){
    let head= new HttpHeaders().set('Content-Type', 'application/JSON');
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:head});
  }
  addReg(item:Register){
    let head= new HttpHeaders().set('Content-Type', 'application/JSON');
    let body=JSON.stringify(item);
    return this._http.post(this.url1,body,{headers:head});
  }
  getAllBookAddByName(){
    return this._http.get(this.url+name);
  }
  editBook(item:Book1){
    let head= new HttpHeaders().set('Content-Type', 'application/JSON');
    let body=JSON.stringify(item);
    return this._http.put(this.url+item.name,body,{headers:head});
  }

  getapiBook(val:any){
    // this.search=val;
    // return this._http.get(this.url4);
    return this._http.get(`https://openlibrary.org/search.json?q=${val}&_facet=false&_spellcheck_count=0&limit=10&fields=key,cover_i,title,author_name,name&mode=everything`);
  }

}
