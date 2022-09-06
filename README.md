# Empezando con Create React App

Este proyecto fue iniciado con [Create React App](https://github.com/facebook/create-react-app).

## Scripts disponibles

En el directorio del proyecto, ejecutar:

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abra [http://localhost:3000](http://localhost:3000) para verlo en su navegador.
La página se volverá a cargar cuando realice cambios.\
También se puede ver si hay errores en la consola.

***

 ### Challenge

Este es un proyecto creado integramente con React.js.Es totalmente resposive y simula ser una pasarla de pagos que toma datos de la API 'blockchain' para calcular el precio del producto (que es originalmente en dolares), en btc. Tambien cuenta con un formulario de pago que requiere el numero de tarjeta de credito, la fecha de vencimiento y el codigo de seguridad y todos deben ser a su vez validos para poder ser aceptado el pago.

***

### Dependencias

Para realizar el proyecto se utilizaron las siguientes dependencias:
* **\_creditcard.js\_:** Posee funciones que validan la tarjeta de credito, validan el codigo se seguridad y la fecha de vencimiento y obtienen la compañia segun el numero de la tarjeta.
* **\_reactstrap\_:**Basada en boostrap,para poder usar algunos de sus componentes.
* **\_sweetalert2\_:**Utilizado para incluir alertas en la aplicion (alternativas a los alerts de javascript)
* **\_react-input-mask\_:**Input masking component for React. Made with attention to UX.
* **\_react-router-dom\_:**Utilizado para implementar rutas dinamicas en la aplicacion web.
* **\_react-icons\_:**Utilizado para incluir iconos.
* **\_reduxjs/toolkit\_:**Utilizado como una herramienta para escribir de manera estandar la logica de redux.
* **\_react-redux\_:**Le permite a los componentes de react leer data del store de redux y depachar acciones al store para actualizar esa data.

***

### Componentes

* **Background:**
  * **Div:** Componente utilizado para el estilo del fondo de la aplicacion (franja amarilla del fondo del div).
* **Buttons:**
  * **Button:** Componente creado para poder proceder a la compra. El mismo recibe un id. Al hacer click en el nos lleva a la pagina de checkput y despacha en la accion el id.
  * **ButonClose:**Componente creado para poder salir de la pagina de checkout y dirigirnos a la pagina anterior donde se encuentra el boton de compra.
* **Carousel:**Este componente es solo un div que recibe las propiedades imagenes y nombre del producto. Muestra las tres imagenes en un carousel y el nombre es utilizada como el 'alt' de esas imagenes.
* **Payform:** Se compone de un formulario con tres campos: numero de la tarjeta, fecha de vencimiento, y codigo de seguridad y un boton para confirmar la compra.Se utilizo la libreria creditcard.js para poder validar que los tres campos sean correctos(correspondan a una tarjeta de credito valida) y que solo sean tarjetas 'Visa','Mastercard','Diners' o 'American Express'.Al mismo tiempo, una vez ingresado el numero de la tarjeta, cambia el logo universal que es encuentra en el input y cambia segun la compañia de la tareta.Tambien se utilizo la libreria 'react-input-mask' para poder aplicarle marcaras a los inputs. Al ser la compra validada, se crea una 'orden', en la que se guardan la fecha actual,el nombre, id  y precio del producto (en dolares y en btc)????, el numero de la tarjeta y la compañia.Esta orden se guarda en el localStorage.Al mismo tiempo, al ser validada la compra se dispara un sweet alert y a los cinco segundos nos redirige a la pagina de compras. 
* **Price:**Componente que muestra el nombre del producto, la descripcion y el precio en dolares y en btc. Se realiza un llamado a la api de blockchain inicial y luego cada cinco segundos para que se actualice el precio en btc. 
* **Screens:**
  * **Checkout:**Componente que se encuentra en la ruta '/checkout'. El mismo renderiza los componentes 'div','closeButton','Payform' y 'Price' y les provee las props de los productos buscando el estado del producto seleccionado. Si no hay ningun producto seleccionado, y queremos entrar a la ruta de '/checkout' el componente renderiza los componentes 'div', 'closeButton' y un div avisando que no hay ningun producto agregado. 
  * **Purchase:**Componente que se encuentra en la ruta '/'. El mismo renderiza los componentes 'div' y 'button'. Le provee el id requerido por price de manera harcodeada (en este caso, 1)

***

### Funciones del productsReducer:

El ***productsReeducer**** posee un estado cuyo valor inicial de productos son los productos (provenientes de el archivo que se encuentra en 'Data/Products.js' el cual contiene un arreglo de objetos con las propiedades 'id', 'name', 'description','price' e 'img') y un valor inicial par el producto seleccionado que es un objeto vacio.
En sus reducers tenemos la funcion 'setProductSelected' el cual toma el valor inicial de los productos y recibe por payload un id y filtra entre los productos aquel producto que coincida con el id recibido. Una vez hecho esto, el estado del producto seleccionado cambia y pasa a ser ese producto filtrado.
Esta funcion la usamos en el boton, en el cual despachamos el id del producto, y nos redirige a checkout en donde el componente busca el estado del producto seleccionado y puede setear las props en los demas componentes. 