class System {
    #usuarios;
    #userLog;
    constructor(){
        this.#usuarios=[];
        this.#userLog=null;
        this.precargaDatos();
    }

    precargaDatos(){
        this.registrarUsuario("Danis","danis","pass");
        this.registrarUsuario("Danis","danis","pass");
    }

    buscarPorUser(user){
        let posUser = buscarEnArray(this.#usuarios, "usuario", user);
        if(posUser !== -1){
            return this.#usuarios[posUser];
        }

        return null;
    }

    registrarUsuario(nom, nombUsuario, pass){
        let user = this.buscarPorUser(nombUsuario);
        if(user === null){
            this.#usuarios.push(new Usuario(nom,nombUsuario,pass));
            return true;
        }
        return false;
    }

    login(nombUsuario, pass){
        let user = this.buscarPorUser(nombUsuario);
        if(user!== null && user.contrasenia === pass){
            this.#userLog= user;
            return true;
        }
        return false;
    }

    listarTareas(){
        let tareas = [];
        for (let i = 0; i < this.#userLog.tareas.length; i++) {
            const element = this.#userLog.tareas[i];
            if(element.getActive()){
                tareas.push(element);
            }
        }

        return tareas;
    }

    crearTarea(titulo,desc){
        if(titulo.length > 0 && validarDesc(desc)){
            this.#userLog.agregarTarea(titulo,desc);
            return "";
        }else {
            return "Los datos no son correctos";
        }
    }

    eliminarMiTarea(idTarea){
        this.#userLog.eliminarTarea(idTarea);
    }

    cambiarEstadoTarea(idTarea){
        this.#userLog.cambiarEstado(idTarea);
    }

    getNombreCompletoUser(){
        return this.#userLog.nombre;
    }

    getUserName(){
        return this.#userLog.usuario;
    }
    



}