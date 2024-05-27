let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar primer imagen 
document.getElementById('gifContainer').style.display = 'block';


    function accionParaCuandoEllaDigaQueSi(){
        document.getElementById('happyGifContainer').style.display = 'block';
        // quita los botones 
        document.getElementById('gifContainerImg').style.display = 'none';
        document.getElementById('question').style.display = 'none';
        document.getElementById('siBtn').style.display = 'none';
        document.body.classList.add('bg-green');
        document.getElementById('noBtn').style.display = 'none';
    
        // Mostrar el mensaje específico
        document.getElementById('messageContainer').style.display = 'block';
        document.getElementById('messageContainer').innerHTML = '¡Ya estamos dentro de un gran proyecto que marcara de manera positiva a Lottus!';
    }

    function mueveElBoton(){
        width = window.innerWidth;
        height = window.innerHeight;

        newWidth = (Math.random() * width);
        newHeight = (Math.random() * height);

        document.getElementById('noBtn').style.position = "absolute";
        document.getElementById('noBtn').style.left = newWidth + "px";
        document.getElementById('noBtn').style.top = newHeight + "px";
        

    };

