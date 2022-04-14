var  SpeechRecognization = window.webitspeechrecognization;

var  recognization = new SpeechRecognization();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognization.start();
}
   
    recognization.onresult = function(event) {

        console.log(event);

        var Content = event.results[0][0].transcript;
        console.log(Content);
            speak();

        document.getElementById("textbox").innerHTML = Content;
    }
    function speak(){
      var synth = window.speechSynthesis;

      speak_data = document.getElementById("textbox").value;

      var utter_this = new SpeechSynthesisUtterance(speak_data);

      synth.speak("utterThis");
      Webacm.attach(camera);
    }

    Webcam.set({
        width:360,
        height:250,
        Image_format : 'png' , 
        png_quality:90
    });
    camera = document.getElementById("camera");