import { Component, OnInit, ViewChild } from '@angular/core'

import { RemoteDataService } from '../services/data.service'
import { ListCasesComponent } from '../list-cases/list-cases.component'

@Component({
  providers: [RemoteDataService],
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
}
