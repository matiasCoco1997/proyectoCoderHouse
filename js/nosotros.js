function renderNosotros(){

    $("header").append(`
  
    <nav id="nav-botonera">
      
      <a href="#/home"> Home </a>
  
      <a href="#/ubicacion"> Ubicación del local </a>
  
      <a href="#/nosotros"> Nosotros </a>
    
    </nav>
  
    `);

    $("main").append(
        `
            <div class="container-nosotros" id="container-nosotros">


                <div class="texto-nosotros">

                    <h2> El Hincha </h2>

                    <p> Somos un grupo de amigos apasionados por el futbol, que un dia hace 15 años decidimos crear nuestro propio local con el fin de compartir la pasion que sentimos por el futbol con nuestros clientes, ofreciendoles las mejores remeras del futbol Argentino.  </p>

                    <p>Nacho, Cristian, Martín.</p>

                </div>


                <div class="imagen-nosotros">

                    <img src="images/img-nosotros.jpg" alt="hinchada-argentina">

                </div>
            </div>
        `
    );
}