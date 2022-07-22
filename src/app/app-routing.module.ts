import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";


const appRoutes: Routes=[
    {path: '', redirectTo:"login", pathMatch:'full'},
    {path:'login', component: LoginComponent},
    {path:'signup', component: SignupComponent},
    // {path:'recipes', component:RecipesComponent, children:[
    //     {path:'', component:RecipeStartComponent },
    //     {path:'new', component:RecipeEditComponent},
    //     {path: ':id', component:RecipeDetailComponent},
    //     {path:':id/edit', component:RecipeEditComponent}
    // ]},
    // {path:'shopping-list', component:ShoppingListComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
