import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutoriasListComponent } from './components/tutorias-list/tutorias-list.component';
import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
{path:'',redirectTo:'tutorals',pathMatch:'full'},
{path:'tutorials',component: TutoriasListComponent},
{path:'tutorials/:id', component: TutorialDetailsComponent},
{path:'add',component: AddTutorialComponent},
{path:'card',component:CardComponent},
{path:'My-first-component',component:FirstComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
