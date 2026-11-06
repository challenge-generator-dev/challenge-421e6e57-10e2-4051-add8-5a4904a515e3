# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Archivos que la arquitectura del reto declara y no estan

Creálos con implementacion real, en la capa que les corresponde:

- `src/features/AccountDashboard.tsx`
- `src/features/TransferForm.tsx`
- `src/features/TransactionHistory.tsx`

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `package.json` — `typescript@5.7.0-dev.20240607`: typescript declara la version 5.7.0-dev.20240607, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2

### Brecha de conocimiento
Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web, Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web

### Reto
- Tema: Estándares Aria (Accessible Rich Internet Applications)
- Seniority: trainee-l2
- Tipo: practical
- Título: Implementación de Estándares ARIA en una Aplicación React
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Identificación de Elementos Clave — objetivo: Identificar los elementos de la interfaz de usuario que requieren mejoras en accesibilidad según los estándares ARIA. — entregable (NO resolver): Lista de elementos de la interfaz de usuario que requieren mejoras en accesibilidad con los atributos ARIA necesarios.
- Fase 2: Implementación de Atributos ARIA — objetivo: Implementar los atributos ARIA identificados en la fase anterior para mejorar la accesibilidad de la aplicación. — entregable (NO resolver): Código fuente modificado con los atributos ARIA implementados y prueba de accesibilidad realizada.
- Fase 3: Revisión y Documentación — objetivo: Revisar los cambios implementados y documentar el proceso y las decisiones tomadas. — entregable (NO resolver): Documentación que detalla el proceso de implementación de los atributos ARIA, las decisiones tomadas y los resultados de las pruebas de accesibilidad.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "financial-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "eslint src --ext ts,tsx"
  },
  "dependencies": {
    "react": "19.0.0-rc.0",
    "react-dom": "19.0.0-rc.0",
    "sass": "1.69.5"
  },
  "devDependencies": {
    "@types/react": "18.2.45",
    "@types/react-dom": "18.2.18",
    "@vitejs/plugin-react": "4.2.1",
    "typescript": "5.7.0-dev.20240607",
    "vite": "5.0.10",
    "@testing-library/react": "14.1.2",
    "@testing-library/jest-dom": "6.1.5",
    "eslint": "8.56.0",
    "eslint-plugin-react": "7.33.2",
    "eslint-plugin-react-hooks": "4.6.0",
    "eslint-plugin-jsx-a11y": "6.8.0"
  }
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/global.scss";'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  }
});

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "react-jsx",
    "strict": true,
    "noImplicitAny": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "types": ["vite/client"]
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@/styles/global.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Initialize aria-live regions for dynamic content updates
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.style.position = 'absolute';
liveRegion.style.width = '1px';
liveRegion.style.height = '1px';
liveRegion.style.margin = '-1px';
liveRegion.style.padding = '0';
liveRegion.style.overflow = 'hidden';
liveRegion.style.clip = 'rect(0, 0, 0, 0)';
liveRegion.style.border = '0';
document.body.appendChild(liveRegion);

export const announce = (message: string) => {
  if (liveRegion) {
    liveRegion.textContent = message;
  }
};

// === ARCHIVO: src/app/App.tsx ===
import { useState, useEffect } from 'react';
import AccountDashboard from '@/features/AccountDashboard';
import TransferForm from '@/features/TransferForm';
import TransactionHistory from '@/features/TransactionHistory';
import '@/styles/global.scss';
import { announce } from '../main';

type Tab = 'dashboard' | 'transfer' | 'history';

