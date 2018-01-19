import {Component, OnInit} from '@angular/core';

import {SService} from '../services/s.service';
import {A} from '../entities/a';

@Component({
    selector: 'app-cx',
    template: '<p>cx works!</p>'
})
export class CxComponent implements OnInit {
    aa: A[];
    constructor(private mService: SService) {}

    ngOnInit() {
        this.mService.getTournaments()
            .subscribe(a => this.aa = a);
    }
}
