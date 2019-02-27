var image = ["https://media0.giphy.com/media/270TRfaKb7axy/giphy.gif?cid=3640f6095c5b2c834731774377c4367f", "BalloonFestLasers3.jpg", "CATlasers.jpg", "clublasers1.jpg", "clublasers2.jpg", "EDCvegasLasers.jpg", "EDMlasers1.jpg", "EDMlasers2.jpg", "EDMlasers3.jpg", "SpaceNeedleLasers.jpg"];
var path = "./images/";

addHeader();
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
                            <div class="collapse navbar-collapse justify-content-center " id="navbarCollapse">
                                <ul class="navbar-nav ">
                                    <li class="nav-item">
                                        <a class="nav-link mr-4 p-3" href="index.html">Home</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link  mr-4 p-3" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Engineering</a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a id="manuFacEngi" class="dropdown-item" href="manufacturing-engineering.html">Manufacturing Engineering</a>
                                            <a class="dropdown-item" href="documentation.html">Documentation</a>
                                            <a class="dropdown-item" href="electrical.html">Electrical</a>
                                            <a class="dropdown-item" href="product-development-engineering.html">Product Development Engineering</a>
                                            <a class="dropdown-item" href="prototyping.html">Prototyping</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link  mr-4 p-3" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Staffing</a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a class="dropdown-item" href="core-employee-staffing.html">Core employee staffing (short term)</a>
                                            <a class="dropdown-item" href="traditional-contract-staffing.html">Traditional contract staffing</a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link  mr-4 p-3" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Company</a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a class="dropdown-item" href="about-dir.html">About DRI</a>
                                            <a class="dropdown-item" href="careers.html">Careers</a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  mr-4 p-3" href="contact.html">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>`);

    //<li class="nav-item">
    //    <a class="nav-link" href="portfolio.html">Portfolio</a>
    //</li>
}

function addHeader() {
    $(".loadHeader").prepend(`  <div class="col-5 col-md-3 text-center">
                <img class="mt-3" src="./img/images/logo.png" alt="DR Logo" style="width:50%;height:70%;">
            </div>
            <div class=" col-7 col-md-9 page-header-title row triangle">
                <div class="col-9 col-md-9">
                    <h3 class="heading-title animated fadeInDown text-center" style="font-family:Calibri">Value driven. Quality sustained.</h3>
                </div>
                <div class="col-3 col-md-3 ">
                    <a href="contact.html" class="btn btn-danger my-4">Contact &#x27a4</a>
                </div>
            </div>`);
}
 