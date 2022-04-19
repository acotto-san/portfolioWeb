import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { LogoApComponent } from './components/logo-ap/logo-ap.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './seccion/tarjetas/t-acerca-de/banner/banner.component';
import { DatosPersonalesComponent } from './seccion/tarjetas/t-acerca-de/datos-personales/datos-personales.component';
import { AvatarComponent } from './seccion/tarjetas/t-acerca-de/avatar/avatar.component';
import { ProgressCircleComponent } from './components/skills/progress-circle/progress-circle.component';
import { TAcercaDeComponent } from './seccion/tarjetas/t-acerca-de/t-acerca-de.component';
import { TExperienciaComponent } from './seccion/tarjetas/t-experiencia/t-experiencia.component';
import { TEducacionComponent } from './seccion/tarjetas/t-educacion/t-educacion.component';
import { TSkillsComponent } from './seccion/tarjetas/t-skills/t-skills.component';
import { TProyectosComponent } from './seccion/tarjetas/t-proyectos/t-proyectos.component';
import { CvSeccionComponent } from './seccion/cv-seccion/cv-seccion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    LoginComponent,
    FooterComponent,
    AsideComponent,
    LogoApComponent,
    SocialComponent,
    BannerComponent,
    DatosPersonalesComponent,
    AvatarComponent,
    ProgressCircleComponent,
    TAcercaDeComponent,
    TExperienciaComponent,
    TEducacionComponent,
    TSkillsComponent,
    TProyectosComponent,
    CvSeccionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
