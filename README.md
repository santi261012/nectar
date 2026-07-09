# Gourmet Restaurant App - Guía de Despliegue en Vercel

Este proyecto es una aplicación web gourmet, interactiva y de alto rendimiento, desarrollada en **React (v19)** con **Vite (v6)** y estilizada de forma elegante con **Tailwind CSS**.

Para asegurar que la aplicación funcione a la perfección una vez desplegada (incluyendo el manejo correcto de rutas, animaciones de entrada y enlaces internos), hemos preparado la configuración óptima para **Vercel**.

---

## 🛠️ Archivos de Configuración Creados

1. **`vercel.json`**: Ubicado en la raíz del proyecto. Este archivo configura el comportamiento del servidor de Vercel para una Single Page Application (SPA).
   - `cleanUrls`: Elimina las extensiones `.html` de las URLs para una navegación más limpia.
   - `rewrites`: Redirige cualquier ruta virtual directamente al archivo index.html principal, permitiendo que React controle el enrutamiento sin dar errores de página no encontrada (404) al recargar.

---

## 🚀 Pasos para Desplegar en Vercel

Tienes dos métodos extremadamente sencillos para desplegar tu aplicación en Vercel:

### Método 1: Despliegue mediante GitHub (Recomendado)

Este método habilita la integración continua (CI/CD), lo que significa que cada vez que hagas un `git push` a tu repositorio, Vercel compilará y actualizará tu web automáticamente.

1. **Sube tu código a un repositorio de GitHub, GitLab o Bitbucket.**
2. **Inicia sesión en [Vercel](https://vercel.com).**
3. Haz clic en el botón **"Add New..."** y luego en **"Project"**.
4. Importa tu repositorio de Git recién creado.
5. En la sección **Configure Project**:
   - **Framework Preset**: Vercel detectará automáticamente **Vite**.
   - **Build and Output Settings**: Puedes dejarlos por defecto (`npm run build` y directorio de salida `dist`).
6. Haz clic en **"Deploy"**. ¡Tu web estará lista en menos de un minuto!

---

### Método 2: Despliegue rápido con la CLI de Vercel

Si prefieres desplegar directamente desde tu terminal sin configurar un repositorio de Git:

1. Instala la CLI de Vercel globalmente si aún no la tienes:
   ```bash
   npm install -g vercel
   ```
2. Ejecuta el comando de inicio en la raíz de tu proyecto:
   ```bash
   vercel
   ```
3. Sigue las breves preguntas interactivas en tu terminal (puedes presionar `Enter` para aceptar todos los valores por defecto).
4. Para realizar el despliegue final a producción, ejecuta:
   ```bash
   vercel --prod
   ```

---

## 💡 Configuración de Producción Recomendada

- **Node.js Versión**: Asegúrate de que el proyecto use Node.js 18 o superior en las opciones del panel de control de Vercel (generalmente configurado de manera automática).
- **Vite Cache**: Vercel almacena automáticamente en caché la carpeta `node_modules` para que los despliegues posteriores sean ultra rápidos.
