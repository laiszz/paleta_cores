function mostrarTexto(id){
    document.querySelector(`#copiar-${id}`).style.visibility = "visible"
}

function esconderTexto(id){
    document.querySelector(`#copiar-${id}`).style.visibility = "hidden"
}

function copiar(id){
    navigator.clipboard.writeText(document.querySelector(`#valor-${id}`).innerHTML);
}