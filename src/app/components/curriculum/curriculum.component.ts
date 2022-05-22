import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { IODataDialog } from 'src/app/intefaces/iodata-dialog';
import { Curriculum } from 'src/app/models/curriculum';
import { ExperienciaLaboral } from 'src/app/models/experiencia-laboral';
import { ExperienciaPuesto } from 'src/app/models/experiencia-puesto';
import { Persona } from 'src/app/models/persona';
import { BannerService } from 'src/app/services/banner.service';
import { CurriculumService } from 'src/app/services/curriculum.service';
import { EstudioService } from 'src/app/services/estudio.service';
import { ExperienciaLaboralService } from 'src/app/services/experiencia-laboral.service';
import { PersonaService } from 'src/app/services/persona.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { PuestoService } from 'src/app/services/puesto.service';
import { SkillService } from 'src/app/services/skill.service';
import { BannerDialogComponent } from '../dialogs/banner-dialog/banner-dialog.component';
import { EstudioDialogComponent } from '../dialogs/estudio-dialog/estudio-dialog.component';
import { ExperienciaDialogComponent } from '../dialogs/experiencia-dialog/experiencia-dialog.component';
import { ProyectoDialogComponent } from '../dialogs/proyecto-dialog/proyecto-dialog.component';
import { PuestoDialogComponent } from '../dialogs/puesto-dialog/puesto-dialog.component';
import { SkillDialogComponent } from '../dialogs/skill-dialog/skill-dialog.component';



@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})


export class CurriculumComponent implements OnInit {
  persona:Persona = new Persona({});
  idPersona:number = 88;

  public content: any = {};
  public other_content: any = {};

