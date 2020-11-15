import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

import { ProfileComponent } from './profile/profile.component';
import { OnHoverDirective } from './on-hover.directive';
import { DateDirective } from './date.directive';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { DateAgoPipe } from './pipes/date-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    NavComponent,
    ProfileComponent,
    OnHoverDirective,
    DateDirective,
    FooterComponent,
    DateAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}