import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";
import { LoginComponent } from "app/login/login.component";
import { AdminComponent } from "app/admin/admin.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { PortfolioComponent } from "app/portfolio/portfolio.component";
import { ProjectsComponent } from 'app/projects/projects.component';
import { TicTacToeComponent } from './app/projects/tic-tac-toe/tic-tac-toe.component';
import { WikiViewerComponent } from "app/projects/wiki-viewer/wiki-viewer.component";
import { SimonGameComponent } from "app/projects/simon-game/simon-game.component";
import { CalculatorComponent } from "app/projects/calculator/calculator.component";
import { QuoteGenComponent } from "app/projects/quote-gen/quote-gen.component";
import { PomodoroComponent } from "app/projects/pomodoro/pomodoro.component";

// import { AddPostComponent } from "app/admin/add-post/add-post.component";
// import { BlogComponent } from "app/blog/blog.component";

const appRoutes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "admin", component: AdminComponent, canActivate: [ AuthGuard ], data: { state: "admin" } },
  { path: "about", component: AboutComponent, data: { state: "about" }  },
  { path: "contact", component: ContactComponent, data: { state: "contact" } },
  { path: "login", component: LoginComponent, data: { state: "login" } },
  { path: "portfolio", component: PortfolioComponent, data: { state: "portfolio" } },
  { path: "project", component: ProjectsComponent, data: { state: "project" }, children: [
     { path: "tic-tac-toe", component: TicTacToeComponent },
     { path: "wiki-viewer", component: WikiViewerComponent },
     { path: "simon-game", component: SimonGameComponent },
     { path: "calculator", component: CalculatorComponent },
     { path: "quote-gen", component: QuoteGenComponent },
     { path: "pomodoro", component: PomodoroComponent }
  ] }
  // { path: "admin/new", component: AddPostComponent, canActivate: [ AuthGuard ] },
  // { path: "blog", component: BlogComponent },
]

export const AppRoutingModule = RouterModule.forRoot( appRoutes );