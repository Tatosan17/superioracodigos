// Función para generar el código QR
function generateQRCode() {
    let text = document.getElementById("textInput").value;
    let qrCodeContainer = document.getElementById("qrcode");
    qrCodeContainer.innerHTML = "";

    if (text.trim() === "") {
        alert("Introduce algún texto o enlace para generar el código QR.");
        return;
    }

    // Genera el código QR
    new QRCode(qrCodeContainer, {
        text: text,
        width: 200,
        height: 200
    });

    // Mostrar botón de descarga
    document.getElementById("downloadBtn").style.display = "inline-block";
}

// Función para descargar el código QR como imagen
function downloadQRCode() {
    let qrCodeImage = document.querySelector("#qrcode img");

    if (qrCodeImage) {
        let downloadLink = document.createElement("a");
        downloadLink.href = qrCodeImage.src;
        downloadLink.download = "entrada_qr.png";
        downloadLink.click();
    } else {
        alert("Primero debes generar el código QR.");
    }
}