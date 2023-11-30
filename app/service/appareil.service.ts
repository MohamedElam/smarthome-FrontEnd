import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { tap } from 'rxjs/operators';
import {Appareil} from "../model/Appareil";


@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils: Appareil[] = [];

  url: string = "http://localhost:8080/api/appareils";

  constructor(private http: HttpClient) {}

  findAll(): Observable<Appareil[]> {
    return this.http.get<Appareil[]>(this.url).pipe(
      tap((data: Appareil[]) => {
        // Because the backend returns the state as bool
        this.appareils = data;
      })
    );
  }

  switchOnAll() {
    this.appareils.forEach(item => {
      item.state = true;
    });
  }

  switchOffAll() {
    this.appareils.forEach(item => {
      item.state = false;
    });
  }

  switchOne(id: number): void {
    const appareil = this.appareils.find(item => item.id === id);
    if (appareil) {
      appareil.state = !appareil.state;
    }
  }
}
