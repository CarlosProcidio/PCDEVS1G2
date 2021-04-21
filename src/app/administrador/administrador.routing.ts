import { MeusEstabComponent } from './../estabelecimentos/meus-estab/meus-estab.component';
import { ConsultaEstabComponent } from './../estabelecimentos/consulta-estab/consulta-estab.component';
import { HomeComponent } from './../home/home.component';
import { HotelComponent } from './../hotel/hotel.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clientes/cadastro' , component:FormularioComponent },
  { path: 'clientes/cadastro/:id' , component:FormularioComponent },
  { path: 'clientes' , component:TabelaComponent },
  { path: 'meus-estab' , component:MeusEstabComponent},
  { path: 'estabelecimentos' , component:MeusEstabComponent },
  { path: 'listar/administrador' , component:TabelaComponent },
  { path: 'listar/estabelecimento' , component:MeusEstabComponent },
  { path: 'administradores/:id' , component:TabelaComponent },
  { path: 'estabelecimentos/:id' , component:MeusEstabComponent },
  { path: 'home' , component:HomeComponent},
  { path: 'hotel' , component:HotelComponent},
  { path: 'consulta' , component:ConsultaEstabComponent
}
  
  
];

export const AdministradorRoutes = RouterModule.forChild(routes);
