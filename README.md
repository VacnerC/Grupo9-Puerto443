# Grupo9-Puerto443

# Gaming Services Management

Una aplicación web para la gestión de servicios de recargas de videojuegos, permitiendo a los usuarios ver y solicitar servicios, mientras que los administradores pueden gestionar un catálogo de productos a través de una interfaz CRUD (Crear, Leer, Actualizar, Borrar).

## 🎮 Características principales

- **Catálogo de Servicios**: Muestra un listado de videojuegos con imágenes, nombres y descripciones
- **Funcionalidad CRUD**: Los usuarios administradores pueden Crear, Leer, Actualizar y Eliminar servicios
- **Modal de Visualización**: El botón "Ver todos los servicios" abre una vista completa del catálogo en una ventana modal
- **Interfaz intuitiva**: Diseño con tema oscuro y botones de acción claros
- **Base de datos**: Almacena información de los servicios (nombre, descripción, URL de la imagen, etc.)

## 🛠️ Guía de instalación y configuración

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### 1. Requisitos previos

Asegúrate de tener instalado lo siguiente:

- **PHP**: Versión 8.1 o superior
- **Composer**: Gestor de dependencias de PHP
- **Node.js y npm**: Para gestionar las dependencias de JavaScript
- **Base de datos**: MySQL, PostgreSQL, o SQLite

### 2. Clonar el repositorio

Abre una terminal y clona el proyecto de GitHub, luego navega al directorio del proyecto.

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 3. Mover las imágenes a la carpeta de almacenamiento

Si tienes una carpeta de imágenes fuera del proyecto, muévela a la carpeta pública de Laravel para que la aplicación pueda acceder a ellas.

```bash
mv ruta/a/tu/carpeta/de/imagenes public/images
```

### 4. Instalar dependencias

Instala las dependencias de Composer (Laravel) y npm (JavaScript) con los siguientes comandos:

```bash
composer install
npm install
```

### 5. Configurar el archivo .env

Copia el archivo de ejemplo y configura las credenciales de tu base de datos y otras variables de entorno.

```bash
cp .env.example .env
```

Abre el archivo `.env` en tu editor de código y completa la información:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_de_tu_base_de_datos
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```

### 6. Generar la clave de la aplicación

Genera una clave de aplicación para Laravel:

```bash
php artisan key:generate
```

### 7. Ejecutar migraciones y sembrar la base de datos

Crea las tablas de la base de datos y siembra los datos de prueba:

```bash
php artisan migrate --seed
```

### 8. Enlazar el almacenamiento (Storage)

Crea el enlace simbólico para la carpeta storage y las imágenes:

```bash
php artisan storage:link
```

### 9. Compilar los assets

Compila los archivos de JavaScript y CSS:

```bash
npm run dev
```

### 10. Ejecutar el servidor de desarrollo

Inicia el servidor de desarrollo de Laravel:

```bash
php artisan serve
```

Tu proyecto estará disponible en `http://127.0.0.1:8000`.

## 📸 Evidencias del Proyecto

Aquí se muestran los resultados del proyecto en funcionamiento:

- Vista principal de servicios
- Modal de "Ver todos los servicios"
- Modal de "Editar Servicio"

## 🎯 Conclusiones

**Desarrollo Front-end**: Se logró crear una interfaz de usuario interactiva y fluida, resolviendo los problemas de superposición y bloqueo de modales mediante una gestión controlada del estado de los componentes. El diseño de la interfaz de usuario con un tema oscuro y los botones de acción para cada servicio, como "Solicitar", "Editar" y "Eliminar", facilitan la interacción con la aplicación.

**Gestión de Datos**: La implementación del backend en Laravel, con funcionalidad CRUD, permite una gestión eficiente de los datos de los servicios. Se evidencia la conexión exitosa con la base de datos y la persistencia de los datos.

**Integración de Tecnologías**: El proyecto demuestra la capacidad de integrar diferentes tecnologías como Angular (o un framework de frontend similar) con Laravel para crear una aplicación web robusta y escalable.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request.

## 📝 Licencia

Este proyecto está bajo la licencia MIT.
