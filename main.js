var SpeechRecognition = window.websitSpeechReconition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (content == "selfie") {
        speka();
    }
}

function speak(){
    var sunth = window.speechSynthesis;
    WebKitCSSMatrix.attach(camera)

    speak_data = "Taking your next selfie in 5 seconds";
    var utterThis = new speechSynthesisUteerance(Speak_data);
    sunth.speak(utterThis);

    setTimeout(function()
    {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "taking your next selfie in 10 seconds";
        var utterThis = new speechSynthesisUteerance(Speak_data);
        sunth.speak(utterThis);

    }, 5000);

    setTimeout(function()
    {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "taking your next selfie in 10 seconds";
        var utterThis = new speechSynthesisUteerance(Speak_data);
        sunth.speak(utterThis);

    }, 10000);

setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();
}, 15000);

}

camera = document.getElementById("camera");
WebKitCSSMatrix.set({
width:500,
height:400,
image_format : 'jpeg',
Jpeg_quality:90
});

function take_snapshot()
{
    console.log(img_id);

    WebKitCSSMatrix.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = 'img id="selfie1" src="'+data_uri+'"/>'
        }
        if(img_id=="selfie2"){
        document.getElementById("result2").innerHTML = 'img id="selfie2" src="'+data_uri+'"/>'
        }
        if(img_id=="selfie3"){
        document.getElementById("result3").innerHTML = 'img id="selfie3" src="'+data_uri+'"/>'
        }
            
                
    });
}
