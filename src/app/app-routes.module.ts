import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
// import { BlogComponent } from "app/blog/blog.component";
import { AboutComponent } from "app/about/about.component";
import { ContactComponent } from "app/contact/contact.component";
import { LoginComponent } from "app/login/login.component";
import { AdminComponent } from "app/admin/admin.component";
import { AuthGuard } from "app/auth/auth-guard.service";
// import { AddPostComponent } from "app/admin/add-post/add-post.component";
import { PortfolioComponent } from "app/portfolio/portfolio.component";

const appRoutes = [
  { path: "", redirectTo: "about", pathMatch: "full" },
  { path: "admin", component: AdminComponent, canActivate: [ AuthGuard ] },
  // { path: "admin/new", component: AddPostComponent, canActivate: [ AuthGuard ] },
  // { path: "blog", component: BlogComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "portfolio", component: PortfolioComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot( appRoutes ) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }