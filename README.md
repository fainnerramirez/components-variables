# Componentes variantes en React

## Autor: Fainner Ramirez

Descripción
Este repositorio contiene dos componentes en React: InformationCard y ButtonModal. Estos componentes utilizan Chakra UI para los elementos de la interfaz de usuario, hooks de React para manejar el estado y los efectos, y otras bibliotecas adicionales como canvas-confetti para animaciones y clsx para manejar clases dinámicas.

El proyecto está diseñado para mostrar cómo realizar peticiones de datos de manera dinámica, interactuar a través de botones y modales, y mostrar efectos de animación con confeti. El objetivo principal es proporcionar una experiencia de usuario fluida y visualmente atractiva utilizando React y técnicas modernas de UI.

## Tabla de Contenidos

- Componente InformationCard
- Componente ButtonModal
- Instalación y Configuración
- Estructura del Proyecto

## Componente InformationCard

El componente InformationCard obtiene y muestra datos aleatorios de dos APIs: una para obtener posts (API_POSTS) y otra para obtener imágenes aleatorias de perros (API_DOGS). También incluye colores de fondo, estilos de borde y radios de borde aleatorios para que la tarjeta se vea más atractiva.

Características principales:
Color de fondo dinámico: Se aplica un color de fondo aleatorio cuando se carga el componente.
Bordes aleatorios: Cada tarjeta tiene un estilo de borde y radio de esquina diferente.
Obtención de datos: Usa el hook useEffect para obtener datos de un post aleatorio y una foto de perro aleatoria al montar el componente.
Cargadores de esqueleto: Muestra cargadores de tipo esqueleto mientras se obtienen los datos de las APIs.
Efecto de confeti: Usa canvas-confetti para generar una animación de confeti celebratorio al hacer clic en un botón

## Componente ButtonModal

El componente ButtonModal es un botón que abre un modal mostrando la información de la configuración del botón (como color de fondo, variantes, color de hover, etc.). Este componente utiliza el Modal de Chakra UI y se integra con la librería motion para proporcionar efectos de animación en el botón.

Características principales:
Personalización del botón: El color de fondo, variante, tamaño, color de hover y texto del botón se pasan dinámicamente como props.
Efectos de animación: El botón tiene efectos de animación como escalado en hover y tap, y rotación cuando se arrastra, gracias a la librería motion.
Modal de visualización: Al hacer clic en el botón, se abre un modal que muestra una lista con las características del botón.

## Instalación y Configuración

```bash
git clone https://github.com/fainnerramirez/components-variables
```

### instalar dependencias:

```bash
npm i
```

### Ejecutar el proyecto:

```bash
npm run dev
```

## Estructura del Proyecto

```arduino
/src
  /api
    api.config.ts       // Configuración de las APIs
  /components
    InformationCard.tsx // Componente InformationCard
    ButtonModal.tsx     // Componente ButtonModal
  /style
    global.module.css   // Estilos globales
  /utils
    consts/constants.ts // Constantes de configuración
  App.tsx               // Componente principal
```