const App = () => {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [userBalance, setUserBalance] = useState<number>(1000);
  const [transactions, setTransactions] = useState<Array<{id: string, amount: number, date: string, description: string}>>([]);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = () => {
      try {
        // In a real app, this would be an API call
        setUserBalance(1500);
        setTransactions([
          { id: '1', amount: 500, date: '2023-05-01', description: 'Deposit' },
          { id: '2', amount: -200, date: '2023-05-02', description: 'Transfer to Savings' }
        ]);
        announce('Datos de cuenta cargados');
      } catch (error) {
        announce('Error al cargar datos de la cuenta');
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleTransfer = (amount: number, recipient: string) => {
    if (amount <= 0) {
      announce('Error: El monto debe ser mayor a cero');
      return;
    }

    if (amount > userBalance) {
      announce('Error: Fondos insuficientes');
      return;
    }

    try {
      const newTransaction = {
        id: Date.now().toString(),
        amount: -amount,
        date: new Date().toISOString().split('T')[0],
        description: `Transfer to ${recipient}`
      };

      setUserBalance(prev => prev - amount);
      setTransactions(prev => [newTransaction, ...prev]);
      announce(`Transferencia de ${amount} realizada a ${recipient}`);
    } catch (error) {
      announce('Error al realizar la transferencia');
      console.error('Transfer failed:', error);
    }
  };

  return (
    <div className="app-container" role="application" aria-label="Aplicación de banca personal">
      <header className="app-header" role="banner">
        <h1>Banca Personal</h1>
      </header>

      <nav className="app-nav" role="navigation" aria-label="Navegación principal">
        <ul role="menubar">
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'dashboard'}
              aria-controls="dashboard-panel"
              onClick={() => setActiveTab('dashboard')}
            >
              Dashboard
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'transfer'}
              aria-controls="transfer-panel"
              onClick={() => setActiveTab('transfer')}
            >
              Transferencia
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              aria-selected={activeTab === 'history'}
              aria-controls="history-panel"
              onClick={() => setActiveTab('history')}
            >
              Historial
            </button>
          </li>
        </ul>
      </nav>

      <main className="app-main" role="main">
        <div
          id="dashboard-panel"
          role="region"
          aria-labelledby="dashboard-heading"
          hidden={activeTab !== 'dashboard'}
        >
          <h2 id="dashboard-heading">Resumen de Cuenta</h2>
          <AccountDashboard balance={userBalance} />
        </div>

        <div
          id="transfer-panel"
          role="region"
          aria-labelledby="transfer-heading"
          hidden={activeTab !== 'transfer'}
        >
          <h2 id="transfer-heading">Realizar Transferencia</h2>
          <TransferForm onTransfer={handleTransfer} />
        </div>

        <div
          id="history-panel"
          role="region"
          aria-labelledby="history-heading"
          hidden={activeTab !== 'history'}
        >
          <h2 id="history-heading">Historial de Transacciones</h2>
          <TransactionHistory transactions={transactions} />
        </div>
      </main>

      <footer className="app-footer" role="contentinfo">
        <p>© 2023 Banca Personal. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;


// === ARCHIVO: index.html ===
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Aplicación de gestión financiera - Consulta tu saldo, realiza transferencias y gestiona tu historial de transacciones de manera segura." />
    <meta name="theme-color" content="#1e3a5f" />
    <title>Financial App - Gestión de Cuentas</title>
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <style>
      /* Critical CSS para evitar FOUC */
      html { visibility: hidden; }
      html.loaded { visibility: visible; }
      
      /* Estilos para el estado de carga inicial */
      .app-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: #f5f7fa;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      }
      
      .app-loading-spinner {
        width: 48px;
        height: 48px;
        border: 4px solid #e1e5eb;
        border-top-color: #1e3a5f;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        to { transform: rotate(360deg); }
      }
      
      /* Skip link para navegación por teclado */
      .skip-link {
        position: absolute;
        top: -100px;
        left: 16px;
        padding: 12px 24px;
        background-color: #1e3a5f;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.2s ease;
      }
      
      .skip-link:focus {
        top: 16px;
      }
      
      /* Soporte para modo de alto contraste */
      @media (prefers-contrast: high) {
        .app-loading-spinner {
          border-color: #000;
          border-top-color: #000;
        }
      }
      
      /* Soporte para movimiento reducido */
      @media (prefers-reduced-motion: reduce) {
        .app-loading-spinner {
          animation: none;
          border-top-color: #1e3a5f;
        }
      }
    </style>
  </head>
  <body>
    <a href="#main-content" class="skip-link">Saltar al contenido principal</a>
    
    <div id="root" class="app-loading" role="application" aria-label="Aplicación de gestión financiera">
      <div class="app-loading-spinner" role="status" aria-label="Cargando aplicación"></div>
    </div>
    
    <!-- Punto de entrada de la aplicación React -->
    <script type="module" src="/src/main.tsx"></script>
    
    <script>
      // Eliminar clase de carga cuando el DOM esté listo
      document.addEventListener('DOMContentLoaded', function() {
        document.documentElement.classList.add('loaded');
      });
    </script>
    
    <!-- Mensaje para usuarios con JavaScript deshabilitado -->
    <noscript>
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <p>Esta aplicación requiere JavaScript para funcionar correctamente.</p>
        <p>Por favor, habilite JavaScript en su navegador para continuar usando la aplicación.</p>
      </div>
    </noscript>
  </body>
</html>

// === ARCHIVO: README.md ===
# Financial App - Aplicación de Gestión Financiera

Aplicación web desarrollada en React 19 para la gestión de cuentas bancarias, transferencias y consulta de historial de transacciones. Implementa estándares ARIA para garantizar accesibilidad a usuarios con discapacidades visuales que dependen de tecnologías de asistencia.

## Características Principales

- **Dashboard de Cuenta**: Visualización del saldo actual y movimientos recientes
- **Transferencias**: Envío de dinero entre cuentas de forma segura
- **Historial de Transacciones**: Consulta completa del historial con filtros
- **Accesibilidad Completa**: Implementación de atributos ARIA según WAI-ARIA 1.2

## Requisitos del Sistema

- Node.js 20.x o superior
- npm 10.x o superior
- Navegador moderno con soporte para ES2020

## Instalación

```bash
# Instalar dependencias del proyecto
npm install

# Iniciar servidor de desarrollo
npm run dev

# Ejecutar pruebas unitarias
npm test

# Construir para producción
npm run build

# Vista previa de la build de producción
npm run preview
```

## Estructura del Proyecto

```
financial-app/
├── src/
│   ├── app/
│   │   ├── App.tsx              # Componente raíz de la aplicación
│   │   ├── App.test.tsx         # Pruebas del componente raíz
│   │   └── app.config.ts        # Configuración de providers
│   ├── features/
│   │   ├── AccountDashboard.tsx # Dashboard de cuenta
│   │   ├── TransferForm.tsx     # Formulario de transferencias
│   │   ├── TransferForm.test.tsx
│   │   └── TransactionHistory.tsx # Historial de transacciones
│   ├── shared/
│   │   ├── Button.tsx           # Componente de botón reutilizable
│   │   ├── Input.tsx            # Componente de entrada de texto
│   │   └── Alert.tsx            # Componente de alertas
│   ├── services/
│   │   └── api.ts               # Cliente HTTP para API
│   ├── styles/
│   │   └── global.scss          # Estilos globales
│   └── main.tsx                 # Punto de entrada
├── index.html                   # Documento HTML principal
├── package.json                 # Dependencias y scripts
├── tsconfig.json                # Configuración de TypeScript
├── vite.config.ts               # Configuración de Vite
└── README.md                    # Este archivo
```

## Patrón de Arquitectura

La aplicación sigue el patrón **Contenedor/Presentacional** (Container/Presentational):

- **Componentes Contenedores** (features/): Gestionan estado y lógica de negocio, realizan llamadas a servicios API.
- **Componentes Presentacionales** (shared/): Renderizan interfaz de usuario basados únicamente en props recibidas, sin dependencias externas.

## Estándares de Accesibilidad ARIA

Esta aplicación implementa los siguientes atributos ARIA según las especificaciones WAI-ARIA 1.2:

### Roles Aplicados
- `role="application"`: Identifica la región principal de la aplicación
- `role="navigation"`: Identifica regiones de navegación
- `role="form"`: Identifica formularios con propósito específico
- `role="status"`: Proporciona información de estado a tecnologías asistivas
- `role="alert"`: Comunicar mensajes importantes de forma inmediata

### Propiedades ARIA
- `aria-label`: Proporciona texto alternativo descriptivo
- `aria-describedby`: Asocia elementos descriptivos
- `aria-live`: Indica regiones con actualización dinámica
- `aria-required`: Indica campos obligatorios en formularios
- `aria-invalid`: Indica estado de validación de campos
- `aria-disabled`: Indica elementos deshabilitados
- `aria-hidden`: Oculta elementos de tecnologías asistivas

### Estados ARIA
- `aria-expanded`: Indica estado expandido/colapsado
- `aria-selected`: Indica selección en componentes de tabs
- `aria-checked`: Indica estado de selección en checkboxes
- `aria-pressed`: Indica estado de toggle en botones

### Navegación por Teclado
- Todos los elementos interactivos son alcanzables mediante Tab
- El enlace "Saltar al contenido principal" permite skip de navegación
- Los atajos de teclado siguen las convenciones establecidas
- El foco visual es claramente visible

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en modo watch |
| `npm run build` | Construye los archivos para producción |
| `npm run preview` | Servir la build de producción localmente |
| `npm test` | Ejecuta las pruebas con Vitest |
| `npm run lint` | Ejecuta ESLint para análisis estático |

## Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript 5.7** - Tipado estático
- **Vite 5** - Build tool y servidor de desarrollo
- **SCSS** - Preprocesador de CSS
- **Vitest** - Framework de testing
- **Testing Library** - Utilidades de testing para componentes

## Consideraciones de Accesibilidad

Esta aplicación fue diseñada considerando los siguientes principios:

1. **Perceptible**: La información y componentes de interfaz deben ser presentables a los usuarios de maneras que puedan percibir
2. **Operable**: Los componentes de interfaz deben ser operables por todos los usuarios
3. **Comprensible**: La información y operación de la interfaz debe ser comprensible
4. **Robusto**: El contenido debe ser lo suficientemente robusto para ser interpretado por una amplia variedad de agentes de usuario, incluyendo tecnologías asistivas

## Pruebas de Accesibilidad

Se recomienda ejecutar las siguientes verificaciones:

- **Navegadores con herramientas de desarrollo**: Auditoría de Lighthouse
- **NVDA** (Windows): Lector de pantalla gratuito
- **VoiceOver** (macOS): Lector de pantalla integrado
- **axe DevTools**: Extensión para análisis de accesibilidad

## Contribución

Para contribuir al proyecto:

1. Fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## Licencia

Este proyecto es propiedad de la compañía de servicios financieros. Todos los derechos reservados.

---

Para más información sobre los estándares ARIA, consulta la [documentación oficial de WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/).


// === ARCHIVO: src/features/TransferForm.test.tsx ===
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { TransferForm } from './TransferForm';

describe('TransferForm - Pruebas de Accesibilidad ARIA', () => {
  const renderComponent = () => {
    return render(<TransferForm onSubmit={jest.fn()} />);
  };

  describe('Atributos ARIA en el formulario', () => {
    it('debe tener role="form" en el elemento del formulario', () => {
      renderComponent();
      const form = screen.getByRole('form');
      expect(form).toBeInTheDocument();
    });

    it('debe tener aria-labelledby con referencia al título del formulario', () => {
      renderComponent();
      const form = screen.getByRole('form');
      const title = screen.getByText(/transferencia/i);
      expect(form).toHaveAttribute('aria-labelledby', title.id);
    });

    it('debe tener aria-describedby con referencia a las instrucciones', () => {
      renderComponent();
      const form = screen.getByRole('form');
      const instructions = screen.getByText(/completa los datos/i);
      expect(form).toHaveAttribute('aria-describedby', instructions.id);
    });
  });

  describe('Atributos ARIA en campos de entrada', () => {
    it('debe tener aria-required="true" en los campos obligatorios', () => {
      renderComponent();
      const accountInput = screen.getByLabelText(/cuenta origen/i);
      const amountInput = screen.getByLabelText(/monto/i);
      expect(accountInput).toHaveAttribute('aria-required', 'true');
      expect(amountInput).toHaveAttribute('aria-required', 'true');
    });

    it('debe tener aria-invalid="false" inicialmente en campos válidos', () => {
      renderComponent();
      const accountInput = screen.getByLabelText(/cuenta origen/i);
      const amountInput = screen.getByLabelText(/monto/i);
      expect(accountInput).toHaveAttribute('aria-invalid', 'false');
      expect(amountInput).toHaveAttribute('aria-invalid', 'false');
    });

    it('debe tener aria-invalid="true" cuando el campo tiene error de validación', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '-50');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        expect(amountInput).toHaveAttribute('aria-invalid', 'true');
      });
    });

    it('debe tener aria-describedby pointing a mensajes de error', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '0');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const errorMessage = screen.getByText(/el monto debe ser mayor/i);
        expect(amountInput).toHaveAttribute('aria-describedby', errorMessage.id);
      });
    });
  });

  describe('Atributos ARIA en botones', () => {
    it('debe tener aria-disabled="true" cuando el formulario es inválido', () => {
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      expect(submitButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('debe tener aria-disabled="false" cuando el formulario es válido', async () => {
      const user = userEvent.setup();
      renderComponent();
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await waitFor(() => {
        expect(submitButton).toHaveAttribute('aria-disabled', 'false');
      });
    });

    it('debe tener aria-pressed cuando el botón está en proceso de carga', async () => {
      const mockSubmit = jest.fn(() => new Promise(resolve => setTimeout(resolve, 100)));
      const user = userEvent.setup();
      render(<TransferForm onSubmit={mockSubmit} />);
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      expect(submitButton).toHaveAttribute('aria-pressed', 'true');
    });
  });

  describe('Regiones ARIA y live regions', () => {
    it('debe tener una region aria-live para mensajes de error', () => {
      renderComponent();
      const liveRegion = screen.getByRole('alert');
      expect(liveRegion).toBeInTheDocument();
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    });

    it('debe tener aria-atomic="true" en la region de errores', () => {
      renderComponent();
      const liveRegion = screen.getByRole('alert');
      expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
    });

    it('debe mostrar errores en la region live despues de validacion fallida', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/hay errores en el formulario/i);
      });
    });
  });

  describe('Navegacion por teclado y focus', () => {
    it('debe mantener el orden de tabulacion logico entre campos', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.tab();
      const firstInput = screen.getByLabelText(/cuenta origen/i);
      expect(document.activeElement).toBe(firstInput);
      await user.tab();
      const secondInput = screen.getByLabelText(/cuenta destino/i);
      expect(document.activeElement).toBe(secondInput);
      await user.tab();
      const amountInput = screen.getByLabelText(/monto/i);
      expect(document.activeElement).toBe(amountInput);
      await user.tab();
      expect(document.activeElement).toBe(submitButton);
    });

    it('debe mover el foco al primer campo con error despues de validacion fallida', async () => {
      const user = userEvent.setup();
      renderComponent();
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const firstInput = screen.getByLabelText(/cuenta origen/i);
        expect(document.activeElement).toBe(firstInput);
      });
    });
  });

  describe('Etiquetas y relaciones ARIA', () => {
    it('debe tener labels asociados correctamente con htmlFor o aria-label', () => {
      renderComponent();
      expect(screen.getByLabelText(/cuenta origen/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/cuenta destino/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/monto/i)).toBeInTheDocument();
    });

    it('debe tener aria-describedby para texto de ayuda', () => {
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      const helpText = screen.getByText(/monto minimo/i);
      expect(amountInput).toHaveAttribute('aria-describedby', helpText.id);
    });
  });

  describe('Manejo de estados invalidos', () => {
    it('debe announciar el error de cuenta origen cuando esta vacio', async () => {
      const user = userEvent.setup();
      renderComponent();
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(amountInput, '100');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/cuenta origen es requerido/i);
      });
    });

    it('debe announciar el error de monto invalido', async () => {
      const user = userEvent.setup();
      renderComponent();
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '99999999');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      const liveRegion = screen.getByRole('alert');
      await waitFor(() => {
        expect(liveRegion).toHaveTextContent(/monto excede el saldo disponible/i);
      });
    });
  });

  describe('Verificacion de roles ARIA', () => {
    it('debe tener role="group" para cada seccion del formulario', () => {
      renderComponent();
      const groups = screen.getAllByRole('group');
      expect(groups.length).toBeGreaterThan(0);
    });

    it('debe tener role="status" para el mensaje de exito', async () => {
      const mockSubmit = jest.fn(() => Promise.resolve());
      const user = userEvent.setup();
      render(<TransferForm onSubmit={mockSubmit} />);
      const sourceAccount = screen.getByLabelText(/cuenta origen/i);
      const destinationAccount = screen.getByLabelText(/cuenta destino/i);
      const amountInput = screen.getByLabelText(/monto/i);
      await user.type(sourceAccount, '1234567890');
      await user.type(destinationAccount, '0987654321');
      await user.type(amountInput, '1000');
      const submitButton = screen.getByRole('button', { name: /enviar/i });
      await user.click(submitButton);
      await waitFor(() => {
        const statusRegion = screen.getByRole('status');
        expect(statusRegion).toHaveTextContent(/transferencia exitosa/i);
      });
    });
  });
});


