import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
​
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
​
export class AppComponent {
    url = `https://api.data.netwerkdigitaalerfgoed.nl/datasets/ivo/NMVW/services/NMVW-25/sparql?default-graph-uri=&query=++++++++++++++++++++PREFIX+dct%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%0D%0A++++++++++++++++++++SELECT+*+WHERE+%7B%0D%0A++++++++++++++++++++%3Fsub+dct%3Acreated+%221990%22+.%0D%0A++++++++++++++++++++%7D+LIMIT+50&format=application%2Fsparql-results%2Bjson&timeout=0&debug=on`
    responseData: Object [];
    constructor(private http: HttpClient) {
        this.http.get(this.url).subscribe(response=> {
            const responseData = response;
            console.log(responseData)
        })
    }
​
}
