import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";
import { LoginComponent } from "app/login/login.component";
import { AdminComponent } from "app/admin/admin.component";
import { AuthGuard } from "app/auth/auth-guard.service";
import { PortfolioComponent } from "app/portfolio/portfolio.component";
import { ProjectViewComponent } from 'app/project-view/project-view.component';
import { TicTacToeComponent } from './app/project-view/tic-tac-toe/tic-tac-toe.component';

// import { AddPostComponent } from "app/admin/add-post/add-post.component";
// import { BlogComponent } from "app/blog/blog.component";

const appRoutes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "admin", component: AdminComponent, canActivate: [ AuthGuard ], data: { state: "admin" } },
  { path: "about", component: AboutComponent, data: { state: "about" }  },
  { path: "contact", component: ContactComponent, data: { state: "contact" } },
  { path: "login", component: LoginComponent, data: { state: "login" } },
  { path: "portfolio", component: PortfolioComponent, data: { state: "portfolio" } },
  { path: "project", component: ProjectViewComponent, data: { state: "project" }, children: [
     { path: "tic-tac-toe", component: TicTacToeComponent }
  ] }
  // { path: "admin/new", component: AddPostComponent, canActivate: [ AuthGuard ] },
  // { path: "blog", component: BlogComponent },
]

// @NgModule({
//     imports: [ RouterModule.forRoot( appRoutes ) ],
//     exports: [ RouterModule ]
// })
// export class AppRoutingModule { }

export const AppRoutingModule = RouterModule.forRoot( appRoutes, { 
//   useHash: true
});