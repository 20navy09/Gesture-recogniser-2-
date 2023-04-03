var prediction="";


Webcam.set({
    width:350,
    height:280,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'
});
}
console.log('ml5.version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MOZXgpp2u/model.json",modelLoaded);

