# Pastelería Cuquita 🍰

Este es un proyecto desarrollado con Angular 17 para la página web de la **Pastelería Cuquita**, el cual permite promocionar productos y mostrar su ubicación.  

El sitio web está publicado en **GitHub Pages** utilizando la carpeta `/docs` para alojar los archivos de producción.  

## 🚀 Tecnologías utilizadas  
- **Angular 17** (Framework frontend)  
- **TypeScript** (Lenguaje de programación)  
- **GitHub Pages** (Hosting del sitio web)  

## 👅 Clonar el repositorio  

Para obtener una copia local del proyecto, ejecuta el siguiente comando:  

```bash
git clone [URL_DEL_REPOSITORIO]
cd pasteleria-cuquita
```

## 🔧 Construcción y despliegue  

Para publicar los cambios en producción, sigue estos pasos:  

### 1️⃣ **Construir el proyecto**  
Ejecuta el siguiente comando para generar los archivos de producción en la carpeta `docs`:  

```bash
ng build --configuration=production --base-href /pasteleria-cuquita/
```

### 2️⃣ **Crear el archivo `404.html`**  
GitHub Pages necesita un archivo `404.html` para manejar correctamente las rutas en una SPA (Single Page Application). Copia el contenido de `index.html` en `docs/404.html`:  

```bash
cp docs/index.html docs/404.html
```

### 3️⃣ **Subir los cambios a GitHub Pages**  
Ejecuta los siguientes comandos para enviar los cambios a la rama `github-pages`:  

```bash
git add .
git commit -m "Nuevo comentario de cambios"
git push origin github-pages
```

Asegúrate de que la configuración de GitHub Pages en el repositorio apunte a la carpeta `/docs` dentro de la rama `github-pages`.

## 🛠️ Desarrollo local  
Si deseas ejecutar el proyecto en tu entorno local, usa el siguiente comando:  

```bash
ng serve -O
```

Luego, abre en tu navegador: `http://localhost:4200/`.

## 📌 Información adicional  
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión **17.3.12**.  

## 📄 Licencia  
Este proyecto es de código abierto y puede ser utilizado según los términos de la licencia del repositorio.  

