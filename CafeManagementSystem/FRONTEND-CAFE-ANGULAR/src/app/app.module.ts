import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthinterceptInterceptor } from './interceptService/authintercept.interceptor';
import { CategoryComponent } from './category/category.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProductsComponent } from './products/products.component';
import { BillsComponent } from './bills/bills.component';
import { ReportComponent } from './report/report.component';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    SignUpFormComponent,
    LoginFormComponent,
    CategoryComponent,
    SidebarComponent,
    HeaderComponent,
    ProfilePageComponent,
    ProductsComponent,
    BillsComponent,
    ReportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthinterceptInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
