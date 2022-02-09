class Shop {

    constructor() {

        this.listaDeProductos = [];
        this.listaDeUsuarios = [];
    }


    findIndexUser(userBuscado) {

        for (let i = 0; i < this.listaDeUsuarios.length; i++) {

            if (this.listaDeUsuarios[i].usuario === userBuscado) {
                return i;
            }
        }
        return alert('Usuario no encontrado.');
    }



    validarUsuario(usuarioIngresado) {

        for (let i = 0; i < this.listaDeUsuarios.length; i++) {

            if (usuarioIngresado === this.listaDeUsuarios[i].usuario && i <= this.listaDeUsuarios.length) {

                return true;
            }
        }
        return false;
    }



    validarContrasenia(contraseniaIngresada) {

        for (let i = 0; i < this.listaDeUsuarios.length; i++) {

            if (contraseniaIngresada === this.listaDeUsuarios[i].contrasenia && i <= this.listaDeUsuarios.length) {

                return true;
            }
        }
        return false;
    }

}