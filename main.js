var SpeechRecognition = window.webkitSpeechRecognition;//bringing api into our program
var recognition = new SpeechRecognition();//jerry

function begin()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
}  

recognition.onresult = function(event) {
console.log(event); 
var Content = event.results[0][0].transcript;//good morning
document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content =="take my selfie")
      {
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;//to convert sentence into speech
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);//audio msg
    synth.speak(utterThis);
    Webcam.attach('#camera');
    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);//ms
}


camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");//a tag
  image = document.getElementById("selfie_image").src ;//clicked pic
  document.getElementById("link").href = image;
  link.click();//automating click 
}
