
const URL_USUARIOS_JSON = 'db/usuarios.json';

const URL_PRODUCTOS_JSON = 'db/productos.json';

const tiendaDeRemeras = new Shop();

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

function findActionByPath(path,  routes) {

   return routes.find( route => route.path === path || undefined );

}

const router = () => {

    const path = parseLocation();

    const route = findActionByPath(path,  routes);

    switch( route.action ){

      case 'cargarLogIn':

        limpiarHTML();

        renderLogIn();  

        renderHome();

      break;

      case 'cargarHome': 

        limpiarHTML();

        resetearContadoresDeRemeras();

        renderPage();

        tiendaDeRemeras.listaDeUsuarios[indexUser].carritoDeCompras=0;
  
        productosAgregadosAlCarritoAnteriormente = tiendaDeRemeras.listaDeUsuarios[indexUser].listaDeRemerasPorComprar;
            
        cargarProductosSeleccionadosAnteriormenteAlCarrito(productosAgregadosAlCarritoAnteriormente);

      break;

      case 'ubicacion':

        limpiarHTML();

        renderUbicacion();
      break;

      case 'nosotros':

        limpiarHTML();

        renderNosotros();
      break;

      default:
        console.error('Ruta inexistente');
      break;

    }
}


$(window).on ('load' , function (){

    router();
    
});
    

$(window).on('hashchange', function(){
    
    router();
    
});