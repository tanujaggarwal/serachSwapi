import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class SwaggiService {
    constructor(private authHttp: AuthHttp) {}
    searchPlanets(queryText: string): Observable<boolean> {
        return this.authHttp.get('/api/swagi/planets?q='+queryText)
            .map((response: Response) => {
                debugger;
                let planets = response.json() || [];
                if (planets.length > 0) {
                    planets.sort(function(planet1, planet2) {
                        var p1 = isNaN(planet1.population) ? 0 : parseInt(planet1.population);
                        var p2 = isNaN(planet2.population) ? 0 : parseInt(planet2.population);
                        if(p1 > p2){
                            return -1;
                        }
                        else if(p2 > p1){
                            return 1;
                        }
                        else{
                            return 0;
                        }
                    });
                } 
                return planets;
            })
    }
}