import { ConsultaEstabComponent } from './consulta-estab/consulta-estab.component';
import { FormEstabComponent } from './form-estab/form-estab.component';
import { MeusEstabComponent } from './meus-estab/meus-estab.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "meus-estab", component: MeusEstabComponent },
  { path: "form-estab", component: FormEstabComponent },
  { path: "consulta-estab", component: ConsultaEstabComponent },
  { path: 'meus-estab/cadastro' , component:MeusEstabComponent },
  { path: 'meus-estab/cadastro/:id' , component:MeusEstabComponent },
];

export const EstabelecimentoRoutes = RouterModule.forChild(routes);
