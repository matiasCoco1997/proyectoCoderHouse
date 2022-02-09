let carrito = [];
let contadorDeRemeras = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let usuarioIngresado;
let contraseniaIngresada;


function cerrarSesion(){

  $('#desloguear-la-cuenta').click((event)=> {

    event.preventDefault();

    $('#container-page').remove();

    $('#title').replaceWith(`<title id="title">El Hincha - Login</title>`);

    renderLogIn();

    renderHome();

    tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras=0;
    
    resetearContadoresDeRemeras();

  });

}

function agregarProductoAlCarrito(productoId) {

  let productoObtenido = tiendaDeRemeras.listaDeProductos.find((item) => item.id === productoId);

  let cantidad = sumarAlContador(productoObtenido);

  $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

  tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar.push(productoObtenido);

  carrito = tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar;

  localStorage.removeItem('carrito');

  localStorage.setItem("carrito", JSON.stringify(carrito));

    $("#compras-realizadas").append(
    
        `

            <li id="${productoObtenido.id}" class="producto-agregado-a-carrito">

                <h4>Camiseta de ${productoObtenido.nombre} - ${productoObtenido.precio}$ x${cantidad}</h4>
                    
                <button class ="btnEliminar" id ="'${productoObtenido.id}'" onclick="borrarUnProductoDelCarrito('${productoObtenido.id}')"> X </button>
            

            </li>

        `
    );

  alert("El producto seleccionado fue agregado al carrito.");

}

function sumarAlContador(producto) {

  switch (producto.id) {

    case "1":

      contadorDeRemeras[0]++;

      $("#1").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[0];

    case "2":

      contadorDeRemeras[1]++;

      $("#2").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[1];

    case "3":

      contadorDeRemeras[2]++;

      $("#3").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[2];

    case "4":

      contadorDeRemeras[3]++;

      $("#4").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[3];

    case "5":

      contadorDeRemeras[4]++;

      $("#5").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[4];

    case "6":

      contadorDeRemeras[5]++;

      $("#6").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[5];

    case "7":

      contadorDeRemeras[6]++;

      $("#7").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[6];

    case "8":

      contadorDeRemeras[7]++;

      $("#8").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[7];

    case "9":

      contadorDeRemeras[8]++;

      $("#9").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      return contadorDeRemeras[8];
  }
}

function cargarCarritoNuevo(producto) {

  switch (producto.id) {

    case "1":

      contadorDeRemeras[0]++;

      $("#1").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[0]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "2":

      contadorDeRemeras[1]++;

      $("#2").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[1]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "3":

      contadorDeRemeras[2]++;

      $("#3").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[2]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);

      break;

    case "4":

      contadorDeRemeras[3]++;

      $("#4").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[3]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "5":

      contadorDeRemeras[4]++;

      $("#5").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[4]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "6":

      contadorDeRemeras[5]++;

      $("#6").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[5]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "7":

      contadorDeRemeras[6]++;

      $("#7").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[6]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "8":

      contadorDeRemeras[7]++;

      $("#8").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[7]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;

    case "9":

      contadorDeRemeras[8]++;

      $("#9").remove();

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras +=producto.precio;

      $("#compras-realizadas").append(`

                    <li id="${producto.id}" class="producto-agregado-a-carrito">

                        <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[8]}</h4>
                
                        <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                    </li>`);
      break;
  }
}

function cargarProductosSeleccionadosAnteriormenteAlCarrito(productosAgregadosAlCarritoAnteriormente) {
  
    for (let i = 0; i < productosAgregadosAlCarritoAnteriormente.length; i++) {

        cargarCarritoNuevo(productosAgregadosAlCarritoAnteriormente[i]);

    }

    $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

}

function cancelarCompra() {
  
  alert('La compra ha sido cancelada.');  

  tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar = [];

  tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras = 0;

  // localStorage.clear();
  localStorage.removeItem('carrito');

  eliminarTodosLosProductos();

  resetearContadoresDeRemeras();

  $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");
}

function eliminarTodosLosProductos() {

  $("#1").remove();

  $("#2").remove();

  $("#3").remove();

  $("#4").remove();

  $("#5").remove();

  $("#6").remove();

  $("#7").remove();

  $("#8").remove();

  $("#9").remove();

}

