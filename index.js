function voice(){


    let rec
    
        if(!("webkitSpeechRecognition"in window)){
            alert("Disculpa mano, no puedes usar la API");

        }
        else{
            rec = new webkitSpeechRecognition()
            rec.lang="es-ES";
            rec.continuous=true;
            rec.interim=true;
            rec.addEventListener("result",iniciar)

        }
    function iniciar(event){
            for (let i = event.resultIndex; i < event.results.length; i++) {
                document.getElementById("buscador-google").value=event.results[i][0].transcript;
                
            }
    }
    rec.start();
}