import {Component, OnInit} from '@angular/core';
import {AppareilService} from "../service/appareil.service";


@Component({
  selector: 'app-list-appareils',
  templateUrl: './list-appareils.component.html',
  styleUrls: ['./list-appareils.component.css']
})
export class ListAppareilsComponent implements OnInit {
  isOk: boolean = true;
  appareils: any;

  constructor(private service: AppareilService) {
    setTimeout(() => {
      this.isOk = false;
    }, 10000);
  }

  switchAllOn(): void {
    alert("Switch All appareils On");

  }

  ngOnInit(): void {
    this.service.findAll().subscribe( data =>{
      this.appareils = data;
    })
  }
  allumerTous() {
    this.service.switchOnAll();
  }

  eteindreTous() {
    this.service.switchOffAll()
  }

}
