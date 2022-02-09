function renderLogIn() {

  $('nav').remove();

  $('header').css("border-bottom","5px solid rgb(0, 205, 61)")
    
    $("main").append(
  
      `
      <div class="container-page" id="container-page">
  
        <div class="containerForm" id="logIn">
    
          <h2>Bienvenido a El Hincha, ingrese sus credenciales para ver las mejores remeras de futbol</h2>

          <form class="formulario-de-ingreso" autocomplete="off">
          
            <div class="ingresoDeDatos">
          
              <label for="input-usuario" class="">Usuario</label>
          
              <input type="text" class="" id="input-user" placeholder="Ingrese su usuario">
          
            </div>
          
            <div class="ingresoDeDatos">
          
              <label for="input-password" class="" >Contraseña</label>
          
                <input type="password" class="" id="input-password" placeholder="Ingrese su contraseña">
          
            </div>
          
            <button type="submit"  id="btn-send"> Enviar </button>
          
          </form>

        </div>
      

      </div>
      
  
      `
  
    );
}

  