import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'
// import { Label } from 'ng2-charts'

// import { RemoteDataService } from '../services/data.service'
import { IRegionData, IWorldData } from '../services/data.service'

@Component({
  // providers: [RemoteDataService],
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.css']
})
export class ListCasesComponent implements OnInit {
  // Confirmed
  // Deaths
  // Recovered
  // Active
  // Date

  @Output() onEmitName: EventEmitter<any> = new EventEmitter<any>()

  public key: string
  index = ''
  Name = ''
  Slug = ''
  @Input() totalCases: { type: number; name: string }
  @Input() masterArray: {
    id: number
    name: string
    slug: string
    countryWiseTotalConfirmed: number
    countryWiseTotalDeaths: number
    countryWiseTotalRecovered: number
  }[]

  private _type: string
  public listSortedData: IRegionData[]

  @Input()
  public set type(value: string) {
    this.key = `total${value}`
    this._type = value
  }
  public get type(): string {
    return this._type
  }

  // @Input()
  // public set data(value: IWorldData) {
  //   this.listSortedData = value.data.sort((a, b) => {
  //     return b.value - a.value
  //   })
  //   this.totalCases = value.totalCases
  // }

  // @Input() TotalConfirmed: { type: string; name: string }

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end'
  //     }
  //   }
  // }
  // public barChartLabels: Label[] = []
  // public barChartType: ChartType = 'line'
  // public barChartLegend = true

  // public barChartData: ChartDataSets[] = [
  //   { data: [], label: 'Confirmed' },
  //   { data: [], label: 'Active' },
  //   { data: [], label: 'Recovered' },
  //   { data: [], label: 'Deaths' }
  // ]

  // @Input() cv2: any
  // @Input() chartTypeLine: any

  constructor() {}

  ngOnInit(): void {}

  // }

  onDropDownListClick(i, name, slug) {
    console.log(name, 'names')
    this.onEmitName.emit(name)
    // const retrievedCharts = this.dataService.getCharts(name)
    // retrievedCharts.subscribe((data) => {
    //   this.barChartType = 'line'
    //   this.Confirmed = data.map(({ Confirmed }) => Confirmed)
    //   this.Active = data.map(({ Active }) => Active)
    //   this.Recovered = data.map(({ Recovered }) => Recovered)
    //   this.Deaths = data.map(({ Deaths }) => Deaths)
    //   this.Date = data.map(({ Date }) => Date)
    //   // this.Confirmed = this.Confirmed.map(String);
    //   // console.log(this.Confirmed);
    //   this.barChartLabels = this.Date
    //   this.barChartOptions = {
    //     title: {
    //       text: data[0].Country,
    //       display: true
    //     }
    //   }
    //   this.barChartData = [
    //     { data: this.Confirmed, label: 'Cases' },
    //     { data: this.Active, label: 'Active' },
    //     { data: this.Recovered, label: 'Recover' },
    //     { data: this.Deaths, label: 'Death' }
    //   ]
    // })

    // this.index = i
    // this.Name = name
    // this.Slug = slug
  }
}
