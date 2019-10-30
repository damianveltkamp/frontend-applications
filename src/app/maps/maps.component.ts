import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.scss']
})

export class MapsComponent implements OnInit {
    readonly GEOJSON_URL = './assets/data/geojson.json';
    geojson = [];
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        var map = L.map('mapid');
        this.buildMap(map);
        // Hier roep ik de functie aan die mijn data ophaalt, en geef ik een anonieme functie mee die wanneer alles
        // uitgevoerd is pas zijn werk doet
        this.getGeojson(() => {
            console.log('als laatste');
            // Loop over alle features in de geojson array
            for(let i = 0; i < this.geojson[1].length; i++) {
                this.addMapFeatures(map,this.geojson[1][i]);
            }
        });
    }

    buildMap(map) {
        map.setView([-8.3297, 115.1312], 10);
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    getGeojson(callback) {
        this.http.get(this.GEOJSON_URL).toPromise().then(data => {
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.geojson.push(data[key]);
                }
            }
            callback();
        });
    }

    addMapFeatures(map,item) {
        // Voeg de GeoJson items toe aan de map
        L.geoJSON(item, {
            // Voeg voor elke feature aan zijn layer een popup toe
            onEachFeature: function (feature, layer) {
                // Wanneer de feature geen popup content heeft, voeg geen popup toe
                if(!feature.properties.popupTitle && !feature.properties.popupContent && !feature.properties.linkurl) {
            } else {
                layer.bindPopup("<h1>"+feature.properties.popupTitle+"</h1>"+"<p>"+feature.properties.popupContent+"</p>");
            }
            }
        }).addTo(map);
    }
}
