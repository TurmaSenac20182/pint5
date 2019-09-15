import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PgEditarEstoquePage } from './pg-editar-estoque.page';

const routes: Routes = [
  {
    path: '',
    component: PgEditarEstoquePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PgEditarEstoquePage]
})
export class PgEditarEstoquePageModule {}
