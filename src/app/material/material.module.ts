import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatDividerModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
