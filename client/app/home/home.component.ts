import { Component, OnInit } from '@angular/core';
import { SwaggiService } from '../service/swaggi.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    planetsList: any = [];
    constructor(private swaggiService: SwaggiService) { }
    ngOnInit() {
        this.searchPlanet();
    }

    searchPlanet($event?){
        var searchText = ($event && $event.target && $event.target.value) || "";
        this.swaggiService.searchPlanets(searchText)
            .subscribe(result => {
                this.planetsList = result;
            });
    }
}
