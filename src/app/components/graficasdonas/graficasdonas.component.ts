import { Component, OnInit, Input } from '@angular/core';

import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-graficasdonas',
  templateUrl: './graficasdonas.component.html',
  styles: []
})
export class GraficasdonasComponent implements OnInit {

  // Doughnut
  @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  @Input() doughnutChartType: ChartType = 'doughnut';
  @Input() leyenda: string = 'leyenda';
  constructor() { }

  ngOnInit() {
  }

}
