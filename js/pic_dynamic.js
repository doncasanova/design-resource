var image = ["https://media0.giphy.com/media/270TRfaKb7axy/giphy.gif?cid=3640f6095c5b2c834731774377c4367f", "BalloonFestLasers3.jpg", "CATlasers.jpg", "clublasers1.jpg", "clublasers2.jpg", "EDCvegasLasers.jpg", "EDMlasers1.jpg", "EDMlasers2.jpg", "EDMlasers3.jpg", "SpaceNeedleLasers.jpg"];
var path = "./images/";

addNavBar();
addImage();
function addImage() {
    image.sort(function (a, b) { return 0.5 - Math.random() });
    for (i = 0; i < image.length; i++) {
     
        $(".insertImagesHere").append(`<div id="target" class=" imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${path}${image[i]}" alt="${path}${image[i]}" height="300" ></a></div>`);
        var imageNumber = i;
       
}

}

$(document).on("click", ".imageStyle", function (image) {
   
    $(".insertImagesHere").empty();
    addImage();
});


function addNavBar() {
    console.log("inside instruction load")
    $(".loadNavBar").prepend(`  <nav class="navbar navbar-expand-lg navbar-light bg-faded">
                        <div class="container">
                            <a class="navbar-brand" href="index.html"><img src="${image[0]}" alt=""></a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end bg-dark " id="navbarCollapse">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="about.html">About</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>
                                        <div class="dropdown-menu dropdown-content">
                                            <a class="dropdown-item" href="#">Product Design</a>
                                            <a class="dropdown-item" href="#">Tooling</a>
                                            <a class="dropdown-item" href="#">Staffing</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>`);
}

