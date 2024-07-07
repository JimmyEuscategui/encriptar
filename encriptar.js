document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('texto');

    textarea.addEventListener('focus', function () {
        this.placeholder = '';
    });

    textarea.addEventListener('blur', function () {
        if (this.value === '') {
            this.placeholder = 'Ingrese su texto aqui';
        }
    });
});

function encriptar() {
    let texto = document.getElementById('texto').value;
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    document.getElementById('valor').innerHTML = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById('texto').value;
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    document.getElementById('valor').innerHTML = textoDesencriptado;
}

function copiar() {
    let contenido = document.getElementById('valor').innerText;
    navigator.clipboard.writeText(contenido).then(function() {
        let copiarBtn = document.getElementById('copiarbtn');
        copiarBtn.innerText = 'Texto copiado';
        setTimeout(function() {
            copiarBtn.innerText = 'Copiar';
        }, 5000); // Cambiar el texto de nuevo a "Copiar" después de 2 segundos
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
}
