import { ListAccountComponent } from './list-account/list-account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path:"list-users",component:ListAccountComponent},
  {path:"login",component:LoginComponent},
  {path:"create-account",component:CreateAccountComponent},
  {path:"create-account/:id",component:CreateAccountComponent},
  {path:"authentication",component:AuthenticationComponent},
  {path:"auth-guard",component:AuthGuard},
];

export const AccountRoutes = RouterModule.forChild(routes);
