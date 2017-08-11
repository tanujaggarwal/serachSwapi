import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth.module';
import { Routing } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthService } from './service/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SwaggiService } from './service/swaggi.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    Routing
  ],
  providers: [AuthService,AuthGuard,SwaggiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
