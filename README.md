# 💻 CrossPay Backend
Backend de la mini pasarela de pagos **CrossPay**, construido con **NestJS** y **TypeScript**, manejando autenticación, transacciones y administración de datos.

## 🚀 Descripción del Proyecto
Este backend se encarga de:

- Gestionar la autenticación de administradores mediante JWT.
- Registrar y obtener transacciones simuladas.
- Servir los datos al frontend (Next.js) de forma segura.
- Conectar con una base de datos PostgreSQL para almacenar la información.

Es parte del proyecto **CrossPay**, que cuenta con frontend y backend separados, ambos desplegados en servicios gratuitos (Vercel y Render).

## Funcionalidades Clave

| Módulo               | Descripción                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| Autenticación        | Gestiona el login del administrador usando JWT y protege rutas privadas. |
| Transacciones        | Permite crear y listar transacciones simuladas, con filtros y paginación. |
| Administración       | Control y gestión de usuarios administradores y validaciones de datos. |

## 🛠 Tecnologías Usadas

| Categoría      | Tecnología             | Versión |
|----------------|----------------------|---------|
| Framework      | NestJS                | 11.0.1  |
| ORM            | TypeORM               | 0.3.27  |
| Base de datos  | PostgreSQL            | Latest  |
| Autenticación  | JWT + Passport-JWT    | Latest  |
| Utilidades     | class-validator, class-transformer, nanoid | Latest |
| Lenguaje       | TypeScript            | 5.7.3   |

## ⚡ Instalación y Configuración

| Paso | Comando / Acción | Descripción |
|------|-----------------|-------------|
| 1    | `git clone https://github.com/JonhatanCorona/crosspay-backend`<br>`cd crosspay-back` | Clonar el repositorio y moverse a la carpeta del proyecto. |
| 2    | `npm install` | Instalar todas las dependencias del proyecto (requiere Node.js v18+). |
| 3    | Crear `.env` basado en `env.example`:<br>`APP_PORT=3001`<br>`JWT_SECRET=your_jwt_secret_here`<br>`ADMIN_EMAIL=admin@example.com`<br>`ADMIN_PASSWORD=your_admin_password_here`<br>`DATABASE_URL=postgresql://username:password@host:port/database_name` | Configurar las variables de entorno para desarrollo. |
| 4    | `npm run start:dev` | Iniciar el servidor en modo desarrollo. |

## 📁 Estructura del Proyecto

| Carpeta / Archivo       | Descripción |
|------------------------|------------|
| `src/`                 | Código fuente principal del backend |
| `src/admin/`           | Módulo, controlador y servicios de administración |
| `src/auth/`            | Módulo, controlador y servicios de autenticación |
| `src/transactions/`    | Módulo, controlador y servicios de transacciones |
| `common/`              | Enums, guards y utilidades compartidas |
| `config/`              | Configuración de TypeORM  |
| `dist/`                | Código compilado |
| `env.example`          | Ejemplo de variables de entorno |
| `package.json`         | Dependencias y scripts del proyecto |
| `README.md`            | Documentación del proyecto |

## 🔗 Endpoints de la API

| Método | Ruta           | Descripción                                             |
|--------|---------------|---------------------------------------------------------|
| POST   | auth/login         | Autentica al usuario administrador.                     |
| POST   | /transactions  | Registra una nueva transacción (pago simulado).         |
| GET    | admin/transactions  | Obtiene el listado completo de transacciones (con filtros y paginación). |

## 📌 Notas Finales

| Concepto | Descripción |
|-----------|------------|
| Simulación | Esta API no realiza transacciones reales ni valida tarjetas bancarias; todos los datos se manejan de manera simulada. |
| Despliegue | El backend está desplegado en Render: `https://crosspay-backend.onrender.com`. |
| Seguridad | No se deben usar las credenciales del `.env.example` en producción. |

## ⚙️ Razones de la Elección del Stack

- **NestJS + TypeScript:** Ofrece estructura modular, escalabilidad y seguridad para el backend.  
- **TypeORM + PostgreSQL:** Permite modelar y gestionar datos de forma robusta y eficiente.  
- **JWT + Passport-JWT:** Autenticación segura con protección de rutas privadas.  
- **Servicios separados (Vercel y Render):** Permite desplegar frontend y backend de forma independiente, facilitando mantenimiento y escalabilidad.

## 💡 Posibles Mejoras

- Integrar **pagos reales** usando Stripe o PayPal.  
- Añadir **roles y permisos avanzados** para administradores.  
- Implementar **logging y monitoreo** de transacciones y accesos.  
- Añadir **tests unitarios y de integración** más completos.  
- Mejorar el **dashboard administrativo** con gráficas y estadísticas de transacciones.
