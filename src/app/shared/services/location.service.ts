import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class LocationService {
  url = "assets/resources/mocks/";
  constructor(private http: HttpClient) {}
  getAllCity() {
    return this.http.get(`${this.url}/tinh_tp.json`);
  }
  getDistinctOfCity(number) {
    return this.http.get(`${this.url}/quan-huyen/${number}.json`);
  }
  getWardOfDistinct(number) {
    return this.http.get(`${this.url}/xa-phuong/${number}.json`);
  }
}
