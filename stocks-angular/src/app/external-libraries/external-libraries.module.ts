import {CdkTableModule} from '@angular/cdk/table';
import {NgModule} from '@angular/core';
import {MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  exports: [
    CdkTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule
  ]
})
export class ExternalLibrariesModule { }
