
addHeader();
addNavBar();
addFooter();



function addHeader() {
    $(".loadHeader").prepend(`  <div class="col-5 col-md-3">
                <img class=" logoImage" src="./img/images/logo.jpg" alt="DR Logo">
            </div>
            <div id="headerRespond" class=" col-7 col-md-9 page-header-title row triangle">
                <div class="col-7 col-md-9 d-flex justify-content-center">
                    <h3 class="heading-title text-center" style="font-family:Calibri">Value driven. Quality sustained.</h3>
                </div>
                <div class="col-5 col-md-3 ">
                    <a href="contact.html" class="btn btn-danger my-4 header-button ">Contact &#x27a4</a>
                </div>
            </div>`);
}


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
                                            <a class="dropdown-item" href="product-development-engineering.html"><p class="navTextDropDown">Product Development <br /> Engineering</p></a>
                                            <a class="dropdown-item" href="documentation.html"><p class="navTextDropDown">Drafting and Documentation</p></a>                                                                                     
                                            <a class="dropdown-item" href="controls-saftey.html"><p class="navTextDropDown">Controls and Saftey</p></a>
                                            <a class="dropdown-item" href="electrical.html"><p class="navTextDropDown">Electrical and Software</p></a>
                                        </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Staffing</p></a>
                                        <div class="dropdown-menu dropdown-content dropDownMargin">
                                            <a class="dropdown-item" href="core-employee-staffing.html"><p class="navTextDropDown">Core Staffing (short term)</p></a>
                                            <a class="dropdown-item" href="traditional-contract-staffing.html"><p class="navTextDropDown">Traditional contract staffing</p></a>
                                            <a class="dropdown-item" href="outsourcing.html"><p class="navTextDropDown">Outsource</p></a>
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
}

function addFooter() {
    $(".loadFooter").prepend(`  <footer class="light-footer">
                    
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse2" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <i class="fa fa-bars"></i>
                            </button>
                    <div class="collapse navbar-collapse justify-content-center " id="navbarCollapse2">
                        <div class="justify-content-center footerCSS">
                                       
                                <ul class="list-inline respons" role="menu2">
                                    <li class="list-inline-item">
                                        <a class="" href="index.html"><p class="navText">HOME</p></a>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="navText">|</p>
                                    </li>
                                    <li class="nav-item dropup">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Engineering</p></a>
                                        <div class="dropdown-menu dropup-content dropUpMargin">
                                            <a id="manuFacEngi" class="dropdown-item" href="manufacturing-engineering.html"><p class="navTextDropUp">Manufacturing Engineering</p></a>
                                            <a class="dropdown-item" href="product-development-engineering.html"><p class="navTextDropUp">Product Development <br /> Engineering</p></a>
                                            <a class="dropdown-item" href="documentation.html"><p class="navTextDropUp">Drafting and Documentation</p></a> 
                                            <a class="dropdown-item" href="controls-saftey.html"><p class="navTextDropUp">Controls and Saftey</p></a>
                                            <a class="dropdown-item" href="electrical.html"><p class="navTextDropUp">Electrical and Software</p></a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="navText">|</p>
                                    </li>
                                    <li class="nav-item dropup">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Staffing</p></a>
                                        <div class="dropdown-menu dropup-content dropUpMargin">
                                            <a class="dropdown-item" href="core-employee-staffing.html"><p class="navTextDropUp">Core Staffing (short term)</p></a>
                                            <a class="dropdown-item" href="traditional-contract-staffing.html"><p class="navTextDropUp">Traditional contract staffing</p></a>
                                            <a class="dropdown-item" href="outsourcing.html"><p class="navTextDropUp">Outsource</p></a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="navText">|</p>
                                    </li>
                                    <li class="nav-item dropup">
                                        <a class="nav-link" href="engineering.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><p class="navText">Company</p></a>
                                        <div class="dropdown-menu dropup-content dropUpMargin">
                                            <a class="dropdown-item" href="about-dir.html"><p class="navTextDropUp">About DRI</p></a>
                                            <a class="dropdown-item" href="careers.html"><p class="navTextDropUp">Careers</p></a>
                                        </div>
                                    </li>
                                    <li class="list-inline-item">
                                        <p class="navText">|</p>
                                    </li>
                                    <li class="list-inline-item">
                                        <a class=""  mr-4 p-3" href="contact.html"><p class="navText">Contact</p></a>
                                    </li>
                                    <div class="row justify-content-center">
                                        <p class=" text-light">&#169; 2019 DESIGN RESOURCE, INC.</p>
                                    </div>
                               </ul>
                            </div>
                        </div>
                        
                    </footer>`);
}

$(document).ready(function () {
    $(".click").click(function () {
        $('html, body').animate({
            scrollTop: $(".dropdown").offset().top
        }, 2000);
        //fireMouseOver();
    });
   
});

//----------------------------------------------------------------
//$(window).on("load, resize", function () {
//    var viewportWidth = $(window).width();
//    if (viewportWidth <= 360) {
//        $(".loadHeader").prepend(`  <div class="col-3 col-md-3 text-right">
//                <img class=" mr-2 logoImage" src="./img/images/logo.jpg" alt="DR Logo">
//            </div>
//            <div id="headerRespond" class=" col-9 col-md-9 page-header-title row triangle">
//                <div class="col-10 col-md-9">
//                    <h3 class="heading-title text-center" style="font-family:Calibri">Value driven. Quality sustained.</h3>
//                </div>
//                <div class="col-2 col-md-3 ">
//                    <a href="contact.html" class="btn btn-danger my-4 header-button ">Contact &#x27a4</a>
//                </div>
//            </div>`);
//    } else {
//        $(".loadHeader").prepend(`  <div class="col-3 col-md-3 text-right">
//                <img class=" mr-2 logoImage" src="./img/images/logo.jpg" alt="DR Logo">
//            </div>
//            <div id="headerRespond" class=" col-9 col-md-9 page-header-title row triangle">
//                <div class="col-10 col-md-9">
//                    <h3 class="heading-title text-center" style="font-family:Calibri">Value driven. Quality sustained.</h3>
//                </div>
//                <div class="col-2 col-md-3 ">
//                    <a href="contact.html" class="btn btn-danger my-4 header-button ">Contact &#x27a4</a>
//                </div>
//            </div>`);
//    }
//});
