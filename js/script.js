let headerSection = document.querySelector('header');
let mainSection = document.querySelector('main');
let footerSection = document.querySelector('footer')
    // pages
function home() {
    document.title = "Medical Equipments";
    headerSection.innerHTML = header;
    mainSection.innerHTML = slider;
    mainSection.innerHTML += seachbox;
    mainSection.innerHTML += gategory;
    mainSection.innerHTML += newPN;
    footerSection.innerHTML = footer;
};
home();

function contactUs() {
    document.title = "Contact Us";
    mainSection.innerHTML = contactMain;
    footerSection.innerHTML = contactFooter;
}

function profilePage() {
    document.title = "Profile";
    mainSection.innerHTML = slider;
    mainSection.innerHTML += userInfo;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;

    Profile();
    slideR();
}

function General_Practice() {
    document.title = "General Practice";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(GeneralPractice);
    slideR();
}

function EMERGENCY_MEDICINE() {
    document.title = "EMERGENC YMEDICINE";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(EMERGEN_CYMEDICINE);
    slideR();
}

function PEDIATRICS3() {
    document.title = "PEDIATRICS";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(PEDIATRICS);
    slideR();
}

function CARDIOVASCULAR_EXAMINATION() {
    document.title = "CARDIOVASCULAR EXAMINATION";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(CARDIOVASCULAREXAMINATION);
    slideR();
}

function CARDIOVASCULAR_SURGERY() {
    document.title = "CARDIOVASCULAR SURGERY";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(CARDIOVASCULARSURGERY);
    slideR();
}

function Neurology() {
    document.title = "NEUROLOGY";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(NEUROLOGY);
    slideR();
}

function Jointsurgery() {
    document.title = "JOINT SURGERY";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(JOINTSURGERY);
    slideR();
}

function spine() {
    document.title = "Spine Surgery";
    headerSection.innerHTML = header;
    M_toggle();
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    drawGatoryItem(SpineSurgery);
    slideR();
}

function searchResultPage() {
    document.title = 'Search Results';

    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    footerSection.innerHTML = footer;
    searchArray = JSON.parse(localStorage.getItem("searchArray"));
    showSearchResult();
    slideR();
}

function loginPage() {
    document.title = 'LOGIN';
    mainSection.innerHTML = LoginP;
    footerSection.innerHTML = footer;
}

