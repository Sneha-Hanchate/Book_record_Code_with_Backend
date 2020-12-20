import {RouterModule, Routes} from "@angular/router";
// import { AddBookComponent } from './add-book/add-book.component';
import { AllBookComponent } from './all-book/all-book.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { BookComponent } from './book/book.component';

import { ViewCardComponent } from './view-card/view-card.component';
import { ApiComponent } from './api/api.component';


const arr:Routes=[



  {path:'all-book', component:AllBookComponent},
  {path:'api', component:ApiComponent},
  {path:'', component:LoginComponent},
  {path:'reg', component:RegComponent},
  {path:'view-card', component:ViewCardComponent},
  {path:'book', component:BookComponent},

];
export const arrRouting = RouterModule.forRoot(arr);
