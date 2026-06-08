function irA(vistaTemplate,funcion) {
    let body = document.querySelector("#MiApp");
    let template = document.querySelector(`#${vistaTemplate}`).innerHTML;
    body.innerHTML= template;
    if(funcion){
        funcion();
    }
}