import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

const routes: Route[] = [
  {
    path: "about",
    loadComponent: () =>
      import("./about/about.component").then((m) => m.AboutComponent),
  },
  {
    path: "",
    loadComponent: () =>
      import("./welcome/welcome.component").then((m) => m.WelcomeComponent),
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/routes").then((mod) => mod.DASHBOARD_ROUTES),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
