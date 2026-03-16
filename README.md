# Node & Express Web App

Proyecto de evaluación del Módulo 6 

Aplicación backend con Node.js y Express que sirve contenido web, gestiona rutas modulares y registra accesos en archivos planos.

---

## Instalación

```bash
git clone https://github.com/mvmv1428/ABP6.git
cd ABP6
npm install
```

## Ejecución

```bash
npm start       # Ejecuta con node app.js
npm run dev     # Ejecuta con nodemon (reinicio automático)
```

Acceder a `http://localhost:3000` en el navegador.

## Rutas

| Ruta      | Método | Respuesta | Descripción                     |
|-----------|--------|-----------|---------------------------------|
| `/`       | GET    | HTML      | Página de inicio                |
| `/status` | GET    | JSON      | Estado del servidor (uptime, timestamp) |

## Estructura del proyecto

```
node-express-app/
├── app.js                # Archivo principal del servidor
├── package.json          # Dependencias y scripts
├── .gitignore
├── README.md
├── routes/               # Definición de rutas
│   ├── homeRoutes.js
│   └── statusRoutes.js
├── controllers/          # Lógica de cada ruta
│   ├── homeController.js
│   └── statusController.js
├── middlewares/           # Middlewares personalizados
│   └── logger.js
├── services/             # Lógica de persistencia
│   └── logService.js
├── public/               # Archivos estáticos
│   └── styles.css
└── logs/                 # Registro de accesos
    └── logs.txt
```

## Decisiones técnicas

**¿Por qué `app.js` y no `index.js`?**
Se eligió `app.js` porque es la convención en proyectos Express. El nombre comunica que este archivo configura la aplicación web, mientras que `index.js` es un nombre genérico de Node.js.

**Estructura modular:**
Se separó el código en rutas, controladores, middlewares y servicios para respetar el principio de responsabilidad única. Cada carpeta tiene un rol claro, lo que facilita el mantenimiento y la escalabilidad.

**Persistencia en archivos planos:**
Se eligió registrar los accesos HTTP (fecha, hora, método y ruta) en `logs/logs.txt` usando `fs.appendFile()`. Se registran las visitas a las rutas porque es el caso de uso más representativo de un log de servidor.

**Scripts de ejecución:**
- `npm start` usa `node` directamente, pensado para producción.
- `npm run dev` usa `nodemon` para reiniciar automáticamente durante el desarrollo.

Se eligieron estos nombres porque son la convención estándar en el ecosistema Node.js.

## Ejemplo de logs.txt

Después de visitar las rutas, el archivo `logs/logs.txt` registra:

```
[15-03-2026] [11:15:18 p. m.] GET /
[15-03-2026] [11:15:18 p. m.] GET /styles.css
[15-03-2026] [11:15:31 p. m.] GET /status
[15-03-2026] [11:17:44 p. m.] GET /status
[15-03-2026] [11:20:17 p. m.] GET /status
[15-03-2026] [11:20:24 p. m.] GET /status
[15-03-2026] [11:20:39 p. m.] GET /status
[15-03-2026] [11:21:02 p. m.] GET /
[15-03-2026] [11:21:02 p. m.] GET /styles.css

```
