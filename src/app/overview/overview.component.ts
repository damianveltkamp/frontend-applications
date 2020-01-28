import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
    constructor(private http: HttpClient,private router: Router) {}
    api_url: string;
    data_objects = [];
    output = [];

    ngOnInit() {
        let split_route = this.splitRouterString();
        this.getApiUrl(split_route);
        this.getApiData(() => {   
            for(let i = 0; i < this.data_objects[1].bindings.length; i++) {
                this.output.push(this.data_objects[1].bindings[i]);
            }
        });
        console.log(this.output);
    }

    splitRouterString() {
        let split_router_url = this.router.url.split('nation=');
        let nation = split_router_url[1];
        return nation;
    }

    getApiUrl(route) {
        // Switch om te kijken welke data opgehaald moet worden
        switch(route) {
            case 'bali':
                this.api_url = 'https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-26/sparql?default-graph-uri=&query=%23%2B+summary%3A+Get+all+photo%27s+from+%22Indonesia%22.%0D%0A%0D%0APREFIX+rdf%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F1999%2F02%2F22-rdf-syntax-ns%23%3E%0D%0APREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0D%0APREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0APREFIX+skos%3A+%3Chttp%3A%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0D%0APREFIX+edm%3A+%3Chttp%3A%2F%2Fwww.europeana.eu%2Fschemas%2Fedm%2F%3E%0D%0APREFIX+foaf%3A+%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0D%0A%0D%0ASELECT+%3Fcho+%3Ftitle+%3FplaceName+%3Ftype+%3Fimageurl+WHERE+%7B%0D%0A+++%09%3Chttps%3A%2F%2Fhdl.handle.net%2F20.500.11840%2Ftermmaster7746%3E+skos%3Anarrower*+%3Fplace+.%0D%0A+++%09%3Fplace+skos%3AprefLabel+%3FplaceName+.%0D%0A++%09%3Fimage+edm%3AisShownBy+%3Fimageurl.%0D%0A%09VALUES+%3Ftype+%7B+%22Foto%22+%22foto%22+%22Negatief%22+%22negatief%22+%22Glasnegatief%22+%22glasnegatief%22+%22Dia%22+%22dia%22+%22Kleurendia%22+%22kleurendia%22+%22Lichtbeeld%22+%22lichtbeeld%22%7D%0D%0A%0D%0A+++%09%3Fcho+dct%3Aspatial+%3Fplace+%3B%0D%0A++++++++dc%3Atype+%3Ftype+%3B%0D%0A++++++++edm%3AisShownBy+%3Fimageurl%3B%0D%0A++++++++dc%3Atitle+%3Ftitle+.%0D%0A+++%09FILTER+langMatches%28lang%28%3Ftitle%29%2C+%22ned%22%29%0D%0A%0D%0A%7D%0D%0ALIMIT+10&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on'
                break;
            default:
                console.log('this is not bali');
                break;
        }
    }
    
    getApiData(callback) {
        this.http.get(this.api_url).toPromise().then(data => {
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    this.data_objects.push(data[key]);
                    console.log(data);
                }
            }
            callback();
        });
    }
}
