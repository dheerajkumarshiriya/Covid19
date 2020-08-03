import { Component, OnInit } from '@angular/core'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts'

import { RemoteDataService } from '../services/data.service'

@Component({
  providers: [RemoteDataService],
  selector: 'app-map-cases',
  templateUrl: './map-cases.component.html',
  styleUrls: ['./map-cases.component.css']
})
export class MapCasesComponent implements OnInit {
  // Confirmed
  // Deaths
  // Recovered
  // Active
  // Date

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  }
  public barChartLabels: Label[] = []
  public barChartType: ChartType = 'line'
  public barChartLegend = true

  public barChartData: ChartDataSets[] = [
    { data: [], label: 'Confirmed' },
    { data: [], label: 'Active' },
    { data: [], label: 'Recovered' },
    { data: [], label: 'Deaths' }
  ]

  constructor(private dataService: RemoteDataService) {}

  ngOnInit(): void {}

  // public doSomething(name: any) {
  //   const retrievedCharts = this.dataService.getCharts(name)
  //   retrievedCharts.subscribe((data) => {
  //     this.barChartType = 'line'
  //     this.Confirmed = data.map(({ Confirmed }) => Confirmed)
  //     this.Active = data.map(({ Active }) => Active)
  //     this.Recovered = data.map(({ Recovered }) => Recovered)
  //     this.Deaths = data.map(({ Deaths }) => Deaths)
  //     this.Date = data.map(({ Date }) => Date)
  //     // this.Confirmed = this.Confirmed.map(String);
  //     // console.log(this.Confirmed);
  //     this.barChartLabels = this.Date
  //     this.barChartOptions = {
  //       title: {
  //         text: data[0].Country,
  //         display: true
  //       }
  //     }
  //     this.barChartData = [
  //       { data: this.Confirmed, label: 'Cases' },
  //       { data: this.Active, label: 'Active' },
  //       { data: this.Recovered, label: 'Recover' },
  //       { data: this.Deaths, label: 'Death' }
  //     ]
  //   })
  // }
}
