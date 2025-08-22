// src/app/page/servicios/servicios.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiciosService } from './servicios.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit, OnDestroy {
  servicios: any[] = [];
  serviciosCompletos: any[] = [];
  mostrarModalFlag: boolean = false;
  servicioSeleccionado: any = null;
  mostrarModalTodos: boolean = false;

  mostrarFormularioFlag: boolean = false;
  nuevoServicio: any = {
    nombre: '',
    descripcion: '',
    imagen_url: ''
  };

  mostrarConfirmacionAgregar: boolean = false;

  mostrarModalEditarFlag: boolean = false;
  servicioAEditar: any = null;
  mostrarConfirmacionEliminarFlag: boolean = false;
  servicioAEliminar: any = null;

  isUserLoggedIn: boolean = false;
  private authSubscription!: Subscription;

  constructor(
    private serviciosService: ServiciosService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getServicios();
    this.authSubscription = this.authService.isLoggedIn$().subscribe(isLoggedIn => {
      this.isUserLoggedIn = isLoggedIn;
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  getServicios(): void {
    this.serviciosService.getServicios().subscribe(data => {
      this.serviciosCompletos = data;
      this.servicios = data.slice(0, 4);
    });
  }

  mostrarFormulario(): void {
    this.mostrarFormularioFlag = true;
  }

  ocultarFormulario(): void {
    this.mostrarFormularioFlag = false;
    this.nuevoServicio = {
      nombre: '',
      descripcion: '',
      imagen_url: ''
    };
  }

  mostrarConfirmacion(): void {
    this.mostrarConfirmacionAgregar = true;
  }

  cerrarConfirmacion(): void {
    this.mostrarConfirmacionAgregar = false;
  }

  onAddServicio(): void {
    this.cerrarConfirmacion();

    this.serviciosService.addServicio(this.nuevoServicio).subscribe({
      next: (response) => {
        alert(`¡Servicio "${this.nuevoServicio.nombre}" agregado con éxito!`);
        console.log('Servicio agregado con éxito', response);
        this.getServicios();
        this.ocultarFormulario();
      },
      error: (error) => {
        console.error('Error al agregar el servicio', error);
        alert('Hubo un error al agregar el servicio.');
      }
    });
  }

  mostrarModalEditar(servicio: any): void {
    this.cerrarTodos();
    this.servicioAEditar = { ...servicio };
    this.mostrarModalEditarFlag = true;
  }

  cerrarModalEditar(): void {
    this.mostrarModalEditarFlag = false;
    this.servicioAEditar = null;
  }

  onGuardarEdicion(): void {
    if (!this.servicioAEditar) {
      return;
    }

    this.serviciosService.updateServicio(this.servicioAEditar.id, this.servicioAEditar).subscribe({
      next: (response) => {
        alert(`¡Servicio "${this.servicioAEditar.nombre}" editado con éxito!`);
        console.log('Servicio editado con éxito', response);
        this.getServicios();
        this.cerrarModalEditar();
      },
      error: (error) => {
        console.error('Error al editar el servicio', error);
        alert('Hubo un error al editar el servicio.');
      }
    });
  }

  mostrarConfirmacionEliminar(servicio: any): void {
    this.cerrarTodos();
    this.servicioAEliminar = servicio;
    this.mostrarConfirmacionEliminarFlag = true;
  }

  cerrarConfirmacionEliminar(): void {
    this.mostrarConfirmacionEliminarFlag = false;
    this.servicioAEliminar = null;
  }

  onEliminarServicio(): void {
    if (!this.servicioAEliminar) {
      return;
    }

    this.serviciosService.deleteServicio(this.servicioAEliminar.id).subscribe({
      next: () => {
        alert(`¡Servicio "${this.servicioAEliminar.nombre}" eliminado con éxito!`);
        console.log('Servicio eliminado con éxito');
        this.getServicios();
        this.cerrarConfirmacionEliminar();
      },
      error: (error) => {
        console.error('Error al eliminar el servicio', error);
        alert('Hubo un error al eliminar el servicio.');
      }
    });
  }

  mostrarModal(servicio: any): void {
    this.cerrarTodos();
    this.servicioSeleccionado = servicio;
    this.mostrarModalFlag = true;
  }

  cerrarModal(): void {
    this.mostrarModalFlag = false;
    this.servicioSeleccionado = null;
  }

  confirmarSolicitud(): void {
    alert(`Has solicitado el servicio: ${this.servicioSeleccionado.nombre}`);
    this.cerrarModal();
  }

  mostrarTodos(): void {
    this.mostrarModalTodos = true;
  }

  cerrarTodos(): void {
    this.mostrarModalTodos = false;
  }

  isAnyModalOpen(): boolean {
    return this.mostrarFormularioFlag || this.mostrarConfirmacionAgregar || this.mostrarModalEditarFlag || this.mostrarConfirmacionEliminarFlag || this.mostrarModalFlag || this.mostrarModalTodos;
  }
}