function resetearContadoresDeRemeras() {

  for (let i = 0; i < contadorDeRemeras.length; i++) {

    contadorDeRemeras[i] = 0;
  }

}

function borrarUnProductoDelCarrito(productoId) {

  let producto = tiendaDeRemeras.listaDeProductos.find((item) => item.id === productoId);

  switch (productoId) {

    case "1":

      contadorDeRemeras[0]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#1").remove();

      if (contadorDeRemeras[0] !== 0) {

        $("#compras-realizadas").append(`

                <li id="${producto.id}" class="producto-agregado-a-carrito">

                    <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[0]}</h4>
                
                    <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
        
                </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "2":

      contadorDeRemeras[1]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#2").remove();

      if (contadorDeRemeras[1] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[1]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "3":

      contadorDeRemeras[2]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#3").remove();

      if (contadorDeRemeras[2] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[2]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "4":

      contadorDeRemeras[3]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#4").remove();

      if (contadorDeRemeras[3] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[3]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "5":

      contadorDeRemeras[4]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#5").remove();

      if (contadorDeRemeras[4] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[4]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "6":

      contadorDeRemeras[5]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#6").remove();

      if (contadorDeRemeras[5] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[5]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "7":

      contadorDeRemeras[6]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#7").remove();

      if (contadorDeRemeras[6] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[6]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "8":

      contadorDeRemeras[7]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#8").remove();

      if (contadorDeRemeras[7] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[7]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;

    case "9":

      contadorDeRemeras[8]--;

      tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras -=producto.precio;

      eliminarUnProductoDelLocalStorage(producto);

      $("#9").remove();

      if (contadorDeRemeras[8] !== 0) {

        $("#compras-realizadas").append(`

                        <li id="${producto.id}" class="producto-agregado-a-carrito">

                            <h4>Camiseta de ${producto.nombre} - ${producto.precio}$ x ${contadorDeRemeras[8]}</h4>
                    
                            <button class ="btnEliminar" id ="'${producto.id}'" onclick="borrarUnProductoDelCarrito('${producto.id}')"> X </button>
            
                        </li>`);
      }

      $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

      break;
  }
}

function eliminarUnProductoDelLocalStorage(producto) {

  let flag = false;

  tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar.forEach((elemento, indice) => {

      if (elemento.id === producto.id && flag === false) {

        flag = true;

        tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar.splice(indice, 1);

        carritoNuevo =tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar;

        if (tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar.length === 0) {
          localStorage.removeItem("carrito");
        } 
        
        else {

          localStorage.clear();

          localStorage.setItem("carrito",JSON.stringify(tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar));
        }
      }
    }
  );
}

function seleccionarMetodoDePago(metodoDePagoSeleccionado) {

  if (tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras === 0) {

    alert("Debe agregar un producto al carrito para seleccionar el metodo de pago");
  } 
  
  else {

    let totalAPagar =tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras;

    switch (metodoDePagoSeleccionado) {

      case "efectivo":

        alert("*El metodo de pago seleccionado fue efectivo, el total a pagar es de: " +totalAPagar +"$");

        break;

      case "tarjeta-de-debito":

        alert("*El metodo de pago seleccionado fue Tarjeta de débito, el total a pagar es de: " +totalAPagar +"$");

        break;

      case "tarjeta-de-credito-tres-cuotas":

        alert("*El metodo de pago seleccionado fue Tarjeta de crédito (cuotas sin interés), el total a pagar es de: " +totalAPagar +"$ \n*Las cuotas seran de: " +totalAPagar / 3 +"$");

        break;

      case "tarjeta-de-credito-seis-cuotas":

        totalAPagar = totalAPagar * 0.1 + totalAPagar;

        alert("*El metodo de pago seleccionado fue Tarjeta de crédito (cuotas con 10% de interés), el total a pagar es de: " +totalAPagar +"$ \n*Las cuotas seran de: " +totalAPagar / 6 +"$");

        break;
    }

    localStorage.removeItem('carrito');

    tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras = 0;

    tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar = [];

    eliminarTodosLosProductos();

    contadorDeRemeras = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    $("#precio-total").text(tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras + "$");

  }
}

function obtenerUsuarioIngresado(){

  return usuarioIngresado;

}

const limpiarHTML = () => {

  $('nav').remove();

  $('#container-page').remove();

  $("#container-ubicacion").remove();

  $('#container-nosotros').remove();

}

