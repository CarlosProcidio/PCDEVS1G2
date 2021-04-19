import { ListaComponent } from './../estabelecimentos/lista/lista.component';
import { ConsultaComponent } from './../estabelecimentos/consulta/consulta.component';
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
  { path: 'hotel' , component:HotelComponent},
  { path: 'consulta' , component:ConsultaComponent},
  { path: 'lista' , component:ListaComponent}
];

export const AdministradorRoutes = RouterModule.forChild(routes);
