import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {LoadingBarComponent} from './shared-components/loading-bar/loading-bar/loading-bar.component';
import {StocksGridComponent} from './stocks/stocks-table/stocks-grid.component';
import {LineChartComponent} from './shared-components/charts-module/line-chart/line-chart.component';
import {ChartModule, ProgressSpinner} from 'primeng/primeng';
import {TableHeadersComponent} from './stocks/stocks-table/table-headers/table-headers.component';
import {TableBodyComponent} from './stocks/stocks-table/table-body/table-body.component';
import {TableRowComponent} from './stocks/stocks-table/table-body/table-row/table-row.component';
import {TableFooterComponent} from './stocks/stocks-table/table-footer/table-footer.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        LoadingBarComponent,
        StocksGridComponent,
          LineChartComponent,
          ProgressSpinner,
          TableHeadersComponent,
          TableBodyComponent,
          TableRowComponent,
          TableFooterComponent,


      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'stocks-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('stocks-angular');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to stocks-angular!');
  });
});
