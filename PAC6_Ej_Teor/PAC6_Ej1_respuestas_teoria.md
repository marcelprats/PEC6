# Ejercicio 1: Respuestas Teóricas sobre Servicios Angular

**a) ¿Cuál es la función de los componentes y servicios?**
Los componentes gestionan la interfaz de usuario (HTML y CSS) y la lógica asociada a la vista. Los servicios, por otro lado, encapsulan la lógica de negocio y permiten compartir datos y funcionalidades entre diferentes componentes.

**b) ¿Qué es la inyección de dependencias? ¿Para qué sirve el decorador `@Injectable`?**
La inyección de dependencias es un patrón que permite que Angular cree y gestione instancias de clases que otros componentes o servicios necesitan. El decorador `@Injectable` marca una clase como un servicio que puede ser inyectado en otras partes de la aplicación.

**c) Explica los conceptos de RxJS:**
- **Observable:** Representa un flujo de datos que puede emitir múltiples valores a lo largo del tiempo.
- **Subscription:** Es la relación entre un observable y el código que reacciona a los valores emitidos. Las suscripciones permiten empezar y detener la recepción de datos.
- **Operators:** Son funciones que transforman, filtran o combinan observables.
- **Subject:** Es un tipo especial de observable que también actúa como un observador, permitiendo emitir datos a múltiples suscriptores.
- **Schedulers:** Controlan cómo se ejecutan las operaciones de los observables, gestionando los hilos o colas de ejecución.

**d) ¿Cuál es la diferencia entre promesas y observables?**
Las promesas manejan un único valor que se resuelve o rechaza en el futuro. Los observables, en cambio, son flujos de datos que pueden emitir múltiples valores en diferentes momentos.

**e) ¿Cuál es la función del pipe `async`?**
El pipe `async` se usa en plantillas Angular para suscribirse automáticamente a observables o promesas. Muestra el último valor emitido y gestiona automáticamente la suscripción y desuscripción.

