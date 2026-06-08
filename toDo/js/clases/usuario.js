let idAutoUser = 0;
class Usuario{
    #id;
    constructor(nom, user, pass){
        this.#id = idAutoUser ++;
        this.nombre= nom;
        this.usuario= user;
        this.contrasenia= pass;
        this.tareas = [];
    }

    buscarTareaPorId(identificador){
        let posTarea = buscarEnArray(this.tareas,"id",identificador);
        if (posTarea !== -1 ) {
            return this.tareas[posTarea];
        }
        return null;
    }

    agregarTarea(titulo,desc){
        let tarea = new Tarea(titulo, desc);
        this.tareas.push(tarea);
    }

    cambiarEstado(idTarea){
        let tarea = this.buscarTareaPorId(idTarea);
        if(tarea !== null){
            tarea.completado = !tarea.completado;
        }
    }

    eliminarTarea(idTarea){
        let tarea = this.buscarTareaPorId(idTarea);
        if(tarea !== null){
            tarea.eliminarTarea();
        }
    }

}