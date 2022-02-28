import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './pages/example/example.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component:HomeComponent },
  { path:'example', component:ExampleComponent },
  { path:'**', redirectTo: '/', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
