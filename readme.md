# Tenpo Challenge: Tenpo-Eats app

## Descripción

- Al inicio de la app se muestra un splash coorporativo
- En esta primera entrega se desarrollaron las vistas "Inicio", "Dirección de entrega" y "Mi cuenta"
- En la vista de "Inicio": los restaurantes y categorías tienen la lógica de negocio de mostrarse en orden según el rating y el nombre respectivamente
- El side-routing es mostrado cuando se arrastra hacia el lado derecho de la pantalla, para esta entrega solo se liberaron los items de: "inicio" y "mi cuenta", los demás items estan bloqueados hasta próximas entregas
- El side-routing tambien es mostrado cuando se hace touch en el avatar del usuario mostrado en la vista "inicio" ubicado en la parte superior izquierda, dicho avatar tiene la lógica de mostrar las iniciales del nombre y apellido del usuario conectado
- En la vista "Inicio" , al hacer touch en "Agregar direccion de entrega" se navega hacia una vista que muestra la posición actual del usuario usando la api de google-maps
- El autor se tomó el atrevimiento de generar una nueva vista "Mi cuenta", en la cual se detallan datos del usuario

## Solución Técnica

- Las principales ramas utilizados son: master y develop
- Se emplea la metodología [Atomic Design](https://www.uifrommars.com/atomic-design-ventajas/) para el desarrollo de los principales insumos de la app
- El código esta estilizado según las recomendaciones del [Clean Code](https://www.amazon.com/-/es/Robert-C-Martin/dp/0132350882), el cual permite una mejor lectura y mantenimiento del mismo
- La app consume los servicios creados firestore ya que facilitan el desarrollo de apis
- La app esta basada en una arquitectura modular, manteniendo el mínimo de anidamiento para una fácil ubicación de recursos y creando las principales carpetas para un mejor desarrollo

## Stack

- [Expo](https://docs.expo.io/)
- [React Native](https://reactnative.dev/)
- [Firebase](https://firebase.google.com/?hl=es)

## Autor

- Cristian Nery Lozada (FrontEnd developer Angular - ReactJs)
- Contacto: [Linkedin](https://www.linkedin.com/in/cristian-nery-027b70180/) cnerylozada@gmail.com

## Prerequisitos

```bash
npm install npm -g
npm install --global expo-cli
```

## Instalación

```bash
git clone https://github.com/cnerylozada/tenpo.front.mobile.jsx.challenge
npm install
expo start
```

## Consideraciones

Los servicios de firestore pueden ocasionar ciertos issues, por lo que se recomienda configurar de la siguiente manera:

- En la ruta : node_modules/react-native/Libraries/Core/Timers/JSTimers.js
- Realizar el siguiente cambio: MAX_TIMER_DURATION_MS = 10000 \* 1000

## Uso

- Es necesario tener instalado en el celular la app: [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es_419&gl=US)
- Dentro de la aplicación expo, escanear con la cámara el código generado en el siguiente [link](https://expo.io/@cnerylozada/tenpo-front-mobile-jsx-challenge)

## Testing

- Ejecutar todos los tests

```bash
npm run test
```

- Ejecutar un test un particular

```bash
npm run test -- ./tests/mi-test-a-ejecutar.spec.js
```

## ScreenShots

![side-routing](https://firebasestorage.googleapis.com/v0/b/react-fire-c6c33.appspot.com/o/tenpo-eats%2Fside-routing.jpeg?alt=media&token=a81e21f7-5997-40c9-9576-4c6a271121d0)
![home-view](https://firebasestorage.googleapis.com/v0/b/react-fire-c6c33.appspot.com/o/tenpo-eats%2Fhome.jpeg?alt=media&token=61a00e49-0920-4b9d-8e51-8c08b471f669)
![delivery-address-view](https://firebasestorage.googleapis.com/v0/b/react-fire-c6c33.appspot.com/o/tenpo-eats%2Fdeliver-address.jpeg?alt=media&token=55af109a-1bc0-4f46-aa1f-23a7e9b9cdc2)
