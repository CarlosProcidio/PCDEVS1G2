import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';


const routes: Routes = [
  { path: 'clientes/cadastro' , component:FormularioComponent },
  { path: 'clientes/cadastro/:id' , component:FormularioComponent },
  { path: 'clientes' , component:TabelaComponent },
  { path: 'listar/administrador' , component:TabelaComponent },
  { path: 'home' , component:HomeComponent },
  { path: 'administradores/:id' , component:TabelaComponent }

  
];

export const AdministradorRoutes = RouterModule.forChild(routes);
