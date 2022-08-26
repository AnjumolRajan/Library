import { AuthserviceService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule,Router }   from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private auth:AuthserviceService , private router:Router) { }
  ngOnInit(): void {
    this.initForm();
  }
initForm(){
  this.formGroup=new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required])
  })
}
loginProcess(){
  this.auth.login(this.formGroup.value).subscribe((res:any)=>{
    console.log("data",res);
    if(res.payload.length>0){
      this.router.navigate(['/view-book']);
      sessionStorage.setItem("token",JSON.stringify(res.payload[0].token));
    }
    else{
      alert('Invalid username or password');
      this.router.navigate(['/login']);
    }
  })

}
}
