import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;
@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      var mymap = L.map('mapid').setView([52.4307, 4.9139], 18);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    let planes = [
        {
            lang:52.4327,
            lat:4.91848,
            popup:"<h1>Volk1</h1><br /><p>Description volk</p><br />'<a href='/volk1'>Bekijk nu</a>'"
        },
        {
            lang:52.43122,
            lat:4.91254,
            popup:"<h1>Volk2</h1><br /><p>Description volk</p><br />'<a href='/volk2'>Bekijk nu</a>'"
        }
    ]

    // Loop through markers
    for(let i = 0;i < planes.length;i++) {
        addMarker(planes[i]);
    }

    function addMarker(props): void {
        let marker = L.marker([props.lang,props.lat])
        .bindPopup(props.popup)
        .addTo(mymap);
    }
  }
}
