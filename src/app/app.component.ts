import { Component } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isTorch = false;
  
  constructor(private flashlight: Flashlight) {}
  onFlashlight(){
    if(this.flashlight.available()){
      this.isTorch = false;
      this.flashlight.switchOn();
    }else{
      alert("Flashlight Not Available");
    }
  }
  offFlashlight(){
    this.isTorch = true;
    this.flashlight.switchOff();
  }
}