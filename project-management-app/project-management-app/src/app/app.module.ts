import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SignupModule } from './signup/signup.module';
import { MainModule } from './main/main.module';
import { LoginModule } from './login/login.module';
import { BoardModule } from './board/board.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    SignupModule,
    MainModule,
    BoardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
