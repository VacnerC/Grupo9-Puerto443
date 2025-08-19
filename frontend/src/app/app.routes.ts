import { Routes } from '@angular/router';
import { LayoutComponent } from './page/layout/layout.component';
import { HomeComponent } from './page/home/home.component';
import { ProductosComponent } from './page/productos/productos.component';
import { LoginComponent } from './page/login/login.component';
import { RegistrarComponent } from './page/registrar/registrar.component';
import { ServiciosComponent } from './page/servicios/servicios.component';
import { TorneosComponent } from './page/torneos/torneos.component';
import { ContactoComponent } from './page/contacto/contacto.component';

export const routes: Routes = [

    {
        path:'',
        component: LayoutComponent,
        children:[
            {
                path:'',
                component: HomeComponent,
                title:'Inicio'
            },

            {
                path:'login',
                component: LoginComponent,
                title:'Inici de seccion'
            },

            {
                path:'registrar',
                component: RegistrarComponent,
                title:'Registro'
            },

            {
                path:'productos',
                component: ProductosComponent,
                title:'Productos'
            },

            {
                path:'servicios',
                component: ServiciosComponent,
                title:'Servicos'
            },

            {
                path:'torneos',
                component: TorneosComponent,
                title:'Torneos'
            },

            {
                path:'contacto',
                component: ContactoComponent,
                title:'Contacto'
            }
            
        ]
    }

];
