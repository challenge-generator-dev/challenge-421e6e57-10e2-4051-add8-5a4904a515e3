# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Implementación de Estándares ARIA en una Aplicación React**.

| | |
|---|---|
| Tema | Estándares Aria (Accessible Rich Internet Applications) |
| Nivel | trainee-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón contenedor/presentacional con componentes reutilizables |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- react 19.0.0-rc.0
- react-dom 19.0.0-rc.0
- @types/react 18.2.45
- @types/react-dom 18.2.18
- typescript 5.7.0-dev.20240607
- vite 5.0.10
- @vitejs/plugin-react 4.2.1
- sass 1.69.5
- @testing-library/react 14.1.2
- @testing-library/jest-dom 6.1.5

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Identificación de Elementos Clave**: Lista de elementos de la interfaz de usuario que requieren mejoras en accesibilidad con los atributos ARIA necesarios.
- **Fase 2 — Implementación de Atributos ARIA**: Código fuente modificado con los atributos ARIA implementados y prueba de accesibilidad realizada.
- **Fase 3 — Revisión y Documentación**: Documentación que detalla el proceso de implementación de los atributos ARIA, las decisiones tomadas y los resultados de las pruebas de accesibilidad.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Archivos que la arquitectura declara (3 de 17)

La propuesta arquitectonica del reto los lista y no llegaron al repo. Crealos con implementacion real, respetando la capa en la que viven:

- [ ] `src/features/AccountDashboard.tsx`
- [ ] `src/features/TransferForm.tsx`
- [ ] `src/features/TransactionHistory.tsx`

### 2. Referencias colgando (1)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `package.json` — `typescript@5.7.0-dev.20240607`
      typescript declara la version 5.7.0-dev.20240607, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (17)

- `package.json`
- `vite.config.ts`
- `tsconfig.json`
- `src/main.tsx`
- `src/app/App.tsx`
- `index.html`
- `README.md`
- `src/features/TransferForm.test.tsx`
- `src/shared/Button.tsx`
- `src/shared/Button.scss`
- `src/shared/Input.tsx`
- `src/shared/Input.scss`
- `src/shared/Alert.tsx`
- `src/shared/Alert.scss`
- `src/services/api.ts`
- `src/styles/global.scss`
- `src/app/App.test.tsx`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src`
- `src/app`
- `src/features`
- `src/shared`
- `src/services`
- `src/styles`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con componentes reutilizables**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Trainee L2
- Brecha que el reto ataca: Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web, Aplica conscientemente conceptos de estándares ARIA para mejorar accesibilidad web

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
