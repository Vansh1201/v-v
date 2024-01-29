function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
     }

     Webcam.set({
        width:360,
        height:250,
        image_format : 'png' ,
        png_quality:90
        });

        function take_snapshot(){
            Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img id="selfie_image"src="'+ data_uri+'">'
            });
             }
             Webcam.attach(camera)
             setTimeout(function(){
            take_snapshot();
            
             }, 5000);

             function save(){
                link = document.getElementById("link");
                image = document.getElementById("selfie_image").scroll;
                link.href = image;
                link.click();
                 }
                

