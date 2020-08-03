import { Component, OnInit, ViewChild } from '@angular/core'
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
import { Label } from 'ng2-charts'

import { RemoteDataService } from '../services/data.service'
import { ListCasesComponent } from '../list-cases/list-cases.component'

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  Confirmed
  Deaths
  Recovered
  Active
  Date

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

  countries: {
    id: number
    name: string
    slug: string
    countryWiseTotalConfirmed: number
    countryWiseTotalDeaths: number
    countryWiseTotalRecovered: number
  }[] = []
  totalConfirmed: number
  totalDeaths: number
  totalRecovered: number
  // countryWiseTotalConfirmed: number
  // countryWiseTotalDeaths: number
  // countryWiseTotalRecovered: number

  // @ViewChild('confirmedList', { static: true }) public confirmedList: ListCasesComponent
  // @ViewChild('recoveredList', { static: true }) public recoveredList: ListCasesComponent
  // @ViewChild('deathsList', { static: true }) public deathsList: ListCasesComponent

  constructor(private dataService: RemoteDataService) {}

  ngOnInit(): void {
    const retrievedCountries = this.dataService.getCountries()
    retrievedCountries.subscribe((data) => {
      console.log(data, 'data')
      ;(this.totalConfirmed = data.Global.TotalConfirmed),
        (this.totalDeaths = data.Global.TotalDeaths),
        (this.totalRecovered = data.Global.TotalRecovered),
        data.Countries.forEach((element, index, array) => {
          this.countries.push({
            id: index,
            name: element.Country,
            slug: element.Slug,
            countryWiseTotalConfirmed: element.TotalConfirmed,
            countryWiseTotalRecovered: element.TotalRecovered,
            countryWiseTotalDeaths: element.TotalDeaths
          })
        })
    })
  }

  public doSomething(name: any) {
    console.log(name, 'name')
    const retrievedCharts = this.dataService.getCharts(name)
    retrievedCharts.subscribe((data) => {
      this.barChartType = 'line'
      this.Confirmed = data.map(({ Confirmed }) => Confirmed)
      this.Active = data.map(({ Active }) => Active)
      this.Recovered = data.map(({ Recovered }) => Recovered)
      this.Deaths = data.map(({ Deaths }) => Deaths)
      this.Date = data.map(({ Date }) => Date)
      // this.Confirmed = this.Confirmed.map(String);
      // console.log(this.Confirmed);
      this.barChartLabels = this.Date
      this.barChartOptions = {
        title: {
          text: data[0].Country,
          display: true
        }
      }
      this.barChartData = [
        { data: this.Confirmed, label: 'Cases' },
        { data: this.Active, label: 'Active' },
        { data: this.Recovered, label: 'Recover' },
        { data: this.Deaths, label: 'Death' }
      ]
    })
  }
}
