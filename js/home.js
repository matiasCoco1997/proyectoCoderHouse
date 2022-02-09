let productosAgregadosAlCarritoAnteriormente = [];

function renderPage() {

  $('header').css("border-bottom","none")

    $("main").append(
        `
            <div class="container-page" id="container-page">

              <div class="container-general" >

                <ul class="container-general" id="container-general">

                </ul>

              </div>

            </div>
        `
    );
    

  $.getJSON( URL_PRODUCTOS_JSON, (response, status ) => {
  
      if(status !== 'success'){
      
        throw Error('Error');
      
      }
      
      for(const producto of response){
      
        tiendaDeRemeras.listaDeProductos.push(producto);
        
        $("#container-general").append(` 

          <li class="item-box" >

            <img src="${producto.imgDir}" class="card-img-top" alt="${producto.altImg}">

            <div class="card">

              <h3 class="titulo">${producto.nombre}</h3>

              <p class="card-text">Precio: ${producto.precio}$</p>

              <button class ="buttonBuy" id ="'${producto.id}'" onclick="agregarProductoAlCarrito('${producto.id}')"> Agregar al carrito </button>
                                                    
            </div>

          </li> 

        `);

      }
      
  })


  $("header").append(`
  
  <nav id="nav-botonera">
    
    <a href="#/home"> Home </a>

    <a href="#/ubicacion"> Ubicación del local </a>

    <a href="#/nosotros"> Nosotros </a>
  
  </nav>

  `);


  $("#container-page").append(
      
    `
    <div class="container-botones" id="containter-botones">

        <h3 class="titulo-container-botones" >Menu</h3>

        <div class="container-carrito">

            <button id="button-mostrar-carrito">Ver carrito</button>  

            <div class="carrito" id="carrito">

                <h3>Carrito de compras:</h3>

                <p>Una vez realizada la seleccion de los productos seleccione el metodo de pago debajo para realizar la compra:</p>
                    
                <ul id='compras-realizadas'>

                </ul>

                <p>Precio total: </p> 
                    
                <p id="precio-total">0$</p>

                <button id="button-eliminar-productos" onclick="cancelarCompra()">Cancelar compra</button>

            </div>

        </div>


        <div class="container-metodos-de-pago">

            <button id="button-metodos-de-pago">Ver métodos de pago</button>  

            <aside id="metodos-de-pago">

                <h3>Seleccione el método de pago</h3>

                <div>

                    <p>Efectivo</p>

                    <button id="efectivo" onclick="seleccionarMetodoDePago(this.id)">
                        <img src="images/efectivo.png" alt="PAGAR EN EFECTIVO">
                    </button>

                </div>
                

                <div>

                    <p>Débito</p>

                    <button id="tarjeta-de-debito" onclick="seleccionarMetodoDePago(this.id)">
                        <img src="images/debito.png" alt="PAGAR CON TARJETA DE DEBITO">
                    </button>

                </div>
                


                <div>

                    <p>3 cuotas s/interés</p>

                    <button id="tarjeta-de-credito-tres-cuotas" onclick="seleccionarMetodoDePago(this.id)">
                        <img src="images/tarjeta-de-credito.png" alt="PAGAR CON TARJETA DE CREDITO EN 3 CUOTAS">
                    </button>

                </div>
                


                <div>

                    <p>6 cuotas c/interés</p>

                    <button id="tarjeta-de-credito-seis-cuotas" onclick="seleccionarMetodoDePago(this.id)">
                        <img src="images/tarjeta-de-credito.png" alt="PAGAR CON TARJETA DE CREDITO EN 6 CUOTAS">
                    </button>

                </div>
                
            </aside>

        </div>

        <div class="container-datos-de-la-cuenta">

            <button id="button-mostrar-datos">Datos de usuario</button>  

            <div class="datosPersonales" id="datos-personales">

              <h3>Datos Personales</h3>

              <p>Usuario: ${obtenerUsuarioIngresado()} </p>

              <p>Mail: ${mailDeUsuarioIngresado(obtenerUsuarioIngresado())} </p>

              <a id="desloguear-la-cuenta" href="#/">Cerrar sesión</a>

            </div>

        </div>

    </div>
    `
  );
}

function mailDeUsuarioIngresado(usuarioIngresado){

  let usuarioObtenido = tiendaDeRemeras.listaDeUsuarios.find((item) => item.usuario === usuarioIngresado);
  
  return usuarioObtenido.mail;
    
}

function cargarValidacionDeCredenciales(){

  if (tiendaDeRemeras.validarUsuario(usuarioIngresado) === true && tiendaDeRemeras.validarContrasenia(contraseniaIngresada) === true) {

    $('#container-page').remove();
  
    renderPage();
  
    alert("Bienvenido " + usuarioIngresado + ", usuario logueado correctamente.");

    indexUser = tiendaDeRemeras.findIndexUser(usuarioIngresado);
  
    tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar = JSON.parse(localStorage.getItem('carrito')) || [];
  
    if (tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar.length !== 0) {
  
      productosAgregadosAlCarritoAnteriormente = tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar;
        
      cargarProductosSeleccionadosAnteriormenteAlCarrito(productosAgregadosAlCarritoAnteriormente);
  
    }
  
  
    $("#button-mostrar-carrito").click(() => {
       
      $("#carrito").slideToggle(1000);
  
    });
  
    $("#button-metodos-de-pago").click(() => {
        
      $("#metodos-de-pago").slideToggle(1000);
  
    });
  
    $("#button-mostrar-datos").click(() => {
       
      $("#datos-personales").slideToggle(1000);
  
    });
  
    cerrarSesion();
    
  }
  
  else{
  
    alert( "El usuario o contraseña ingresada es incorrecta, ingrese nuevamente sus credenciales.");
  
  }
}

 function renderHome(){


  $("#input-user").keyup(function (event) {

    usuarioIngresado = event.target.value;
        
  }); 
        
  $("#input-password").keyup(function (event) {
        
    contraseniaIngresada = event.target.value;
        
  });

  $.getJSON( URL_USUARIOS_JSON, (response, status ) => {

    if(status !== 'success'){
        
      throw Error('Error');
        
    }
        
    for(const user of response){
        
      tiendaDeRemeras.listaDeUsuarios.push(user);
        
    }
        
  })
        
  $("#btn-send").click((event) => {
        
    event.preventDefault();

    cargarValidacionDeCredenciales();
    
  }); 
} 


 
  











