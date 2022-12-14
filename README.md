# Rick and Morty Characters Info

![Rick-Morty-Sexta-Temporada](https://user-images.githubusercontent.com/112553001/207452667-e69eeb74-3d1c-475e-b676-9bf14387baf4.jpg)

Este es un proyecto realizado para una evaluación en el módulo 3. React dentro del Bootcamp de Programación Web de Adalab.

Está dentro de una estructura de carpetas preparada para poder funcionar, los archivos editables se encuentran dentro de la carpeta `src/`: son los ficheros de nuestra página web, como HTML, SCSS, JS...

> **NOTA:** Necesitas tener instalado [Node JS](https://nodejs.org/)

### Pasos para arrancar el proyecto:

Si el proyecto no tiene la carpeta node_modules, deberñas ejecutar el siguiente comando:

npm install

Una vez hemos instalado las dependencias, vamos a arrancar el proyecto. **El proyecto hay que arrancarlo cada vez que te pongas a programar.** Para ello ejecuta el comando:

npm start

Con este comando se podrá abrir la web del mismo modo que lo haría el Live Server (Go live) de VSCode.

## Finalidad del proyecto

El proyecto es un buscador de personajes de la serie Rick y Morty, está preparado para buscar mediante la barra de búsqueda, para de ese modo filtrar, después de haber filtrado (o antes si lo que quieres es tirar de scroll) el personaje que buscas puedes hacer click sobre él aparecerá enrutada una tarjeta de detalle del personaje en concreto, donde se incluirán mas detalles que los que aparecían en la tarjeta de presentación en conjunto de la primera página. La página detalle tiene un enrutado en el que podemos volver a la página de inicio.

Las búsquedas que puedes realizar pueden ser por nombre, buscando, por ejemplo todos los Rick, rick o RICK que quieras (ooooooooh si, este filtro está a prueba de bombas, para que escribas cómo lo escribas, si el nombre está escrito correctamente, te lo localizamos) de ese modo te localiza todos los Ricks que haya en la serie, en este caso, los humanos y los aliens, pero si deseas afinar más tu búsqueda en el select siguiente puedes elegir la especie a la que pertenecen, si son humanos o bien aliens para que puedas comprobar de un vistazo, qué en es quién en el universo de Rick y Morty.

Si por lo que sea no te acuerdas como se llama el personaje o bien decides inventartelo y no lo encuentra en este listado, te va a saltar un mensajito.

## ¿Cúal ha sido el enfoque?

El proyecto es una web donde mediante una peticion a un servidor obtenemos la informacion de los personajes de la serie Rick y Morty, el servidor nos ofrece multiples datos mediante un objeto con dos propiedades, la que nos interesa que es results, un arrays de objetos, con un personaje por objeto, de ahí tomamos los datos que nos interesan, haciendo una limpieza en el momento de traernos los datos de la api.

Cada uno de los componentes tiene importada su propia hoja de estilos propia de Scss, ya que así es como mejor trabaja React. La nomenclatura de los archivos es equivalente para cada componente de Javascript junto con su archivo de Scss.

El proyecto está preparado para ser eficiente con las interacciones de JS mediante React y con un mínimo de SCSS, ya que en este caso no es lo importante para demostrar los conocimientos.

Tenemos el buscador que localiza los personajes por nombre, bien se escriba en mayúsculas o bien en minúsculas, si el nombre está escrito de manera correcta, lo localiza, incluso una parte de él, no es necesario escribirlo entero.

Otro método alternativo de búsqueda es el select, donde se filtra la especie con las opciones posibles del personaje. Este método alternativo de búsqueda es combinable con el método de input, de búsqueda por nombre.

El proyecto tiene una estructura de componentes mediante React, este es el listado de los componentes:

- :diamonds: **App.js**
  Este es el componente que maneja toda la aplicación. Aquí se crea la estructura de html que recibe en el body. Aquí encontramos las variables de estado relacionadas con los datos que necesita la página para funcionar: la variable donde se guardan los datos para pintar todas las tatjetas de los personajes así como las variables que guardan los filtros de búsqueda.

  Encontramos tambien el hook useEffect que es lo que necesitamos para que carguen los datos de la api cuando carga la página.
  Tambíen están las funciones que recojen los datos y los envian a la función que ejecuta finalmente los eventos en los componentes hijas.

  Estas son las funciones manejadoras que se declaran aquí y será en el en el componente hija donde se ejecuten las funciones:

  - <strong>handleFilterName </strong> filtra por el nombre y se actualiza la variable de estado <strong>setFilterByName</strong>

  - <strong>handleFilterBySpecie</strong> filtra por la especie y se actualiza la variable de estado <strong>handleFilterBySpecie</strong>

  - <strong>handleFilterByStatus </strong> filtra por el estatus y se actualiza la variable de estado <strong>characterData</strong>

  - <strong>filterCharacters</strong> esta variable contiene nuestro encadenado de filtrados y sus condiciones, para que se cumplan lo que necesitamos encontrar

  - <strong>findCharacter</strong> esta funcion nos localiza el id del personaje

  - <strong>handleReset</strong> se actualiza la variable de estado <strong>characterData</strong> se vacía las variables de estado de los filtros también se hace un reseteo del <strong>localStorage</strong> y del value de nuestro input de búsqueda.

  - <strong>return</strong> donde tenemos todo lo que devuelve este componente principal y aparece en el DOM. aquí mostrará siempre el contenido de la etiqueta header y según el camino que tome la ruta, estaremos en la Home, o bien en las páginas detalle de los personajes o bien si no encuentra una url válida, mostrará una página de error

- :diamonds: **CharacterCardFromList.js**

  - <strong>checkSpecies</strong> una funcion que trabaja un condicional, dependiendo de la especie a la que pertenezca el personaje pintará un icono u otro

  - <strong>checkStatus</strong> una funcion que trabaja un condicional, dependiendo del estado a la que pertenezca el personaje pintará un icono u otro

  - <strong>return</strong> pinta todo el html de de la tarjeta de cada personaje, tiene un link a modo de enlace para ir a la página de detalle del personaje, el componente <strong>CharacterDetail</strong> .

- :diamonds: **CharacterDetail.js**

  - <strong>checkSpecies</strong> una funcion que trabaja un condicional, dependiendo de la especie a la que pertenezca el personaje pintará un icono u otro

  - <strong>checkStatus</strong> una funcion que trabaja un condicional, dependiendo del estado a la que pertenezca el personaje pintará un icono u otro

  - <strong>return</strong> pinta todo el html de detalle de la tarjeta de cada personaje, tiene un link a modo de enlace para volver a la página anterior, la página de inicio.

- :diamonds: **CharacterList.js**
  si nuestro array donde tenemos los personajes no está vacío, es decir que tiene al menos un elemento ( dependerá de lo que busquemos en nuestro formulario al filtrar, porque es el dato que traemos del componente madre) pintará mediante un map el compomnente <strong>CharacterCardFromList</strong> o los componentes que sean resultado de la búsqueda, si no encuentra ningún elemento en el array, es decir que está vacío pintará el componente <strong>NotFoundPage</strong> con un mensaje de error.

- :diamonds: **Filters.js**
  en este componente tenemos todas las funciones de eventos para ejecutarse
  - <strong>handleInput</strong> para ejecutar el evento onInput del buscador por nombre
  - <strong>handleOnChange</strong> para ejecutar el evento onChange del select
  - <strong>handleOnClick</strong> para ejecutar el evento onClick del botón reset
  - <strong>handleSubmit</strong> para evitar que el formulario se dispare y navegue sin querer, si por error pulsamos intro
  - <strong>handleOnChangeChecked</strong> para ejecutar el evento onChange del checkbox
  - <strong>renderStatus</strong> para evitar tener que poner a mano el array de opciones del select, aquí tenemos un map que pinta por cada estatus de personaje un input de tipo checkbox
  - <strong>return</strong> pinta el formulario con los tres tipos de filtro y el botón reset
- :diamonds: **NotFoundPage.js**
  componente que nos da un mensaje cuando no encuentra la url que estamos buscando, lo encontramos tanto en el caso de no encontrar la ruta desde app como desde el listado de las tar

Los archivos de servicios:

- :gem: **services/api.js**
  En este archivo encontramos la petición al servidor, donde traemos los datos que necesitamos desde la API, los ordenamos alfabéticamente según el nombre de dada personaje y lo llevamos hasta nuestra variable de estado, y lo guardamos en el localstorage. https://rickandmortyapi.com

- :gem: **services/localStorage.js**
  Es una plantilla super válida y valiosa para la gestión de local storage, tieniendo incluidas las funciones set, get, clean y remove, que crean dan, limpian y borran lo guardado en el local storage dependiendo de qué necesitemos en cada momento.

Esto es todo, espero que disfutes del proyecto y si tienes cualquier sugerencia no dudes en comentarmela :smile:

![rick-morty-1941429](https://user-images.githubusercontent.com/112553001/207454118-bd42eec2-3104-4b51-a935-533861173d2c.jpg)

## Uncertainty is inherently unsustainable. Eventually, everything either is or isn’t.
