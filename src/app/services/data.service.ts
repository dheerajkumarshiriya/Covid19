import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'

export interface IRegionData {
  value: number
  lat: number
  lon: number
  region: string
  country: string
}

export interface IWorldData {
  data: IRegionData[]
  peakValue: number
  totalCases: number
}

export interface ICasesData {
  totalConfirmed: IWorldData
  totalRecovered: IWorldData
  totalDeaths: IWorldData
}

@Injectable()
export class RemoteDataService {
  constructor() {}

  public getCountries(): Observable<any> {
    const resultData$ = Observable.create((observer) => {
      fetch(`https://api.covid19api.com/summary`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          observer.next(data)
          observer.complete()
        })
        .catch((err) => {
          observer.error(err)
        })
    })

    return resultData$
  }
}