  constructor(private personaServ:PersonaService, 
              private puestoServ:PuestoService,
              private curriculumServ:CurriculumService,
              private experienciaServ:ExperienciaLaboralService,
              private bannerServ:BannerService,
              private estudioServ:EstudioService,
              private skillServ:SkillService,
              private proyectoServ:ProyectoService,
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {
    this.traerPersona()
  }

  traerPersona(id:number=this.idPersona){
    this.personaServ.getPersona(id).subscribe({
      next:(response)=>{
        this.persona = new Persona(response)
        console.log("traigo persona")
      },
      error:()=>{
        alert("error al cargar persona")
      }
    });
  }


// ----------------Seccion: Dialogs de crud para el banner -----------

crudBannerDialog(inputData:IODataDialog){
  const dialogRef = this.dialog.open(BannerDialogComponent, {
    width:'80vw',
    maxWidth:'65rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {

      //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools

      if(dialogOutputData){
        this.crudBannerAction(dialogOutputData);
      }
    }); 
}

crudBannerAction(param:IODataDialog){
  //depende de la intencion de crud que me devuelva el dialog
    // me fijo a que metodo de servicio lo mando
    switch(param.intencion){

      case 'editar':
        this.bannerServ.editBanner(param.payload).subscribe({
          next:(response)=>{
            console.log("Banner updateado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error al updatear banner")
          }
        })
        break;
       
      case 'crear':
        this.curriculumServ.editCurriculum(param.payload).subscribe({
          next:()=>{
            console.log("Banner creado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error al crear banner")
          }
        })
        break;
  
      default:
        break;
      }
}
// -------------------------Fin  de seccion-----------------------------







// ---------- Seccion: Dialogs de crud de tarjeta experiencias ----------
  openPuestoDialog(inputData:IODataDialog): void {
    //abre el dialog y le mando la intencion ya que se puede llamar a este dialog 
    //desde diferentes botones, asi que el dialog despues analiza que me tiene  que 
    //presentar (escenario para editar/para crear)
    //el objeto que mando ademas tiene un payload con el objeto a editar
    // asi me lo devuelve y cuando cierra el modal va a algun metodo de un servicio
    const dialogRef = this.dialog.open(PuestoDialogComponent, {
      width:'30rem',
      data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {
      //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools
      if(dialogOutputData && dialogOutputData.intencion!=="cerrar"){
        this.crudPuesto(dialogOutputData);
      }

    }); 
  }

  crudPuesto(param:IODataDialog){
    //depende de la intencion de crud que me devuelva el dialog
    // me fijo a que metodo de servicio lo mando
    switch(param.intencion){
        
      case 'editar':
        this.puestoServ.editPuesto(param.payload).subscribe({
          next:(response)=>{
            console.log("Puesto updateado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error al updatear puesto");
          }
    
        })
        break;
      
      case 'eliminar':
        this.puestoServ.removePuesto(param.payload).subscribe({
          next:()=>{
            console.log("Puesto borrado")
            this.traerPersona();
          },
          error:()=>{
            alert("Error al borrar puesto")
          }
        })
        break;

      case 'crear':
        this.experienciaServ.editExperiencia(param.payload).subscribe({
          next:(response)=>{
            console.log("Puesto creado")
            this.traerPersona();
          },
          error:()=>{
            alert("Error al crear puesto")
          }
        })
        break;

      default:
        break;

    }
  }

  openExperienciaDialog(inputData:IODataDialog){
      //abre el dialog y le mando la intencion ya que se puede llamar a este dialog 
    //desde diferentes botones, asi que el dialog despues analiza que me tiene  que 
    //presentar (escenario para editar/para crear)
    //el objeto que mando ademas tiene un payload con el objeto a editar
    // asi me lo devuelve y cuando cierra el modal va a algun metodo de un servicio
    const dialogRef = this.dialog.open(ExperienciaDialogComponent, {
    width:'30rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {
       //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools

      if(dialogOutputData && dialogOutputData.intencion!=="cerrar"){
        this.crudExperiencia(dialogOutputData);
      }
    }); 
  }
  
  crudExperiencia(param:IODataDialog){
    //depende de la intencion de crud que me devuelva el dialog
    // me fijo a que metodo de servicio lo mando
    switch(param.intencion){

    case 'editar':
      this.experienciaServ.editExperiencia(param.payload).subscribe({
        next:(response)=>{
          console.log("Experiencia updateada");
          this.traerPersona();
        },
        error:()=>{
          alert("Error al updatear experiencia")
        }
      })
      break;
    
    case 'eliminar':
      this.experienciaServ.removeExperiencia(param.payload).subscribe({
        next:()=>{
          console.log("Experiencia eliminada");
          this.traerPersona();
        },
        error:()=>{
          alert("Error al eliminar la experiencia")
        }
      })
      break;

    case 'crear':
      this.curriculumServ.editCurriculum(param.payload).subscribe({
        next:(response)=>{
          console.log("Experiencia creada");
          this.traerPersona();
        },
        error:()=>{
          alert("Error al crear experiencia")
        }
      })
      break;

    }
  }
// -----------------------------Fin  de seccion-----------------------







// -------------------Seccion: Dialogs de crud de tarjeta estudios--------------
crudEstudioDialog(inputData:IODataDialog){
  const dialogRef = this.dialog.open(EstudioDialogComponent, {
    width:'30rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {

      //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools

      if(dialogOutputData && dialogOutputData.intencion!=="cerrar"){
        this.crudEstudio(dialogOutputData);
      }
    }); 
}

crudEstudio(param:IODataDialog){
    switch(param.intencion){
      case "crear":
        this.curriculumServ.editCurriculum(param.payload).subscribe({
          next:(response)=>{
            console.log("Estudio creado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error creando estudio");
          }
        })
        break;
      case "editar":
        this.estudioServ.editEstudio(param.payload).subscribe({
          next:(response)=>{
            console.log("Estudio editado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error editando estudio");
          }
        })
        break;
      case "eliminar":
        this.estudioServ.removeEstudio(param.payload).subscribe({
          next:(response)=>{
            console.log("Estudio eliminado");
            this.traerPersona();
          },
          error:()=>{
            alert("Error eliminando estudio");
          }
        })
        break;
    }
}
// ----------------------------Fin de seccion--------------------------------------




// -------------------Seccion: Dialogs de crud de tarjeta skills--------------
crudSkillDialog(inputData:IODataDialog){
  const dialogRef = this.dialog.open(SkillDialogComponent, {
    width:'30rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {

      //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools

      if(dialogOutputData){
        this.crudSkill(dialogOutputData);
      }
    }); 
}

crudSkill(param:IODataDialog){
  switch(param.intencion){
    case "crear":
      this.curriculumServ.editCurriculum(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill creado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error creando skill");
        }
      })
      break;
    case "editar":
      this.skillServ.editSkill(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill editado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error editando skill");
        }
      })
      break;
    case "eliminar":
      this.skillServ.removeSkill(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill eliminado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error eliminando skill");
        }
      })
      break;
  }
}
// ----------------------------Fin de seccion--------------------------------------





// -------------------Seccion: Dialogs de crud de tarjeta proyectos--------------
crudProyectoDialog(inputData:IODataDialog){
  const dialogRef = this.dialog.open(ProyectoDialogComponent, {
    width:'30rem',
    data: inputData
    });

    dialogRef.afterClosed().subscribe( dialogOutputData => {

      //agrego este if porque si clickeas fuera del dialog
      //se cierra solo y no see como capturar ese evento
      //asi que el resultado del afterClosed viene undefined, lo cual no estaba contemplado
      //en this.crudPuesto() aunque no entiendo cmo acepta el unfefined si le especifique
      //que el type del parametro es el de una interfaz especifica... 
      //TL;DR : un if para cuando viene undefined, atada con alambre para que no loguee errores en devtools

      if(dialogOutputData){
        this.crudProyecto(dialogOutputData);
      }
    }); 
}

crudProyecto(param:IODataDialog){
  switch(param.intencion){
    case "crear":
      console.log(param.payload)
      this.curriculumServ.editCurriculum(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill creado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error creando skill");
        }
      })
      break;
    case "editar":
      this.proyectoServ.editProyecto(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill editado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error editando skill");
        }
      })
      break;
    case "eliminar":
      this.proyectoServ.removeProyecto(param.payload).subscribe({
        next:(response)=>{
          console.log("Skill eliminado");
          this.traerPersona();
        },
        error:()=>{
          alert("Error eliminando skill");
        }
      })
      break;
    }
  }
}
// ----------------------------Fin de seccion--------------------------------------
