import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "app-routes.module";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MD_PLACEHOLDER_GLOBAL_OPTIONS, MdInputModule, MdCardModule, MdIconModule, MdSelectModule, MdDialog, MdDialogModule } 
  from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from "./navbar/navbar.component";
import { ErrorComponent } from './error/error.component';

import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
// import { AddPostComponent } from './admin/add-post/add-post.component'
// import { BlogComponent } from './blog/blog.component';

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";

import { environment } from "environments/environment";
import { AuthGuard } from "app/auth/auth-guard.service";

import { LikeComponent } from "app/posts/like.component";
import { PostComponent } from "app/posts/post.component";
import { PostsComponent } from "app/posts/posts.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminMenuComponent } from "app/admin/admin-menu/admin-menu.component";
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    AdminComponent,
    AdminMenuComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PostsComponent,
    PostComponent,
    LikeComponent,
    PortfolioComponent,
    DialogComponent
    // AddPostComponent,
    // BlogComponent,    
  ],
  imports: [
    MdDialogModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule,    
    AngularFireAuthModule,    
    AngularFireDatabaseModule,    
    AngularFireModule.initializeApp(environment.firebase),    
  ],
  providers: [ DataService, AuthService, AuthGuard, MdDialog ],
  entryComponents: [ DialogComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }