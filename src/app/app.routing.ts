/* import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { AuthGuard } from './account/shared/auth.guard';
import { HotelComponent } from './hotel/hotel.component'; */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { HotelComponent } from './hotel/hotel.component';

const routes: Routes = [
  {path:"hotel",component:HotelComponent},
  {path:"hotel/:id",component:HotelComponent},
  {path:"login",component:LoginComponent},
  {path:"create-account",component:CreateAccountComponent},
]
@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }

/*
const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: HotelComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];
*/