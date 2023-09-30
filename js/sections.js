let gat = `
<div class="flex j-c-sb">
<ul class=" list">

<li class="list-item"><a >PRIMARY CARE <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a onclick="General_Practice()">GENERAL PRACTICE</a></li>
<li><a onclick="EMERGENCY_MEDICINE()">EMERGENCY MEDICINE</a></li>
<li><a onclick="PEDIATRICS3()">PEDIATRICS</a></li>
</ul>
</li>

<li class="list-item"><a>CARDIOLOGY <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a onclick="CARDIOVASCULAR_EXAMINATION()">CARDIOVASCULAR EXAMINATION</a>
</li>
<li><a onclick="CARDIOVASCULAR_SURGERY()">CARDIOVASCULAR SURGERY</a></li>
</ul>
</li>
<li class="list-item"><a onclick="Neurology()">NEUROLOGY </a></li>

<li class="list-item"><a>ORTHOPEDIC SURGERY <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a onclick="Jointsurgery()">JOINT SURGERY</a></li>
<li><a onclick="spine()">SPINE SURGERY</a></li>
<li><a>TRAUMATOLOGY</a></li>
<li><a>INSTRUMENTS AND TOOLS FOR ORTHOPEDIC SURGERY</a></li>
</ul>
</li>

<li class="list-item"><a>OPHTHALMOLOGY<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li ><a>OPHTHALMIC EXAMINATION</a></li>
<li><a>EYE SURGERY</a></li>
<li><a>EYEWEAR MANUFACTURING</a></li>
</ul>
</li>

<li class="list-item"><a>OTORHINOLARYNGOLOGY<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>ENT EXAMINATION, ENT SURGERY</a></li>
<li><a>AUDIOMETRY</a></li>
</ul>
</li>

<li class="list-item"><a>UROLOGY, OBSTETRICS AND GYNECOLOGY<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a >UROLOGY</a></li>
<li><a>GYNECO-OBSTETRICS</a></li>
</ul>
</li>
<li class="list-item"><a>ONCOLOGY</a></li>
<li class="list-item"><a>GASTROENTEROLOGY</a></li>

<li class="list-item"><a>PODIATRY, DERMATOLOGY <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>PODIATRY</a></li>

<li><a>DERMATOLOGY</a></li>
</ul>
</li>
</ul><!-- ./list -->
<ul class="list">

<li class="list-item"><a>SURGERY UNIT <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>OPERATING ROOM</a></li>
<li><a>SURGICAL INSTRUMENTS</a></li>
<li><a>STERILIZATION</a></li>
<li><a>ANESTHESIA, RESUSCITATION</a></li>
</ul>
</li>

<li class="list-item"><a>MEDICAL TECHNICAL FACILITIES <img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>INTENSIVE CARE</a></li>
<li><a>MONITORING</a></li>
<li><a>MEDICAL TRAINING</a></li>
<li><a>HEALTHCARE IT, TELEMEDICINE</a></li>
<li><a>HOSPITAL INFRASTRUCTURE</a></li>
<li><a>MORTUARY</a></li>
<li><a>MEDICAL INDUSTRY</a></li>
<li><a>COMPONENTS FOR THE MEDICAL INDUSTRY</a></li>
</ul>
</li>

<li class="list-item"><a>MEDICAL IMAGING<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>RADIOLOGY</a></li>
<li><a>ULTRASONOGRAPHY</a></li>
<li><a>ENDOSCOPY</a></li>
<li><a>OPERATING MICROSCOPY</a></li>
<li><a>RADIATION PROTECTION, DOSIMETRY</a></li>
</ul>
</li>

<li class="list-item"><a>LABORATORY<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>SAMPLE MANAGEMENT</a></li>
<li><a>LABORATORY INFRASTRUCTURE</a></li>
<li><a>LABORATORY MEDICINE</a></li>
<li><a>MOLECULAR BIOLOGY</a></li>
<li><a>PHYSICO-CHEMICAL ANALYSIS</a></li>
<li><a>PHARMACEUTICAL INDUSTRY</a></li>
<li><a>MEDICAL RESEARCH</a></li>

</ul>
</li>

<li class="list-item"><a>DENTAL<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>DENTAL PRACTICE</a></li>
<li><a>DENTAL LABORATORY</a></li>
<li><a>DENTAL INSTRUMENTS</a></li>
</ul>
</li>

<li class="list-item"><a>FURNITURE, LOGISTICS<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>HOSPITAL WARDS, HOSTING</a></li>
<li><a>MEDICAL OFFICES, EXAMINATION ROOMS</a></li>
<li><a>PATIENT TRANSFER</a></li>
<li><a>LOGISTICS, SERVICE, STORAGE</a></li>
</ul>
</li>

<li class="list-item"><a>REHABILITATION<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>KINESITHERAPY, PHYSIOTHERAPY</a></li>
<li><a>ORTHOPEDICS, IMMOBILIZATION</a></li>
<li><a>MOBILITY AIDS</a></li>
</ul>
</li>

<li class="list-item"><a>WELLNESS<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>SPA, RELAXATION</a></li>
<li><a>FITNESS</a></li>
<li><a>AESTHETIC MEDICINE</a></li>
</ul>
</li>
<li class="list-item"><a>VETERINARY MEDICINE</a></li>

<li class="list-item"><a>MEDICAL CONSUMABLES<img src="./images/icon/arrow-down-black.svg" fill="#000" alt="" /></a>

<ul class="sub-menu pd-l-25px">
<li><a>CONSUMABLES FOR CARE AND DIAGNOSIS</a></li>
<li><a>MEDICAL CLOTHING</a></li>
</ul>
</li>
</ul><!-- ./list -->
</div>
`

