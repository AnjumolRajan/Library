import { AuthserviceService } from './shared/auth.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewBookComponent } from './view-book/view-book.component';
import { DataTablesModule } from "angular-datatables";
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientInterceptor } from './http-client.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ViewBookComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    Angular2SmartTableModule,
    FontAwesomeModule
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpClientInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
