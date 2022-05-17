import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { ProgressCircleComponent } from './seccion/tarjetas/t-skills/progress-circle/progress-circle.component';
import { TExperienciaComponent } from './seccion/tarjetas/t-experiencia/t-experiencia.component';
import { TEducacionComponent } from './seccion/tarjetas/t-educacion/t-educacion.component';
import { TSkillsComponent } from './seccion/tarjetas/t-skills/t-skills.component';
import { TProyectosComponent } from './seccion/tarjetas/t-proyectos/t-proyectos.component';
import { CvSeccionComponent } from './seccion/cv-seccion/cv-seccion.component';
import { TarjetaComponent } from './seccion/tarjetas/tarjeta/tarjeta.component';
import { TBannerComponent } from './seccion/tarjetas/t-banner/t-banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { TExperienciaModalFormComponent } from './seccion/tarjetas/t-experiencia/t-experiencia-modal-form/t-experiencia-modal-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    LogoApComponent,
    SocialComponent,
    ProgressCircleComponent,
    TExperienciaComponent,
    TEducacionComponent,
    TSkillsComponent,
    TProyectosComponent,
    CvSeccionComponent,
    TarjetaComponent,
    TBannerComponent,
    TExperienciaModalFormComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
