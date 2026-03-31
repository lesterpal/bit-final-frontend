# bit-final-frontend
## Autor
Lester Palacio Chamorro

# 🚗 Frontend - CarWash

## 🧾 Descripción

Este proyecto corresponde al desarrollo del **frontend de la aplicación CarWash**, un sistema para la gestión de un lavadero de autos.
La aplicación permite la visualización de información y la gestión de vehículos.

El frontend se conecta a un backend desarrollado en Node.js, consumiendo una API que interactúa con una base de datos MongoDB.

---

## 🚀 Tecnologías utilizadas

* **Angular**: Framework principal para el desarrollo del frontend
* **TypeScript**: Lenguaje utilizado para estructurar la lógica de la aplicación
* **HTML & CSS**: Para la estructura y estilos de la interfaz
* **MongoDB**: Base de datos conectada a través del backend
* **Servicios (Services)**: Para la comunicación con la API

---

## 📁 Estructura del proyecto

El proyecto está organizado de la siguiente manera:

```id="k3m9x1"
/carwash-frontend
│
├── src/
│   ├── app/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Vistas principales
│   │   │   ├── home/       # Página de inicio
│   │   │   ├── vehiculos/  # Gestión de vehículos
│   │   │   └── page-not-found/ # Página 404
│   │   │
│   │   ├── shared/         # Componentes compartidos
│   │   │   ├── header/
│   │   │   ├── navigation/
│   │   │   └── footer/
│   │   │
│   │   └── app.module.ts   # Módulo principal
│   │
│   ├── services/           # Servicios para consumir la API
│   └── assets/             # Recursos (imágenes, estilos, etc.)
│
├── angular.json
├── package.json
└── environment.ts
```

---

## 🧭 Vistas principales

### 🏠 Home

* Página de inicio de la aplicación
* Incluye navegación y contenido visual (como slider de imágenes)
* Presenta información general del lavadero de autos

### 🚘 Vehículos

* Permite gestionar los vehículos registrados
* Interactúa con el backend para realizar operaciones CRUD
* Muestra información almacenada en la base de datos

### ⚠️ Page Not Found

* Página mostrada cuando la ruta no existe (404)

---

## 🔌 Comunicación con el backend

La comunicación con el backend se realiza mediante **services** en Angular, los cuales:

* Consumen endpoints REST
* Envían y reciben datos en formato JSON
* Permiten la interacción con la base de datos MongoDB a través del servidor

---

## ⚙️ Configuración del entorno

1. Instalar dependencias:

```
npm install
```

2. Ejecutar la aplicación:

```
ng serve
```

La aplicación estará disponible en:

```
http://localhost:4200
```

---

## 📡 Funcionalidades principales

* Navegación entre vistas (Home y Vehículos)
* Visualización de información del sistema
* Gestión de vehículos (crear, listar, actualizar, eliminar)
* Consumo de API REST desde Angular
* Interfaz estructurada con componentes reutilizables

---

## 📌 Consideraciones finales

* El proyecto sigue una arquitectura modular propia de Angular
* Se separan responsabilidades en componentes, páginas y servicios
* Facilita la escalabilidad y el mantenimiento del código
* Está diseñado para integrarse completamente con el backend del sistema CarWash

---

## 📄 Licencia

Este proyecto es de uso educativo.

## Software Developer

Built by [LESTER](https://github.com/lesterpal) ©️ 2026
Found a bug or have an idea? [Contact me](www.linkedin.com/in/lester-palacio-b7a63b2b0).
