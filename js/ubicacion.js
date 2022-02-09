function renderUbicacion(){

    $('#container-page').remove();

    $("header").append(`
  
    <nav id="nav-botonera">
      
      <a href="#/home"> Home </a>
  
      <a href="#/ubicacion"> Ubicación del local </a>
  
      <a href="#/nosotros"> Nosotros </a>
    
    </nav>
  
    `);


    $("#container-ubicacion").remove();

    $("main").append(
        `
            <div class="container-ubicacion" id="container-ubicacion">

                <div class="contenedor-texto-ubicacion">
                
                    <h2> Dirección </h2>

                    <div class="texto-ubicacion">

                        <p>Galeria Central, Av. Rivadavia 13956 local 27, B1704 Ramos Mejía, Provincia de Buenos Aires </p>

                    </div>
                    

                </div>
                
                <div class="contenedor-map">
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13130.174900252783!2d-58.563636!3d-34.640969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4264b1468551be56!2sEl%20Hincha!5e0!3m2!1ses-419!2sar!4v1644188001751!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>
        `
    );
}