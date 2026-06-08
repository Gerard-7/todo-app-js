function buscarEnArray(lista, atributo, valor) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        if (element[atributo]=== valor) {
            return index;
        }
        
    }
    return -1;
}