// === ARCHIVO: src/shared/Button.tsx ===
import React from 'react';
import './Button.scss';

export interface ButtonProps {
  /** Texto visible del botón */
  children: React.ReactNode;
  /** Tipo de botón según HTML spec */
  type?: 'button' | 'submit' | 'reset';
  /** Variante visual del botón */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Tamaño del botón */
  size?: 'small' | 'medium' | 'large';
  /** Estado deshabilitado del botón */
  disabled?: boolean;
  /** Carga de estado async */
  loading?: boolean;
  /** Icono opcional al inicio */
  startIcon?: React.ReactNode;
  /** Icono opcional al final */
  endIcon?: React.ReactNode;
  /** Etiqueta accesible para tecnologías de asistencia */
  ariaLabel?: string;
  /** Descripción adicional para aria-describedby */
  ariaDescribedBy?: string;
  /** Indica si el botón controla un elemento expandido */
  ariaExpanded?: boolean;
  /** Indica si el botón tiene un popup asociado */
  ariaHasPopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  /** ID del elemento que el botón controla */
  ariaControls?: string;
  /** Indica el comportamiento de pressed para toggle buttons */
  ariaPressed?: boolean;
  /** Callback ejecutado al hacer click */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Callback ejecutado al enfocar */
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Callback ejecutado al perder el foco */
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  ariaLabel,
  ariaDescribedBy,
  ariaExpanded,
  ariaHasPopup,
  ariaControls,
  ariaPressed,
  onClick,
  onFocus,
  onBlur,
  className = '',
  style,
  testId,
}) => {
  const isDisabled = disabled || loading;

  const buttonClasses = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    loading && 'btn--loading',
    isDisabled && 'btn--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  const getAriaAttributes = (): React.AriaAttributes => {
    const attributes: React.AriaAttributes = {};

    if (ariaLabel) {
      attributes['aria-label'] = ariaLabel;
    }

    if (ariaDescribedBy) {
      attributes['aria-describedby'] = ariaDescribedBy;
    }

    if (ariaExpanded !== undefined) {
      attributes['aria-expanded'] = ariaExpanded;
    }

    if (ariaHasPopup) {
      attributes['aria-haspopup'] = ariaHasPopup;
    }

    if (ariaControls) {
      attributes['aria-controls'] = ariaControls;
    }

    if (ariaPressed !== undefined) {
      attributes['aria-pressed'] = ariaPressed;
    }

    if (loading) {
      attributes['aria-busy'] = true;
      attributes['aria-live'] = 'polite';
    }

    return attributes;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      onClick={handleClick}
      onFocus={onFocus}
      onBlur={onBlur}
      style={style}
      data-testid={testId}
      {...getAriaAttributes()}
    >
      {loading && (
        <span className="btn__spinner" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="31.4 31.4"
            />
          </svg>
        </span>
      )}
      {!loading && startIcon && (
        <span className="btn__icon btn__icon--start" aria-hidden="true">
          {startIcon}
        </span>
      )}
      <span className="btn__text">{children}</span>
      {!loading && endIcon && (
        <span className="btn__icon btn__icon--end" aria-hidden="true">
          {endIcon}
        </span>
      )}
    </button>
  );
};

