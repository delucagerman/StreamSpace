# StreamSpace

## Descripción

StreamSpace es una aplicación de streaming desarrollada con React y TypeScript, diseñada para ofrecer una experiencia fluida y responsiva en la navegación y visualización de contenidos. La interfaz está construida utilizando Tailwind CSS para un diseño moderno y adaptable, y se integra con sistemas de navegación espacial para facilitar la interacción en dispositivos con control remoto.

## Características

- **Navegación Intuitiva:** Implementación de navegación espacial utilizando [`@noriginmedia/norigin-spatial-navigation`](https://github.com/noriginmedia/norigin-spatial-navigation) para una experiencia de usuario optimizada en dispositivos con control remoto.
- **Componentes Reutilizables:** Componentes como ContentCarousel, ContentGrid y ContentDetail
  están diseñados para ser reutilizables y fáciles de mantener.

- **Rutas Definidas:** Manejo de rutas con react-router-dom para una navegación eficiente entre páginas como Home, Movies, Series, Featured y Settings.

- **Estilizado Moderno:** Uso de Tailwind CSS para un diseño consistente y adaptable, configurado en tailwind.config.js

- **Gestión de Estado:** Utilización de hooks de React para la gestión del estado y la interactividad de la aplicación.

## Implementación y Decisiones

- **Tecnologías Seleccionadas:** Se eligió React con TypeScript por su robustez y escalabilidad en el desarrollo de interfaces de usuario complejas. Vite se utiliza como herramienta de construcción por su rapidez y eficiencia en el desarrollo.
- **Navegación Espacial:** La integración de [`@noriginmedia/norigin-spatial-navigation`](https://github.com/noriginmedia/norigin-spatial-navigation) permite una navegación fluida usando controles remotos, lo cual es ideal para aplicaciones en televisores inteligentes y dispositivos similares.
- **Diseño Responsivo:** Tailwind CSS fue seleccionado para acelerar el proceso de estilizado mediante clases utilitarias, asegurando un diseño responsive y personalizado sin escribir CSS desde cero.
- **Arquitectura de Componentes:** Se adoptó una arquitectura de componentes divididos en components y pages para separar la lógica de presentación y la lógica de negocio, facilitando la mantenibilidad y escalabilidad del código.

- **Gestión de Rutas:** react-router-dom se implementa para manejar la navegación entre diferentes vistas de la aplicación, proporcionando una estructura clara y fácil de manejar para futuras expansiones.

- **Optimización y Rendimiento:** Se configuraron los `tsconfig` y las reglas de ESLint para asegurar un código limpio y libre de errores, además de optimizar el rendimiento mediante la configuración adecuada de módulos y opciones de compilación en vite.config.ts

## Instalación

```sh
yarn
```

## Uso

```sh
yarn dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación en funcionamiento.