let header = `
<div class="flex al-it-center">
<div class="logo pd-y-5px">
<a href="index.html" class="flex al-it-center">
<img src="./images/logo.svg" alt="">
<p>
medical <br/>equipments
</p>
</a>
</div><!-- ./logo -->
<div class="search-header flex al-it-enter">
<input type="search" id="search2" onkeyup="searchapps()" placeholder="search among 133,182 equipment">
<span class="m-r-10px"></span>
<a onclick="searchResultPage()">
<img src="./images/icon/search.svg" alt="" id="search-icon">
</a>
</div><!-- ./search-header -->
</div>
<a class="op-m-menu"><i class="fa fa-bars fa-2x"></i></a>
<ul class="flex menu-list m-r-20px">
<li class="dropdown"><a onclick="toggle()">Products
<img src="./images/icon/arrow-down-white.svg" alt=""/>
</a>
<div class="dropdown-content ">
` + gat + `
</div><!-- ./dropdown-content -->
</li>
<li onclick="contactUs()"><a >Contact Us</a> </li>
<li id="li-login"><a onclick="loginPage()">LogIn</a> </li>
<li><a onclick="RegisterPage()" id="li-signup">SignUp</a> </li>
<li><a onclick="profilePage()" id="user-name" style="display: none;"></a> </li>
<li><a id="logout">Logout</a> </li>
</ul><!-- ./menu-list -->
`;
let slider = `
<section class="carousel-container">
<a id="prevbtn"><i class="fas fa-arrow-left" ></i></a>
<a id="nextbtn"><i class="fas fa-arrow-right"></i></a>
<div class="carousel-slide">
<img src="images/slider-img/img-05.jpg" id="lastclone"/>
<img src="images/slider-img/img-01.jpg"/>
<img src="images/slider-img/img-02.jpg"/>
<img src="images/slider-img/img-03.jpg"/>
<img src="images/slider-img/img-04.jpg"/>
<img src="images/slider-img/img-05.jpg"/>
<img src="images/slider-img/img-01.jpg" id="firstclone"/>

</div><!-- ./carousel-slide -->
</section><!-- ./carousel-container -->
`;
let seachbox = `
<section class="form-search pd-y-60px">
<div>
<input type="search" id="search" onkeyup="searchapps2()" placeholder="Search ........" />
<a href="./gategory-pages/search-results.html">
<img src="./images/icon/search.svg" alt="">
</a>
</div>
</section><!-- ./form-search -->
`;
let gategory = `
<section class="gategory pd-x-50px">
` + gat + `
</section><!-- ./gategory -->
`;
let newPN = `
<section class="new-product pd-x-50px">
<h3 class="section-header"><span>NEW PRODUCTS</span></h3>
<div class="new-product-content flex">
</div>
</section><!-- ./new-product -->
<section class="new-trends pd-x-50px pd-b-60px">
<h3 class="section-header"><span>NEW TRENDS</span></h3>
<div class="new-trends-content flex">
</div>
</section> <!-- ./new-trends -->
`;
let footer = `
<div>
<h4 >COPYRIGHT &COPY;.ALL RIGHT RESERVED BY ABDALLA MASOUD</h4>
</div>
`;
let gaShowersection = `
<section class="show-g-cards pd-x-50px">
<div class="div1">
</div>
<div class="div2">
</div>
</section>
`;
let LoginP = `
<section class="form-container">
<form action="" method="get">

<h2>LogIn</h2>
<input type="text" placeholder="UserName" id="username" />
<input type="password" placeholder="password" id="password" />
<a onclick="login()" class="R-submit">Login</a>
Not have Account<a onclick="RegisterPage()" style="color:#00f"> Register </a>
</form>
</section>
`;
let RegisterP = `
<section class="form-container">
<form action="" method="get">
<h2>Register</h2>
<input type="text" placeholder="UserName" id="username" />
<input type="email" placeholder="Email" id="email" />
<input type="password" placeholder="password" id="password" />
<a onclick="register()" class="R-submit">Register</a>
have Account<a onclick="loginPage()" style="color:#00f"> LogIn </a>
</form>
</section>
`;
let contactMain = `
<section class="conatct-header">
<img src="./images/slider-img/img-09.jpg">
<div class="overlay"><h1>Contact Us</h1></div>
</section>
<section class="loc-map">
<h1>Location Map</h1>
</section>
<div style="height:500px;">
<img src="./images/map.png" alt="" style="width: 100%; height: 100%;">
</div>
`;
let contactFooter = `
<section class="contact-info">
<div class="contact-info-item">
<p><i class="fas fa-phone" ></i></p>
<h1 class="pd-y-10px">ADDRESS</h1>
<p>123 Main Street, New York, NY 10030</p>
</div>
<div class="contact-info-item">
<p><i class="far fa-envelope"></i></p>
<h1 class="pd-y-10px">Email</h1>
<p>Email@email.com</p>
</div>
<div class="contact-info-item">
<p><i class="fas fa-mobile-alt"></i></p>
<h1 class="pd-y-10px">Mobile Number</h1>

<p>0423-476-543 </br> 079-7876-654 </br>987-6548-765</p>
</div>
</section>
<section>
<form class="contact-form" method="GET">
<h2>contact us</h2>
<label for="full-name">Full Name</label></br>
<input type="text" id="full-name"placeholder="Full Name" required/>
<label for="F-email">Email</label></br>
<input type="email" id="F-email" placeholder="Email" required/>
<label for="message">Message</label></br>
<textarea name="" id="message" placeholder="Message" required></textarea>
<input type="submit" value="SEND">
</form>
</section>
<div>
<h4 class="pd-y-50px">COPYRIGHT &COPY;.ALL RIGHT RESERVED BY ABDALLA MASOUD</h4>
</div>
`;
let username = localStorage.getItem('username');
let email = localStorage.getItem('email');
let userInfo = `
<section class="user-info ">
<h4 class="section-header"><span> User Info</span></h4>
<div>
<h4>UserName : ${username}</h4>
<h4>Email : ${email}</h4>
</div>
</section>
`