Button.displayName = 'Button';

// === ARCHIVO: src/shared/Button.scss ===
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: inherit;
  font-weight: 600;
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
  }

  &:disabled,
  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &--small {
    padding: 6px 12px;
    font-size: 0.875rem;
  }

  &--medium {
    padding: 10px 20px;
    font-size: 1rem;
  }

  &--large {
    padding: 14px 28px;
    font-size: 1.125rem;
  }

  &--primary {
    background-color: #2563eb;
    color: #ffffff;

    &:hover:not(:disabled) {
      background-color: #1d4ed8;
    }

    &:active:not(:disabled) {
      background-color: #1e40af;
    }
  }

  &--secondary {
    background-color: #64748b;
    color: #ffffff;

    &:hover:not(:disabled) {
      background-color: #475569;
    }

    &:active:not(:disabled) {
      background-color: #334155;
    }
  }

  &--outline {
    background-color: transparent;
    color: #2563eb;
    border-color: #2563eb;

    &:hover:not(:disabled) {
      background-color: #eff6ff;
    }

    &:active:not(:disabled) {
      background-color: #dbeafe;
    }
  }

  &--ghost {
    background-color: transparent;
    color: #374151;

    &:hover:not(:disabled) {
      background-color: #f3f4f6;
    }

    &:active:not(:disabled) {
      background-color: #e5e7eb;
    }
  }

  &--loading {
    position: relative;
    color: transparent;
  }

  &__spinner {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      animation: spin 1s linear infinite;
    }
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;

    &--start {
      margin-right: 4px;
    }

    &--end {
      margin-left: 4px;
    }
  }

  &__text {
    display: inline-block;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// === ARCHIVO: src/shared/Input.tsx ===
import React from 'react';
import './Input.scss';

export interface InputProps {
  /** Tipo de input según HTML spec */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
  /** Nombre del campo para el formulario */
  name: string;
  /** Valor actual del input */
  value?: string;
  /** Placeholder visible */
  placeholder?: string;
  /** Etiqueta visible para el usuario */
  label: string;
  /** Descripción adicional debajo del input */
  description?: string;
  /** Indica si el campo es obligatorio */
  required?: boolean;
  /** Indica si el campo está deshabilitado */
  disabled?: boolean;
  /** Indica si el campo es de solo lectura */
  readOnly?: boolean;
  /** Indica si el valor es inválido */
  invalid?: boolean;
  /** Mensaje de error a mostrar */
  errorMessage?: string;
  /** Patrón de validación regex */
  pattern?: string;
  /** Longitud mínima */
  minLength?: number;
  /** Longitud máxima */
  maxLength?: number;
  /** Valor mínimo para inputs numéricos */
  min?: number | string;
  /** Valor máximo para inputs numéricos */
  max?: number | string;
  /** Paso para inputs numéricos */
  step?: number | string;
  /** Autocomplete attribute */
  autoComplete?: string;
  /** Autofocus al montar */
  autoFocus?: boolean;
  /** ID único del input */
  id?: string;
  /** ID del contenedor para aria-describedby */
  describedById?: string;
  /** Indica si el input tiene ayuda contextual */
  ariaHelpText?: string;
  /** Callback al cambiar el valor */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback al perder el foco */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback al obtener el foco */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback al presionar teclas */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  value,
  placeholder,
  label,
  description,
  required = false,
  disabled = false,
  readOnly = false,
  invalid = false,
  errorMessage,
  pattern,
  minLength,
  maxLength,
  min,
  max,
  step,
  autoComplete,
  autoFocus = false,
  id,
  describedById,
  ariaHelpText,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  className = '',
  style,
  testId,
}) => {
  const inputId = id || `input-${name}`;
  const errorId = `${inputId}-error`;
  const descriptionId = describedById || `${inputId}-description`;
  const helpTextId = ariaHelpText ? `${inputId}-help` : undefined;

  const hasError = invalid || (errorMessage && errorMessage.length > 0);
  const describedBy = [
    description ? descriptionId : null,
    hasError ? errorId : null,
    helpTextId,
  ]
    .filter(Boolean)
    .join(' ');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled && onChange) {
      onChange(event);
    }
  };

  const getInputClasses = (): string => {
    const classes = ['input__field'];
    if (hasError) classes.push('input__field--error');
    if (disabled) classes.push('input__field--disabled');
    return classes.join(' ');
  };

  return (
    <div
      className={`input ${hasError ? 'input--invalid' : ''} ${disabled ? 'input--disabled' : ''} ${className}`}
      style={style}
      data-testid={testId}
    >
      <label htmlFor={inputId} className="input__label">
        {label}
        {required && <span className="input__required" aria-hidden="true"> *</span>}
      </label>

      {description && !hasError && (
        <p id={descriptionId} className="input__description">
          {description}
        </p>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        step={step}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        className={getInputClasses()}
        onChange={handleChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        aria-invalid={hasError}
        aria-required={required}
        aria-describedby={describedBy || undefined}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        {...(helpTextId && { 'aria-describedby': `${describedBy} ${helpTextId}`.trim() })}
      />

      {hasError && errorMessage && (
        <p id={errorId} className="input__error" role="alert" aria-live="polite">
          {errorMessage}
        </p>
      )}

      {ariaHelpText && !hasError && (
        <p id={helpTextId} className="input__help">
          {ariaHelpText}
        </p>
      )}
    </div>
  );
};

Input.displayName = 'Input';

// === ARCHIVO: src/shared/Input.scss ===
.input {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;

  &__label {
    font-size: 0.9375rem;
    font-weight: 500;
    color: #374151;
  }

  &__required {
    color: #dc2626;
    margin-left: 2px;
  }

  &__field {
    width: 100%;
    padding: 10px 14px;
    font-size: 1rem;
    font-family: inherit;
    color: #111827;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
    }

    &:focus-visible {
      outline: none;
    }

    &--error {
      border-color: #dc2626;

      &:focus {
        border-color: #dc2626;
        box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
      }
    }

    &--disabled {
      background-color: #f3f4f6;
      color: #9ca3af;
      cursor: not-allowed;
    }
  }

  &__description {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
  }

  &__error {
    font-size: 0.875rem;
    color: #dc2626;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  &__help {
    font-size: 0.875rem;
    color: #6b7280;
    margin: 0;
  }

  &--invalid {
    .input__field {
      border-color: #dc2626;
    }
  }

  &--disabled {
    opacity: 0.7;
  }
}

// === ARCHIVO: src/shared/Alert.tsx ===
import React from 'react';
import './Alert.scss';

export type AlertSeverity = 'success' | 'error' | 'warning' | 'info';

export interface AlertProps {
  /** Mensaje principal de la alerta */
  message: string;
  /** Título opcional para la alerta */
  title?: string;
  /** Severidad que determina el estilo visual */
  severity?: AlertSeverity;
  /** Indica si la alerta se puede cerrar */
  dismissible?: boolean;
  /** Callback ejecutado al cerrar la alerta */
  onDismiss?: () => void;
  /** Indica si la alerta es visible */
  visible?: boolean;
  /** Indica si la alerta tiene rol de live region para announce */
  isLiveRegion?: boolean;
  /** Personalización del rol de aria */
  ariaRole?: 'alert' | 'status' | 'log' | 'marquee' | 'timer';
  /** Nivel de verbosidad de aria-live */
  ariaLive?: 'polite' | 'assertive' | 'off';
  /** ID único para referenciación */
  id?: string;
  /** Acciones adicionales como botones */
  action?: React.ReactNode;
  /** Clase CSS adicional */
  className?: string;
  /** Estilos inline adicionales */
  style?: React.CSSProperties;
  /** Test id para testing */
  testId?: string;
}

export const Alert: React.FC<AlertProps> = ({
  message,
  title,
  severity = 'info',
  dismissible = false,
  onDismiss,
  visible = true,
  isLiveRegion = false,
  ariaRole,
  ariaLive = 'polite',
  id,
  action,
  className = '',
  style,
  testId,
}) => {
  if (!visible) {
    return null;
  }

  const alertId = id || `alert-${Math.random().toString(36).substr(2, 9)}`;

  const getIcon = (): React.ReactNode => {
    const iconClasses = 'alert__icon';
    const icons: Record<AlertSeverity, React.ReactNode> = {
      success: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      error: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      ),
      warning: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      info: (
        <svg className={iconClasses} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
    };
    return icons[severity];
  };

  const getAriaAttributes = (): React.AriaAttributes => {
    const attributes: React.AriaAttributes = {};

    if (isLiveRegion || severity === 'error') {
      attributes['role'] = ariaRole || (severity === 'error' ? 'alert' : 'status');
      attributes['aria-live'] = ariaLive;
    } else if (ariaRole) {
      attributes['role'] = ariaRole;
    }

    return attributes;
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (
    <div
      id={alertId}
      className={`alert alert--${severity} ${dismissible ? 'alert--dismissible' : ''} ${className}`}
      style={style}
      data-testid={testId}
      {...getAriaAttributes()}
    >
      <div className="alert__content">
        {getIcon()}
        <div className="alert__body">
          {title && <p className="alert__title">{title}</p>}
          <p className="alert__message">{message}</p>
        </div>
      </div>

      <div className="alert__actions">
        {action && <div className="alert__action">{action}</div>}
        {dismissible && (
          <button
            type="button"
            className="alert__close"
            onClick={handleDismiss}
            aria-label={`Cerrar ${title || 'alerta'}`}
          >
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Alert.displayName = 'Alert';

// === ARCHIVO: src/shared/Alert.scss ===
.alert {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid;
  margin-bottom: 16px;

  &--success {
    background-color: #ecfdf5;
    border-color: #a7f3d0;
    color: #065f46;

    .alert__icon {
      color: #059669;
    }

    .alert__close:hover {
      background-color: #d1fae5;
    }
  }

  &--error {
    background-color: #fef2f2;
    border-color: #fecaca;
    color: #991b1b;

    .alert__icon {
      color: #dc2626;
    }

    .alert__close:hover {
      background-color: #fee2e2;
    }
  }

  &--warning {
    background-color: #fffbeb;
    border-color: #fde68a;
    color: #92400e;

    .alert__icon {
      color: #d97706;
    }

    .alert__close:hover {
      background-color: #fef3c7;
    }
  }

  &--info {
    background-color: #eff6ff;
    border-color: #bfdbfe;
    color: #1e40af;

    .alert__icon {
      color: #2563eb;
    }

    .alert__close:hover {
      background-color: #dbeafe;
    }
  }

  &--dismissible {
    padding-right: 40px;
  }

  &__content {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }

  &__icon {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
  }

  &__body {
    flex: 1;
    min-width: 0;
  }

  &__title {
    font-weight: 600;
    font-size: 0.9375rem;
    margin: 0 0 4px 0;
  }

  &__message {
    font-size: 0.875rem;
    margin: 0;
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  &__action {
    display: flex;
  }

  &__close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    background: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: inherit;
    transition: background-color 0.2s ease;

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}


// === ARCHIVO: src/services/api.ts ===
import type { Account, Transaction, TransferRequest, TransferResponse } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

class ApiService {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP error! status: ${response.status}`,
        response.status,
        errorData
      );
    }
    return response.json();
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(url, config);
      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError('Network request failed', 0, error);
    }
  }

  async getAccounts(): Promise<Account[]> {
    return this.request<Account[]>('/accounts');
  }

  async getAccountById(accountId: string): Promise<Account> {
    return this.request<Account>(`/accounts/${accountId}`);
  }

  async getTransactions(accountId?: string): Promise<Transaction[]> {
    const endpoint = accountId 
      ? `/transactions?accountId=${encodeURIComponent(accountId)}` 
      : '/transactions';
    return this.request<Transaction[]>(endpoint);
  }

  async getTransactionById(transactionId: string): Promise<Transaction> {
    return this.request<Transaction>(`/transactions/${transactionId}`);
  }

  async transfer(transferRequest: TransferRequest): Promise<TransferResponse> {
    return this.request<TransferResponse>('/transfers', {
      method: 'POST',
      body: JSON.stringify(transferRequest),
    });
  }

  async getBalance(accountId: string): Promise<{ balance: number }> {
    return this.request<{ balance: number }>(`/accounts/${accountId}/balance`);
  }

  setAuthToken(token: string): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  clearAuthToken(): void {
    const { 'Content-Type': contentType, ...headers } = this.defaultHeaders;
    this.defaultHeaders = headers;
  }
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const apiService = new ApiService();
export default apiService;

// === ARCHIVO: src/styles/global.scss ===
$primary-color: #2563eb;
$secondary-color: #64748b;
$success-color: #22c55e;
$error-color: #ef4444;
$warning-color: #f59e0b;
$background-light: #f8fafc;
$background-dark: #1e293b;
$text-primary: #1e293b;
$text-secondary: #64748b;
$border-color: #e2e8f0;
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
$font-size-base: 16px;
$border-radius: 8px;
$transition-base: all 0.2s ease-in-out;

:root {
  --color-primary: #{$primary-color};
  --color-secondary: #{$secondary-color};
  --color-success: #{$success-color};
  --color-error: #{$error-color};
  --color-warning: #{$warning-color};
  --background-light: #{$background-light};
  --background-dark: #{$background-dark};
  --text-primary: #{$text-primary};
  --text-secondary: #{$text-secondary};
  --border-color: #{$border-color};
  --font-family-base: #{$font-family-base};
  --font-size-base: #{$font-size-base};
  --border-radius: #{$border-radius};
  --transition-base: #{$transition-base};
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family-base);
  font-size: var(--font-size-base);
  line-height: 1.6;
  color: var(--text-primary);
  background-color: var(--background-light);
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.3;
  color: var(--text-primary);
}

h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1rem; }
h6 { font-size: 0.875rem; }

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: var(--transition-base);
  
  &:hover {
    text-decoration: underline;
  }
  
  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
}

button {
  font-family: inherit;
  cursor: pointer;
  transition: var(--transition-base);
  
  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
}

input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  transition: var(--transition-base);
  
  &:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba($primary-color, 0.15);
  }
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.card {
  background: white;
  border-radius: var(--border-radius);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-4 {
  gap: 1rem;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
  
  .container {
    padding: 0 0.75rem;
  }
}

// === ARCHIVO: src/app/App.test.tsx ===
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

vi.mock('../services/api', () => ({
  apiService: {
    getAccounts: vi.fn().mockResolvedValue([
      { id: 'acc-001', name: 'Cuenta Principal', type: 'checking', balance: 5000 },
      { id: 'acc-002', name: 'Cuenta de Ahorros', type: 'savings', balance: 15000 },
    ]),
    getTransactions: vi.fn().mockResolvedValue([
      {
        id: 'txn-001',
        date: '2024-01-15',
        description: 'Depósito Salary',
        amount: 2500,
        type: 'credit',
        accountId: 'acc-001',
      },
      {
        id: 'txn-002',
        date: '2024-01-14',
        description: 'Transferencia a terceros',
        amount: -500,
        type: 'debit',
        accountId: 'acc-001',
      },
    ]),
    transfer: vi.fn().mockResolvedValue({
      success: true,
      transactionId: 'txn-new-001',
      message: 'Transferencia exitosa',
    }),
  },
}));

describe('App Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the main application with navigation', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
    
    expect(screen.getByRole('tablist')).toBeInTheDocument();
  });

  it('displays three navigation tabs', async () => {
    render(<App />);
    
    await waitFor(() => {
      const tabs = screen.getAllByRole('tab');
      expect(tabs).toHaveLength(3);
    });
  });

  it('has accessible tab labels', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /dashboard/i })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: /transfer/i })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: /history/i })).toBeInTheDocument();
    });
  });

  it('navigates between tabs when clicked', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /dashboard/i })).toBeInTheDocument();
    });
    
    const historyTab = screen.getByRole('tab', { name: /history/i });
    await user.click(historyTab);
    
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: /history/i })).toBeInTheDocument();
    });
  });

  it('shows dashboard tab content by default', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('tabpanel', { name: /dashboard/i })).toBeInTheDocument();
    });
  });

  it('renders bank accounts in dashboard', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('Cuenta Principal')).toBeInTheDocument();
      expect(screen.getByText('Cuenta de Ahorros')).toBeInTheDocument();
    });
  });

  it('displays account balances with proper formatting', async () => {
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('$5,000.00')).toBeInTheDocument();
      expect(screen.getByText('$15,000.00')).toBeInTheDocument();
    });
  });

  it('has form inputs with proper labels in transfer tab', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      expect(screen.getByLabelText(/account from/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/account to/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/amount/i)).toBeInTheDocument();
    });
  });

  it('validates transfer amount input', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      const amountInput = screen.getByLabelText(/amount/i);
      expect(amountInput).toBeInTheDocument();
    });
  });

  it('displays transaction history with proper structure', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const historyTab = screen.getByRole('tab', { name: /history/i });
    await user.click(historyTab);
    
    await waitFor(() => {
      expect(screen.getByText('Depósito Salary')).toBeInTheDocument();
      expect(screen.getByText('Transferencia a terceros')).toBeInTheDocument();
    });
  });

  it('has proper ARIA attributes for tablist', async () => {
    render(<App />);
    
    await waitFor(() => {
      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', expect.any(String));
    });
  });

  it('manages focus correctly when switching tabs', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      const dashboardTab = screen.getByRole('tab', { name: /dashboard/i });
      expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });
    
    const transferTab = screen.getByRole('tab', { name: /transfer/i });
    await user.click(transferTab);
    
    await waitFor(() => {
      expect(transferTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  it('loads and displays transactions from API', async () => {
    render(<App />);
    
    await waitFor(() => {
      const transactions = screen.getAllByRole('row');
      expect(transactions.length).toBeGreaterThan(1);
    });
  });

  it('provides status messages for screen readers', async () => {
    render(<App />);
    
    await waitFor(() => {
      const liveRegion = document.getElementById('live-region');
      expect(liveRegion).toBeInTheDocument();
    });
  });

  it('handles errors gracefully and displays error messages', async () => {
    const { apiService } = await import('../services/api');
    vi.mocked(apiService.getAccounts).mockRejectedValueOnce(
      new Error('Network error')
    );
    
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });
});

```
