import {Component, OnInit} from '@angular/core';
import {A} from '../entities/a';

@Component({
    selector: 'app-cy',
    template: '<p>cy works!</p>'
})
export class CyComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        new A();
    }
}
