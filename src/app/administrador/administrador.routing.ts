import { FormularioComponent } from './formulario/formulario.component';
import { TabelaComponent } from './tabela/tabela.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'clientes/cadastro' , component:FormularioComponent },
  { path: 'clientes/cadastro/:id' , component:FormularioComponent },
  { path: 'clientes' , component:TabelaComponent }
];

export const AdministradorRoutes = RouterModule.forChild(routes);
