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
import { 
   MdButtonModule, 
   MdCheckboxModule, 
   MD_PLACEHOLDER_GLOBAL_OPTIONS, 
   MdInputModule, 
   MdCardModule, MdIconModule, 
   MdSelectModule, MdDialog, 
   MdDialogModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { NavComponent } from "./navbar/navbar.component";
import { ErrorComponent } from './error/error.component';

import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

import { DataService } from "app/data.service";
import { AuthService } from "app/auth/auth.service";

import { environment } from "environments/environment";
import { AuthGuard } from "app/auth/auth-guard.service";

import { PortfolioComponent } from './portfolio/portfolio.component';
import { AdminMenuComponent } from "app/admin/admin-menu/admin-menu.component";
import { DialogComponent } from './dialog/dialog.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { TicTacToeComponent } from './projects/tic-tac-toe/tic-tac-toe.component';
import { WikiViewerComponent } from './projects/wiki-viewer/wiki-viewer.component';
import { SimonGameComponent } from './projects/simon-game/simon-game.component';
import { CalculatorComponent } from './projects/calculator/calculator.component';
import { PomodoroComponent } from './projects/pomodoro/pomodoro.component';
import { QuoteGenComponent } from './projects/quote-gen/quote-gen.component';


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
    PortfolioComponent,
    DialogComponent,
    ProjectsComponent,
    TicTacToeComponent,
    WikiViewerComponent,
    SimonGameComponent,
    CalculatorComponent,
    PomodoroComponent,
    QuoteGenComponent
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