import { Component, OnInit, Input } from '@angular/core'

import { IRegionData, IWorldData } from '../services/data.service'

@Component({
  selector: 'app-list-cases',
  templateUrl: './list-cases.component.html',
  styleUrls: ['./list-cases.component.css']
})
export class ListCasesComponent implements OnInit {
  public key: string
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

  constructor() {}

  ngOnInit(): void {}
}
