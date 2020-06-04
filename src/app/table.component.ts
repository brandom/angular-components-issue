import { Observable, of as observableOf } from 'rxjs';

import { DataSource } from '@angular/cdk/collections';
import { Component, HostBinding } from '@angular/core';

import { routeAnimations } from './animations';

/**
 * @title Basic table
 */
@Component({
  selector: 'app-table-example',
  styles: [
    `
      .example-container {
        display: flex;
        flex-direction: column;
        max-height: 500px;
        min-width: 300px;
      }

      .mat-table {
        overflow: auto;
        max-height: 500px;
      }
    `,
  ],
  template: `<div class="basic-container">
    <h1>Table</h1>
    <div class="example-container mat-elevation-z8">
      <mat-table #table [dataSource]="dataSource">
        <ng-container matColumnDef="position">
          <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
          <mat-cell *matCellDef="let element">
            {{ element.position }}
          </mat-cell>
        </ng-container>
        <ng-container matColumnDef="name">
          <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.name }} </mat-cell>
        </ng-container>
        <ng-container matColumnDef="weight">
          <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.weight }} </mat-cell>
        </ng-container>
        <ng-container matColumnDef="symbol">
          <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
          <mat-cell *matCellDef="let element"> {{ element.symbol }} </mat-cell>
        </ng-container>
        <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
        <mat-row *matRowDef="let row; columns: displayedColumns"></mat-row>
      </mat-table>
    </div>
  </div>`,
  animations: [routeAnimations],
})
export class TableComponent {
  @HostBinding('@routeAnimations') routeAnimations = '';
  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const data: Element[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn't change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    return observableOf(data);
  }

  disconnect() {}
}
