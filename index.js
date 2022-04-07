function voice(){


    let rec
        // pregunta si esta activado el microfono
        if(!("webkitSpeechRecognition"in window)){
            alert("Disculpa mano, no puedes usar la API");

        }
        // si esta activado define el idioma y los componentes
        else{
            rec = new webkitSpeechRecognition()
            rec.lang="es-PE";
            rec.continuous=true;
            rec.interim=true;
            rec.addEventListener("result",iniciar)

        }
        // funcion para que revise el event para que inicie a escribir en el imput
    function iniciar(event){
        
            for (let i = event.resultIndex; i < event.results.length; i++) {
                document.getElementById("buscador-google").value=event.results[i][0].transcript;
            }
    }
    rec.start();
}