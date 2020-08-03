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

  public getCharts(param): Observable<any> {
    const resultCharts = Observable.create((observer) => {
      fetch('https://api.covid19api.com/total/dayone/country/' + param)
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

    return resultCharts
  }

  //   this.http.get<any>().subscribe(data => {
  // this.cv2 = data;
  // this.cv3 = JSON.parse(JSON.stringify(data))
  // for (let i in this.cv2) {
  // this.cv2[i].Date = this.cv2[i].Date.substring(0, 10);
  // if (+i == 0) {
  // this.cv3[i].Confirmed = this.cv2[i].Confirmed;
  // this.cv3[i].Active = this.cv2[i].Active;
  // this.cv3[i].Recovered = this.cv2[i].Recovered;
  // this.cv3[i].Deaths = this.cv2[i].Deaths;
  // this.cv3[i].Date = this.cv2[i].Date;
  // } else {
  // this.cv3[i].Confirmed = this.cv2[i].Confirmed - this.cv2[+i - 1].Confirmed;
  // this.cv3[i].Active = this.cv2[i].Active - this.cv2[+i - 1].Active;
  // this.cv3[i].Recovered = this.cv2[i].Recovered - this.cv2[+i - 1].Recovered;
  // this.cv3[i].Deaths = this.cv2[i].Deaths - this.cv2[+i - 1].Deaths;
  // this.cv3[i].Date = this.cv2[i].Date;
  // }
  // }
  // this.show = true;
  // window.scrollTo(0, 0);
  // }, err => {
  // console.log("COuntry Not Found");
  // })
  // } else {
  // this.alert = true;
  // }
}
