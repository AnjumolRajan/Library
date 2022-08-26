import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  accountValue: any;
  authtValue: any;
  localStorage:any;
  constructor(private http:HttpClient) {  }
  
  login(data: any):Observable<any>{
    // divya
    return this.http.post<any>('http://192.168.12.112:5001/LibraryManagent/login',data);
     }
  GetAllBook(){
    return this.http.get('http://192.168.12.112:5001/LibraryManagent/bookview');   
  } 
  BookAdd(result: any):Observable<any>{
    // divya
    return this.http.post<any>('http://192.168.12.112:5001/LibraryManagent/AddBook',result);
     }
     BooksDeleteapi(id:any):Observable<any>{
 return this.http.delete<any>('http://192.168.12.112:5001/LibraryManagent/delete/'+id);
   }

   BookUpdate(data: any,id:any):Observable<any>{
    return this.http.put<any>('http://192.168.12.112:5001/LibraryManagent/update/'+id,data);
  }

  GetLanguage(){
    return this.http.get('http://192.168.12.112:5001/LibraryManagent/getLanguage');   
  } 
  
  GetAuthor(){
    return this.http.get('http://192.168.12.112:5001/LibraryManagent/getAuthors');   
  } 
  GetPublisher(){
    return this.http.get('http://192.168.12.112:5001/LibraryManagent/Publisher');   
  } 
 }

