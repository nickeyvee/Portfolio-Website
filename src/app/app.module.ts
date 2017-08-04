import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "app/app-routes.module";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MD_PLACEHOLDER_GLOBAL_OPTIONS, MdInputModule, MdCardModule, MdIconModule, MdSelectModule } 
  from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from "./navbar/navbar.component";
import { ErrorComponent } from './error/error.component';

import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
// import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
// import { AddPostComponent } from './admin/add-post/add-post.component'

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";

import { environment } from "environments/environment";
import { AuthGuard } from "app/auth/auth-guard.service";

import { LikeComponent } from "app/posts/like.component";
import { PostComponent } from "app/posts/post.component";
import { PostsComponent } from "app/posts/posts.component";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminMenuComponent } from "app/admin/admin-menu/admin-menu.component";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ErrorComponent,
    AdminComponent,
    AdminMenuComponent,
    FooterComponent,
    // BlogComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    // AddPostComponent,
    PostsComponent,
    PostComponent,
    LikeComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdIconModule,
    MdSelectModule
  ],
  providers: [ DataService, AuthService, AuthGuard
    // {provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'always' }}
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }