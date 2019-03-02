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
                                        <a class="nav-link display-3 " href="index.html"><p class="navText">HOME</p></a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Engineering</p></a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a id="manuFacEngi" class="dropdown-item" href="manufacturing-engineering.html"><p class="navTextDropDown">Manufacturing Engineering</p></a>
                                            <a class="dropdown-item" href="documentation.html"><p class="navTextDropDown">Documentation</p></a>
                                            <a class="dropdown-item" href="electrical.html"><p class="navTextDropDown">Electrical</p></a>
                                            <a class="dropdown-item" href="product-development-engineering.html"><p class="navTextDropDown">Product Development Engineering</p></a>
                                            <a class="dropdown-item" href="prototyping.html"><p class="navTextDropDown"></p></a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Staffing</p></a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a class="dropdown-item" href="core-employee-staffing.html"><p class="navTextDropDown">Core employee staffing (short term)</p></a>
                                            <a class="dropdown-item" href="traditional-contract-staffing.html"><p class="navTextDropDown">Traditional contract staffing</p></a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Company</p></a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a class="dropdown-item" href="about-dir.html"><p class="navTextDropDown">About DRI</p></a>
                                            <a class="dropdown-item" href="careers.html"><p class="navTextDropDown">Careers</p></a>
                                        </div>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link  mr-4 p-3" href="contact.html"><p class="navText">Contact</p></a>
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
    $(".loadHeader").prepend(`  <div class="col-5 col-md-3 text-right">
                <img class=" mr-2 " src="./img/images/logo.png" alt="DR Logo" style="width:60%;height:100%;">
            </div>
            <div class=" col-7 col-md-9 page-header-title row triangle">
                <div class="col-8 col-md-8">
                    <h3 class="heading-title animated fadeInDown text-center" style="font-family:Calibri">Value driven. Quality sustained.</h3>
                </div>
                <div class="col-4 col-md-4">
                    <a href="contact.html" class="btn btn-danger my-4 ">Contact &#x27a4</a>
                </div>
            </div>`);
}
 