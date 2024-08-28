const areaTexto = document.querySelector(".text-area"); // textArea
const mensaje = document.querySelector(".respuesta");

// Función para encriptar el texto
function encriptar(stringEn) {
    let matrizReglas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEn = stringEn.toLowerCase(); // Convertir a minúsculas

    // Reemplazar cada letra según las reglas
    for (let i = 0; i < matrizReglas.length; i++) {
        if (stringEn.includes(matrizReglas[i][0])) {
            stringEn = stringEn.replaceAll(matrizReglas[i][0], matrizReglas[i][1]);
        }
    }
    return stringEn;
}

// Función para desencriptar el texto
function desencriptar(stringDes) {
    let matrizReglas = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDes = stringDes.toLowerCase(); // Convertir a minúsculas

    // Reemplazar cada código según las reglas
    for (let i = 0; i < matrizReglas.length; i++) {
        if (stringDes.includes(matrizReglas[i][1])) {
            stringDes = stringDes.replaceAll(matrizReglas[i][1], matrizReglas[i][0]);
        }
    }
    return stringDes;
}

// Función para manejar el botón de encriptar
function bnEncriptar() {
    try {
        const txtEncriptado = encriptar(areaTexto.value);
        mensaje.value = txtEncriptado;
    } catch (error) {
        console.error("Error al encriptar:", error);
    }
}

// Función para manejar el botón de desencriptar
function bnDesencriptar() {
    try {
        const txtDesencriptado = desencriptar(areaTexto.value);
        mensaje.value = txtDesencriptado;
    } catch (error) {
        console.error("Error al desencriptar:", error);
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error("Error al copiar:", err);
        });
}
