import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatDividerModule,
  MatIconModule,
  MatSidenavModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule
  ]
})
export class MaterialModule { }
