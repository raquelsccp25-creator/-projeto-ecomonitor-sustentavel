const input = document.getElementById("valor")
const btn_enviar = document.getElementById("btn-enviar")
const paragrafo = document.querySelector(".paragrafo")


function verificarTemperatura() {

    const temperatura = Number(input.value)
    
    if( input.value === ""){
        paragrafo.textContent = "Informe um valor!"
         paragrafo.style.color = "blue"
           return
    }

    if (temperatura > 90) {
         paragrafo.textContent =" ⚠️ATENÇÃO ⚠️ TEMPERATURA ELEVADA."
         paragrafo.style.color = "red"
         paragrafo.style.fontSize= "13.5px"

    } else {

        paragrafo.textContent =
        "Temperatura normal, pode operar a máquina normalmente.✅"

        paragrafo.style.color = "green"
    }
}

btn_enviar.addEventListener("click", (e) => {

    e.preventDefault()

    btn_enviar.style.color = "red"

    verificarTemperatura()
})

