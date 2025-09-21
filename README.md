# TempApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## CSS Framework Elegido

**Bootstrap 5.3**
- Razón: Amplia comunidad, componentes robustos y buena documentación
- Instalación: npm install bootstrap
- Documentación: https://getbootstrap.com/


## Template Utilizado

**Template**: Creative - Start Bootstrap  
**Fuente**: https://startbootstrap.com/theme/creative  
**Licencia**: MIT License  
**Autor**: Start Bootstrap Team


## Funcionalidad Offline

### Cómo probar offline:
1. Ejecutar `ng build` para build de producción
2. Servir con `npx http-server dist/examen-angular-pwa -p 8080`
3. Abrir http://localhost:8080 y navegar por la app
4. En DevTools > Network, activar "Offline"
5. Recargar página - debe seguir funcionando

### Recursos precacheados:
- ✅ HTML principal (index.html)
- ✅ CSS de Bootstrap y estilos personalizados
- ✅ JavaScript de Angular y dependencias
- ✅ Iconos de la PWA
- ✅ Manifest.json
- ✅ Fonts de Font Awesome (cached)

### Verificación del Service Worker:
- DevTools > Application > Service Workers
- Debe aparecer "examen-angular-pwa" activo


## Funcionalidad Offline

### Cómo probar offline:
1. Ejecutar `ng build` para build de producción
2. Servir con `npx http-server dist/examen-angular-pwa -p 8080`
3. Abrir http://localhost:8080 y navegar por la app
4. En DevTools > Network, activar "Offline"
5. Recargar página - debe seguir funcionando

### Recursos precacheados:
- ✅ HTML principal (index.html)
- ✅ CSS de Bootstrap y estilos personalizados
- ✅ JavaScript de Angular y dependencias
- ✅ Iconos de la PWA
- ✅ Manifest.json
- ✅ Fonts de Font Awesome (cached)

### Verificación del Service Worker:
- DevTools > Application > Service Workers
- Debe aparecer "examen-angular-pwa" activo


## 🌐 Deploy en GitHub Pages

**URL del sitio**: https://lauravegaclaros.github.io/segundoexamen

### Deploy automático:
- ✅ GitHub Actions configurado
- ✅ Build automático en cada push a main
- ✅ Deploy automático a GitHub Pages

### Verificaciones del sitio:
- ✅ Sitio carga correctamente
- ✅ Manifest.json accesible en /manifest.json
- ✅ Service Worker registrado (DevTools > Application)
- ✅ Funcionalidad offline operativa
- ✅ Notificaciones funcionan en HTTPS
- ✅ Navegación entre rutas (/ y /ui)
- ✅ Diseño responsive en móvil/desktop
- ✅ PWA instalable (botón "Instalar" en navegador)

### Tecnologías implementadas:
- Angular 20 (standalone components)
- Bootstrap 5.3
- Service Worker (offline capability)
- Web App Manifest (PWA)
- Push Notifications API
- Responsive Design
- Web Accessibility (WCAG)


## 🌐 Deploy en GitHub Pages

**URL del sitio**: https://lauravegaclaros.github.io/segundoexamen

### Deploy automático:
- ✅ GitHub Actions configurado
- ✅ Build automático en cada push a main
- ✅ Deploy automático a GitHub Pages

### Verificaciones del sitio:
- ✅ Sitio carga correctamente
- ✅ Manifest.json accesible en /manifest.json
- ✅ Service Worker registrado (DevTools > Application)
- ✅ Funcionalidad offline operativa
- ✅ Notificaciones funcionan en HTTPS
- ✅ Navegación entre rutas (/ y /ui)
- ✅ Diseño responsive en móvil/desktop
- ✅ PWA instalable (botón "Instalar" en navegador)

### Tecnologías implementadas:
- Angular 20 (standalone components)
- Bootstrap 5.3
- Service Worker (offline capability)
- Web App Manifest (PWA)
- Push Notifications API
- Responsive Design
- Web Accessibility (WCAG)

