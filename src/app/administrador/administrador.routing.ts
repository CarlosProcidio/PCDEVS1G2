import { HomeComponent } from './../home/home.component';
import { HotelComponent } from './../hotel/hotel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clientes/cadastro' , component:FormularioComponent },
  { path: 'clientes/cadastro/:id' , component:FormularioComponent },
  { path: 'clientes' , component:TabelaComponent },
  { path: 'listar/administrador' , component:TabelaComponent },
  { path: 'administradores/:id' , component:TabelaComponent },
  { path: 'home' , component:HomeComponent},
  { path: 'hotel' , component:HotelComponent}
];

export const AdministradorRoutes = RouterModule.forChild(routes);
