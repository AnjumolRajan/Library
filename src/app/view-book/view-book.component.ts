import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../shared/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']

})
export class ViewBookComponent implements OnInit {
  formGroup!: FormGroup;
  bookslist: any;
  dtOptions: DataTables.Settings = {};
  id: any;
  idd: any;
  submitted: any;
  languagelist: any;
  AuthorsList: any;
  PublishersList: any;
  constructor(private auth:AuthserviceService,private router:Router,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.formGroup=this.fb.group({
      bookTitle:new FormControl('',[Validators.required]),
      Language_Id:new FormControl('',[Validators.required]),
      mrp:new FormControl('',[Validators.required]),
      PublisherId:new FormControl('',[Validators.required]),
      publisherDate:new FormControl('',[Validators.required]),
      volume:new FormControl('',[Validators.required]),
      status:new FormControl('',[Validators.required]),
      AuthorId:new FormControl('',[Validators.required])
    })
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.auth.GetAllBook().subscribe((data:any)=>{
      this.bookslist = data.payload; 
       });

    this.auth.GetLanguage().subscribe((lan:any)=>{
       this.languagelist = lan.payload; 
         });
         
    this.auth.GetAuthor().subscribe((Auther:any)=>{
      this.AuthorsList = Auther.payload; 
        });

     this.auth.GetPublisher().subscribe((Publisher:any)=>{
       this.PublishersList = Publisher.payload; 
            });
            
  }
  BookAdd()
  {
    // if(this.formGroup.valid){
      this.auth.BookAdd(this.formGroup.value).subscribe((result)=>{
        console.log(result);
        alert('Inserted successfully');
        this.formGroup.reset();
      })
    // }
    // else{
    //   alert("Enter Details")
    //    }
 
}
  BooksDelete(Books:any){
    this.idd=Books.bookId; 
   console.log(this.idd);
  }

  BooksDeleteapi()
  {
    this.auth.BooksDeleteapi(this.idd).subscribe((res)=>{
      console.log("deleted",this.idd);
      // this.GetAllBook();
      })
  }
  BookEdit(data:any){
  console.log('Edit',data);
  this.id=data.bookId;
  console.log(this.id);
  this.formGroup.controls['bookTitle'].setValue(data.bookTitle)
  this.formGroup.controls['language_Id'].setValue(data.language)
  this.formGroup.controls['mrp'].setValue(data.mrp)
  this.formGroup.controls['PublisherId'].setValue(data.publisherName)
  this.formGroup.controls['publisherDate'].setValue(data.publisherDate)
  this.formGroup.controls['volume'].setValue(data.volume)
  this.formGroup.controls['status'].setValue(data.status)
  this.formGroup.controls['AuthorId'].setValue(data.authorName)
  console.log('Edited Data',data);
  }
  BookUpdate()
  {
    
   this.auth.BookUpdate(this.formGroup.value,this.id).subscribe((data)=>{
   console.log(data);
   
   })
 }
  Logout() {
    let token=sessionStorage.getItem('token');
    token='';
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    window.sessionStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
};
public onSubmit(): void {
  this.submitted = true;
  if(!this.formGroup.valid) {
  return;
  }
}
}


