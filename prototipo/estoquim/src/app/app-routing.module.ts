import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { 
    path: 'cadastro-funcionario', loadChildren: './funcionario/cadastro-funcionario/cadastro-funcionario.module#CadastroFuncionarioPageModule' 
  },
  { 
    path: 'cadastro-produto', loadChildren: './produto/cadastro-produto/cadastro-produto.module#CadastroProdutoPageModule' 
  },
  { 
    path: 'pg-consulta', loadChildren: './estoque/pg-consulta/pg-consulta.module#PgConsultaPageModule' 
  },
  { 
    path: 'pg-produto', loadChildren: './produto/pg-produto/pg-produto.module#PgProdutoPageModule' 
  },
  { 
    path: 'pg-editar-estoque', loadChildren: './estoque/pg-editar-estoque/pg-editar-estoque.module#PgEditarEstoquePageModule' 
  },
  { 
    path: 'pg-login', loadChildren: './funcionario/pg-login/pg-login.module#PgLoginPageModule' 
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
