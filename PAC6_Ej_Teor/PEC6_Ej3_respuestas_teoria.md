# Ejercicio 3: Respuestas teóricas sobre interceptors

**a) ¿Qué son los interceptors?**

Los interceptors en Angular son clases que implementan la interfaz `HttpInterceptor` y permiten interceptar las solicitudes y respuestas HTTP. Esto es útil para realizar operaciones como:
- Agregar encabezados (headers) personalizados, como tokens de autenticación.
- Registrar el tiempo de las solicitudes.
- Manejar errores globalmente.
- Modificar o cancelar solicitudes antes de enviarlas al servidor.

Se configuran en el `providers` del módulo principal utilizando `HTTP_INTERCEPTORS`.

**Ejemplo de uso común:**
- Autenticación: agregar un token de autorización a todas las solicitudes.
- Registro: registrar el tiempo que tarda cada solicitud en completarse.


 **b) Analizar la cadena de operadores RxJS**


```typescript
this.wines$ = this.searchSubject
  .startWith(this.searchTerm)
  .debounceTime(300)
  .distinctUntilChanged()
  .merge(this.reloadProductsList)
  .switchMap((query) => this.wineService.getWine(this.searchTerm));
```

**Explicación de los operadores:**

1. **`startWith(this.searchTerm)`**
   - Inicializa el flujo con un valor predeterminado (`this.searchTerm`).
   - Es útil para asegurarse de que haya un valor inicial antes de realizar otras operaciones.

2. **`debounceTime(300)`**
   - Espera 300 milisegundos antes de procesar el siguiente valor. 
   - Esto evita que se ejecuten demasiadas solicitudes en poco tiempo, por ejemplo, al escribir en un cuadro de búsqueda.

3. **`distinctUntilChanged()`**
   - Emite solo valores que sean diferentes del último emitido.
   - Evita realizar solicitudes innecesarias si el término de búsqueda no ha cambiado.

4. **`merge(this.reloadProductsList)`**
   - Combina dos flujos: `this.searchSubject` y `this.reloadProductsList`.
   - Permite realizar solicitudes tanto al cambiar el término de búsqueda como al recibir un evento externo (como actualizar la lista de productos).

5. **`switchMap((query) => this.wineService.getWine(this.searchTerm))`**
   - Realiza una solicitud HTTP a través del servicio `wineService`.
   - Si se emite un nuevo valor mientras la solicitud anterior está en curso, cancela la solicitud anterior y procesa solo la nueva.

---

**¿Cuándo usarías este código?**
Este código es ideal en un caso de búsqueda dinámica, como un cuadro de búsqueda que actualiza automáticamente los resultados mientras el usuario escribe. También es útil en aplicaciones donde se necesita recargar datos desde el servidor cuando ocurren eventos externos, como actualizar una lista de productos.
```
