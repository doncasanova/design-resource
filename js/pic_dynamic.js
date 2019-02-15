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

//<a class="navbar-brand" href="index.html"><img src="${image[0]}" alt=""></a>
function addNavBar() {
    $(".loadNavBar").prepend(`  <nav class="navbar navbar-expand-lg bg-faded navBarStyle">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
                            <div class="collapse navbar-collapse justify-content-end " id="navbarCollapse">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company &#x2193</a>
                                        <div class="dropdown-menu dropdown-content">
                                            <a class="dropdown-item" href="company.html">About DRI</a>
                                            <a class="dropdown-item" href="company.html">careers</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Engineering &#x2193</a>
                                        <div class="dropdown-menu dropdown-content">
                                            <a id="manuFacEngi" class="dropdown-item" href="engineering.html">Manufacturing Engineering</a>
                                            <a class="dropdown-item" href="engineering.html">Documentation</a>
                                            <a class="dropdown-item" href="engineering.html">Electrical</a>
                                            <a class="dropdown-item" href="engineering.html">Product Development Engineering</a>
                                            <a class="dropdown-item" href="engineering.html">Prototyping</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Staffing &#x2193</a>
                                        <div class="dropdown-menu dropdown-content">
                                            <a class="dropdown-item" href="staffing.html">Core employee staffing (short term)</a>
                                            <a class="dropdown-item" href="staffing.html">Traditional contract staffing</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>`);
}

