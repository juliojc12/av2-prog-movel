import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  map: google.maps.Map;
  @ViewChild('map', { read: ElementRef, static: false}) mapRef: ElementRef;
  constructor() { }
  ionViewWillEnter(){
    this.exibirmap();
  }
  ngOnInit() {}
  exibirmap(){
    const pos = new google.maps.LatLng(-22.878660007805827, -43.46706231590607)
    const opcoes = {
      center: pos,
      zoom: 15,
      disableDefaultUi: true,
    }
      this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes)
    }



  
}
