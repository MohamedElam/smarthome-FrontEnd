import {Component, Input} from '@angular/core';
import {AppareilService} from "../service/appareil.service";

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent {
  @Input() id!:number;
  @Input() appareilName: String="Téléphone";
  @Input() appareilStatus: String="On";
  appareilAvatar: String="assets/images/avatar.png"

  constructor(private service:AppareilService) {
  }

  getColor():string {
    if(this.appareilStatus === "On") return "green";
    else if (this.appareilStatus === "Off") return "red";
    else return "Black";
  }
  ChangeState(){
    this.service.switchOne(this.id);
  }

}
