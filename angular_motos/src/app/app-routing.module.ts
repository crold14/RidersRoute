import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { DetalleEventsComponent } from './detalle-events/detalle-events.component';
import { DetalleRutasComponent } from './detalle-rutas/detalle-rutas.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewEventComponent } from './new-event/new-event.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { NewRouteFormularioComponent } from './new-route-formulario/new-route-formulario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { RutasComponent } from './rutas/rutas.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'rutas', component: RutasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'rutas/new', component: NewRouteFormularioComponent },
  { path: 'rutas/:rutaId', component: DetalleRutasComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'editarPerfil', component: EditarPerfilComponent },
  { path: 'cambiaContraseña', component: ChangePasswordComponent },
  { path: 'newReview', component: NewReviewComponent },
  { path: 'rutas/:rutaId/newReview', component: NewReviewComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'newEvento', component: NewEventComponent },
  { path: 'eventos/:eventId', component: DetalleEventsComponent },
  { path: 'comunidad', component: ComunidadComponent },



  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
