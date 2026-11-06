# Implementación de Estándares ARIA en una Aplicación React

El equipo de desarrollo frontend de una compañía de servicios financieros necesita mejorar la accesibilidad de su aplicación web para cumplir con los estándares ARIA. La aplicación permite a los usuarios gestionar sus cuentas bancarias, realizar transferencias y consultar su historial de transacciones. Los usuarios incluyen clientes con discapacidades visuales que dependen de tecnologías de asistencia para navegar por la aplicación.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Estándares Aria (Accessible Rich Internet Applications) |
| **Nivel** | trainee-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Identificación de Elementos Clave

**Objetivo:** Identificar los elementos de la interfaz de usuario que requieren mejoras en accesibilidad según los estándares ARIA.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Analiza la aplicación existente para identificar los componentes que interactúan con el usuario (botones, formularios, mensajes de error, etc.)
- Determina cuáles de estos componentes carecen de atributos ARIA adecuados para mejorar la accesibilidad.

**Entregable:** Lista de elementos de la interfaz de usuario que requieren mejoras en accesibilidad con los atributos ARIA necesarios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los roles, propiedades y estados ARIA relevantes para cada componente identificado.

</details>

### Fase 2: Implementación de Atributos ARIA

**Objetivo:** Implementar los atributos ARIA identificados en la fase anterior para mejorar la accesibilidad de la aplicación.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- Añade los atributos ARIA necesarios a los elementos identificados en la fase 1.
- Verifica que los cambios implementados mejoren la accesibilidad utilizando herramientas de prueba de accesibilidad.

**Entregable:** Código fuente modificado con los atributos ARIA implementados y prueba de accesibilidad realizada.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza herramientas de prueba de accesibilidad para validar los cambios.
- Considera la retrocompatibilidad y el impacto en los usuarios existentes.

</details>

### Fase 3: Revisión y Documentación

**Objetivo:** Revisar los cambios implementados y documentar el proceso y las decisiones tomadas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Revisa los cambios realizados para asegurarte de que cumplen con los estándares ARIA y mejoran la accesibilidad.
- Documenta el proceso de implementación, incluyendo las decisiones tomadas y las pruebas realizadas.

**Entregable:** Documentación que detalla el proceso de implementación de los atributos ARIA, las decisiones tomadas y los resultados de las pruebas de accesibilidad.

<details>
<summary>Pistas de conocimiento</summary>

- Considera incluir ejemplos de código antes y después de la implementación.
- Documenta cualquier desafío encontrado y cómo lo resolviste.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los estándares ARIA y por qué son importantes para la accesibilidad web?
- **paraQueSirve**: ¿Cómo se aplican los estándares ARIA en una aplicación React para mejorar la accesibilidad?
- **comoSeUsa**: ¿Cuáles son los atributos ARIA más comunes y cómo se implementan en React?
- **erroresComunes**: ¿Qué errores comunes se deben evitar al implementar atributos ARIA?
- **queDecisionesImplica**: ¿Qué decisiones de diseño se deben tomar al implementar atributos ARIA en una aplicación existente?

## Criterios de Evaluacion

- Identificación correcta de elementos de la interfaz que requieren atributos ARIA.
- Implementación adecuada de atributos ARIA en la aplicación React.
- Uso de herramientas de prueba de accesibilidad para validar los cambios.
- Documentación clara y completa del proceso de implementación y decisiones tomadas.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
