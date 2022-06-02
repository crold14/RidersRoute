/// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'mapa',
  templateUrl: './mapas.component.html',
  styleUrls: ['./mapas.component.css']
})
export class MapasComponent implements OnInit {

  mapa: google.maps.Map;
  @ViewChild('divMapa') divMapa: ElementRef;

  @Input() latini: number;
  @Input() latfin: number;
  @Input() longini: number;
  @Input() longfin: number;


  constructor() {
    this.latini = 0;
    this.latfin = 0;
    this.longini = 0;
    this.longfin = 0;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.loadMap();
    this.calcularRuta();
  }
  loadMap() {
    //carga del mapa
    //opciones de creacion del mapa
    const options = {
      center: new google.maps.LatLng(40.389793300, -3.765921300),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    //creamos el mapa
    this.mapa = new google.maps.Map(this.divMapa.nativeElement, options)
  }

  calcularRuta() {
    // Nos permite recuperar los datos que unen dos puntos en el mapa
    const directionsService = new google.maps.DirectionsService();
    // Nos permite pintar la ruta en un mapa
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.mapa);

    directionsService.route({
      origin: new google.maps.LatLng(this.latini, this.longini),
      destination: new google.maps.LatLng(this.latfin, this.longfin),
      travelMode: google.maps.TravelMode.DRIVING
    }, (result) => {
      console.log(result);
      directionsRenderer.setDirections(result);
    });
  }

}
