const inserir = document.getElementById('inserir');

function imc () {
    const comando = document.getElementById('comando').value;
    const resultado = document.getElementById('resultado');

    if (comando == 'enable') {
        resultado.textContent = `${comando}+"acessando modo privilegiado"`;


    }
    else{
        resultado.textContent = "digita um [enable] aí";
    }
    
}

inserir.addEventListener('click', imc);
