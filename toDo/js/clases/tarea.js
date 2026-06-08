let idAutoincTarea = 0;
class Tarea {
    #id;
    #active;
    constructor (titulo, desc){
       this.#id= idAutoincTarea ++;
       this.titulo = titulo;
       this.descripcion = desc;
       this.completado = false;
       this.#active = true;
    }

    getId(){
        return this.#id;
    }

    getActive(){
        return this.#active;
    }

    eliminarTarea(){
        this.#active = false;
    }


}