function RegisterPage() {
    document.title = 'SIGNUP';
    mainSection.innerHTML = RegisterP;
    footerSection.innerHTML = footer;
}
///////
function slideR() {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImage = document.querySelectorAll('.carousel-slide img');
    //button
    const prevBtn = document.querySelector('#prevbtn');
    const nextBtn = document.querySelector('#nextbtn');
    let counter = 1;
    const size = carouselImage[0].clientWidth;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    nextBtn.addEventListener('click', nextSlide);

    function nextSlide() {
        if (counter >= carouselImage.length - 1) return;
        carouselSlide.style.transition = "transform 0.8s linear";
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    prevBtn.addEventListener('click', () => {
        if (counter <= 0) return;
        carouselSlide.style.transition = "transform 0.8s linear";
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
    carouselSlide.addEventListener('transitionend', () => {
        if (carouselImage[counter].id === 'lastclone') {

            carouselSlide.style.transition = "none";
            counter = carouselImage.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImage[counter].id === 'firstclone') {
            carouselSlide.style.transition = "none";
            counter = carouselImage.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });
    (function autoplay() {
        carouselSlide.addEventListener('mouseover', () => {
            clearInterval(timer);
        });
        carouselSlide.addEventListener('mouseout', () => {
            timer = setInterval(nextSlide, 4000);
        });
        timer = setInterval(nextSlide, 4000);
    })();
};
slideR();
////////
// mobile toogle menu-list
M_toggle();

function M_toggle() {
    let Mtoggle = document.querySelector('.op-m-menu');
    let menuList = document.querySelector('.menu-list');
    Mtoggle.addEventListener('click', () => {
        menuList.classList.toggle('active');
    });
    //
    let dropdownsubMenu = document.querySelectorAll('.list-item a img');
    document.querySelectorAll('.sub-menu').forEach((item, index) => {
        var x = item.childElementCount;
        item.style.height = '0px';
        item.previousElementSibling.addEventListener('click', () => {
            if (item.style.height == '0px') {
                item.style.height = x * 30 + 'px';
                dropdownsubMenu[index].style.transform = 'rotate(180deg)';
            } else {
                item.style.height = '0px';
                dropdownsubMenu[index].style.transform = 'rotate(0deg)';
            }

        });
    });
    // check if user is login or not
    let li_login = document.getElementById('li-login');
    let li_signup = document.getElementById('li-signup');
    let user_Name = document.getElementById('user-name');
    let logout = document.getElementById('logout');
    let username = localStorage.getItem("username");
    if (username) {
        li_login.remove();
        li_signup.remove();
        logout.style.display = "flex";
        user_Name.style.display = "flex";
        user_Name.innerHTML = username;
    }
    logout.addEventListener("click", () => {
        localStorage.clear();
        loginPage();
    });
}
//////
function toggle() {
    let dropdown_content = document.querySelector('.dropdown-content');
    dropdown_content.classList.toggle('active');
}
// function for show gategory item
function drawGatoryItem(arr) {

    let UIGat = `<h4 class="section-header">
					<span><a href="index.html">${arr.title1}</a> &#11166;&#11166; ${arr.title2} :</span>
				</h4><div class="flex m-b-50px j-c-sb flex-wrap">` +
        arr.array.map((item) => {
            return `
			<div class="card">
			<img src="${item.imgUrl}" alt="">
			<h3 class="card-title">${item.title}</h3>

			<button class="btn-see-more " onclick="seeMore(${item.title})">See More ...</button>

			</div>
			`
        }).join(""); +
    `
		</div>
		`;
    document.querySelector('.show-g-cards .div1').innerHTML = UIGat;

}
// function for show nested items
function seeMore(arr) {
    let UISeeMore = `
<h4 class="section-header"><span><a href="index.html">${arr.title1}</a>
&#11166;&#11166; <a onclick="drawGatoryItem(${arr.title2})">${arr.title2}</a>
&#11166;&#11166; ${arr.title3} :</span></h4>
<div class="flex m-b-50px j-c-sb flex-wrap">` +
        arr.array.map((item, index) => {
            return `
<div class="card">
<img src="${item.imgUrl1}" alt="">
<img src="${item.imgUrl2}" alt="">
<p class="pd-y-25px card-title">${item.title}</p>
<div class="overlay" onclick="showproit(${arr.title3},${index})">
<button class="btn-see-more m-t-15px" >Details</button>
<h4 class="pd-y-10px">${item.title}</h4>
<p>${item.desc}</p>
</div>
</div>
`
        }).join(""); +
    `
</div>
`
    document.querySelector('.show-g-cards .div1').innerHTML = UISeeMore;
}

function showproit(ar, index) {
    let UIPD = `
<h4 class="section-header"><span><a href="index.html">${ar.title1}</a>
&#11166;&#11166; <a onclick="drawGatoryItem(${ar.title2})">${ar.title2}</a>
&#11166;&#11166;<a onclick="seeMore(${ar.title3})"> ${ar.title3} </a> &#11166; &#11166; ${ar.array[index].title}</span></h4>
<div class=" flex detail-l">
<img src="${ar.array[index].imgUrl2}">
<h3 class="m-l-30px">${ar.array[index].title}</h3>
</div>
<div class="flex detail-I">
<img src="${ar.array[index].imgUrl1}">
<div>
<h2 class="pd-b-20px">${ar.array[index].title}</h2>
<h4 class="pd-b-20px">The Price Is : ${ar.array[index].price}$</h4>

<button class="btn-see-more" onclick="peycard(${ar.title3}.array,${index})">Order</button>

<h3 class="m-y-20px">Details :</h3>
<p>${ar.array[index].desc}</p>
</div>
</div>
`;
    document.querySelector('.show-g-cards .div1').innerHTML = UIPD;
}

function showSearchResult() {
    let searchArray = JSON.parse(localStorage.getItem("searchArray"));
    let get_key = localStorage.getItem("keywords");
    let UISEE = `
<h4 class="section-header"><span><a href="index.html">Primary care</a>
&#11166;&#11166; Search Result : ${get_key}</h4>
<div class="flex m-b-50px j-c-sb flex-wrap">` +
        searchArray.map((item, index) => {
            return `
<div class="card">
<img src="${item.imgUrl1}" alt="">
<img src="${item.imgUrl2}" alt="">
<h3 class="card-title">${item.title}</h3>
<div class="overlay" onclick="searchitem(${item.arr},${index})">
<button class="btn-see-more m-t-15px" >Details</button>
<h4 class="pd-y-10px">${item.title}</h4>
<p>${item.desc}</p>
</div>
</div>
`
        }).join(""); +
    `</div>`;
    document.querySelector('.show-g-cards .div1').innerHTML = UISEE;
}
let searchArray = JSON.parse(localStorage.getItem("searchArray"));

function searchitem(arr, index) {
    let searchArray = JSON.parse(localStorage.getItem("searchArray"));
    let SDrawUI = `
<h4 class="section-header"><span><a href="index.html">Primary care</a>
&#11166;&#11166; ${arr.title2} &#11166;&#11166; ${arr.title3} &#11166;&#11166;${searchArray[index].title}</span></h4>
<div class=" flex detail-l">
<img src="${searchArray[index].imgUrl2}">
<h3 class="m-l-30px">${searchArray[index].title}</h3>
</div>
<div class="flex detail-I">
<img src="${searchArray[index].imgUrl1}">
<div>

<h2 class="pd-b-20px">${searchArray[index].title}</h2>
<h4 class="pd-b-20px">The Price Is : ${searchArray[index].price}$</h4>

<button class="btn-see-more" onclick="peycard(searchArray,${index})">Order</button>

<h3 class="m-y-20px">Details :</h3>
<p>${searchArray[index].desc}</p>
</div>
</div>
`
    document.querySelector('.show-g-cards .div1').innerHTML = SDrawUI;
}
// order function
function peycard(arr, index) {
    let addedItem = localStorage.getItem('productsInCard') ? JSON.parse(localStorage.getItem('productsInCard')) : [];
    if (localStorage.getItem('username')) {
        let orderCard = `
<div class="order-container" onclick="closeOrder()">
<div class="order-card pd-y-40px">
<h2 class="pd-b-15px">${arr[index].title}</h2>
<h3>Added To Your Profile</h3>
</div>
`;
        document.querySelector('.show-g-cards .div2').innerHTML = orderCard;
        let choosenItem = arr[index];
        let isProductInCard = addedItem.some((i) => i.id === choosenItem.id);
        if (isProductInCard) {
            addedItem = addedItem.map((p) => {
                if (p.id === choosenItem.id) p.qty += 1;
                return p;
            });
        } else {
            addedItem.push(choosenItem);
        }
        localStorage.setItem('productsInCard', JSON.stringify(addedItem));
    } else {
        alert('!--- PLease Login First');
    }
}

function closeOrder() {
    let Or = document.querySelector('.order-container');
    Or.style.animation = "OClose .3s linear";
    setTimeout(() => {
        Or.style.transform = 'scale(0)';

    }, 300)
}

function Profile(allproducts = []) {
    let order_product = JSON.parse(localStorage.getItem('productsInCard')) || allproducts;
    //
    let UIprofile = `
<h4 class="section-header"><span> Order List</span></h4>
<table class="profile-table">
<thead>

<tr><th>N</th><th>G-Name</th><th>P-Name</th><th>Price</th><th>Quantity</th><th>Total</th><th>Remove</th></tr>

</thead>
<tbody>` +
        order_product.map((item, index) => {
            item.total = item.qty * item.price;
            return `
<tr>
<td>${index+1}</td>
<td>${item.arr}</td>

<td onclick="showImage(${item.id-1})" class="P-name">${item.title}</td>

<td>${item.price} $</td>
<td>${item.qty}</td>
<td>${item.total} $</td>

<td><a class="Profile-remove" onclick="remove_Product(${item.id})"><i class="fas fa-times"></i></a></td>

</tr>
`;
        }).join(""); +
    `
</tbody>
`;
    let ui2 = `
<tfoot>
<tr>
<td colspan="4">Sum</td>
<td colspan="3">${sum(order_product)} $</td>
</tr>
</tfoot>
</table>
`

    document.querySelector('.show-g-cards .div1').innerHTML = UIprofile + ui2;
}

function showImage(id) {
    let showP = JSON.parse(localStorage.getItem('allarray'));
    let uipro = `
<div class="order-container" onclick="closeOrder()">
<div class="order-card pd-y-40px">
<h2 class="pd-b-15px">${showP[id].title}</h2>
<img src="${showP[id].imgUrl1}" style="max-width:600px">
</div>
`;
    document.querySelector('.show-g-cards .div2').innerHTML = uipro;
}

function sum(arr) {
    let s = 0;
    for (i = 0; i < arr.length; i++) {
        s = s + arr[i].total;
    }
    return s;
}

function remove_Product(id) {
    let productsInCard = localStorage.getItem("productsInCard");
    if (productsInCard) {
        let items = JSON.parse(productsInCard);
        let filterdItems = items.filter(item => item.id !== id);
        localStorage.setItem("productsInCard", JSON.stringify(filterdItems));
        Profile(filterdItems);
    }
}