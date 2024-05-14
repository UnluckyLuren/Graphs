function convertSVGToImage() {
    var svg = document.getElementById("containerEditSVG").querySelector("svg");
    var svgData = new XMLSerializer().serializeToString(svg);
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    const container = document.getElementById("containerEditSVG");

    var img = new Image();

    // img.onload = function() {
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     ctx.drawImage(img, 0, 0);

    //     var imgData = canvas.toDataURL("image/png");

    //     document.getElementById("containerEditSVG").style.backgroundImage = "url('" + imgData + "')";
    //     document.getElementById("containerEditSVG").style.backgroundSize = "cover";
    // };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
   
}


function descargar() {
    const elementConvert = document.body;

    html2pdf(elementConvert, {
        margin:0,
        filename: `ejemplo.pdf`,

        image: {
            type: 'jpg',
            quality: 0.98
        },

        html2canvas: {
            scale: 2,
            letterRendering: true
        },

        jsPDF: {
            unit:"mm",
            format:"a4",
            orientation: 'landscape'
        }

    })
    
}