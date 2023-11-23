const abrirModal = document.querySelector("#abrirModal");
const modal = document.querySelector("dialog");
const fecharModal = document.querySelector("#fecharModal")

abrirModal.onclick = function () {
    modal.show()    
}

fecharModal.onclick = function () {
    modal.close ()
}