import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CxComponent} from './cx/cx.component';
import {CyComponent} from './cy/cy.component';
import {SService} from './services/s.service';

@NgModule({
    declarations: [AppComponent, CxComponent, CyComponent],
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
    providers: [SService, HttpClientModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
