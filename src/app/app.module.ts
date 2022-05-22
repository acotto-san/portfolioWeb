import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MockcompComponent } from './components/mockcomp/mockcomp.component';
import { Mock2Component } from './components/mock2/mock2.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { PuestoDialogComponent } from './components/dialogs/puesto-dialog/puesto-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

import { ExperienciaDialogComponent } from './components/dialogs/experiencia-dialog/experiencia-dialog.component';
import { BannerDialogComponent } from './components/dialogs/banner-dialog/banner-dialog.component';
import { ProyectoDialogComponent } from './components/dialogs/proyecto-dialog/proyecto-dialog.component';
import { SkillDialogComponent } from './components/dialogs/skill-dialog/skill-dialog.component';
import { EstudioDialogComponent } from './components/dialogs/estudio-dialog/estudio-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MockcompComponent,
    Mock2Component,
    CurriculumComponent,
    PuestoDialogComponent,
    ExperienciaDialogComponent,
    BannerDialogComponent,
    ProyectoDialogComponent,
    SkillDialogComponent,
    EstudioDialogComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatCommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
