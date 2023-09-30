const newProdutContent = document.querySelector('.new-product-content');
var xa = Math.round(Math.random() * 20);
var xb = Math.round(Math.random() * 20);
var xc = Math.round(Math.random() * 20);
var xd = Math.round(Math.random() * 20);
var xf = Math.round(Math.random() * 20);
var xe = Math.round(Math.random() * 20);

function drawNewProduct() {
    UINewproduct = `
<a onclick="getID(${newProduct[xe].id-102})"><div class="new-product-item" >
<img src="${newProduct[xe].imgUrl1}">
<h5 class="pd-t-20px pd-b-20px">${newProduct[xe].title}</h5>
<p>${newProduct[xe].logo}</p>
<img src="${newProduct[xe].imgUrl2}" class="pd-y-15px">
<span href="#" class="new">New</span>
</div></a>
<a onclick="getID(${newProduct[xa].id-102})"> <div class="new-product-item" >
<img src="${newProduct[xa].imgUrl1}">
<h5 class="pd-t-25px pd-b-20px">${newProduct[xa].title}</h5>

<p>${newProduct[xa].logo}</p>
<img src="${newProduct[xa].imgUrl2}" class="pd-y-20px">
<span href="#" class="new">New</span>
</div></a>
<a onclick="getID(${newProduct[xb].id-102})"><div class="new-product-item" >
<img src="${newProduct[xb].imgUrl1}">
<h5 class="pd-t-25px pd-b-20px">${newProduct[xb].title}</h5>
<p>${newProduct[xb].logo}</p>
<img src="${newProduct[xb].imgUrl2}" class="pd-y-20px">
<span href="#" class="new">New</span>
</div></a>
<a onclick="getID(${newProduct[xc].id-102})"><div class="new-product-item">
<img src="${newProduct[xc].imgUrl1}">
<h5 class="pd-t-25px pd-b-20px">${newProduct[xc].title}</h5>
<p>${newProduct[xc].logo}</p>
<img src="${newProduct[xc].imgUrl2}" class="pd-y-20px">
<span href="#" class="new">New</span>
</div></a>
<a onclick="getID(${newProduct[xd].id-102})"><div class="new-product-item" >
<img src="${newProduct[xd].imgUrl1}">
<h5 class="pd-t-25px pd-b-20px">${newProduct[xd].title}</h5>
<p>${newProduct[xd].logo}</p>
<img src="${newProduct[xd].imgUrl2}" class="pd-y-20px">
<span href="#" class="new">New</span>
</div></a>
<a onclick="getID(${newProduct[xf].id-102})"><div class="new-product-item" >
<img src="${newProduct[xf].imgUrl1}">
<h5 class="pd-t-25px pd-b-20px">${newProduct[xf].title}</h5>
<p>${newProduct[xf].logo}</p>
<img src="${newProduct[xf].imgUrl2}" class="pd-y-20px">
<span href="#" class="new">New</span>
</div></a>
`;
    newProdutContent.innerHTML = UINewproduct;
}
drawNewProduct();
setInterval(() => {
    xa = Math.round(Math.random() * 20);
    xb = Math.round(Math.random() * 20);
    xc = Math.round(Math.random() * 20);
    xd = Math.round(Math.random() * 20);
    xf = Math.round(Math.random() * 20);
    xe = Math.round(Math.random() * 20);
    drawNewProduct();
}, 15000);
// draw newTrend //////////////

const NewTrendContent = document.querySelector('.new-trends-content');

function drewNewTrend() {
    UINewTrend = `
<a onclick="getID2(${newTrends[xa].id})"><div class="new-trends-item">
<img src="${newTrends[xa].imgUrl}">
${newTrends[xa].desc}
</div></a>
<a onclick="getID2(${newTrends[xb].id})"><div class="new-trends-item">
<img src="${newTrends[xb].imgUrl}">
${newTrends[xb].desc}
</div></a>
<a onclick="getID2(${newTrends[xc].id})"><div class="new-trends-item">
<img src="${newTrends[xc].imgUrl}">
${newTrends[xc].desc}
</div></a>
<a onclick="getID2(${newTrends[xd].id})"><div class="new-trends-item">
<img src="${newTrends[xd].imgUrl}">
${newTrends[xd].desc}
</div></a>
<a onclick="getID2(${newTrends[xe].id})"><div class="new-trends-item">
<img src="${newTrends[xe].imgUrl}">
${newTrends[xe].desc}
</div></a>
`;
    NewTrendContent.innerHTML = UINewTrend;
}
drewNewTrend();
setInterval(() => {
    xa = Math.round(Math.random() * 20);
    xb = Math.round(Math.random() * 20);
    xc = Math.round(Math.random() * 20);
    xd = Math.round(Math.random() * 20);
    xe = Math.round(Math.random() * 20);
    drewNewTrend();
}, 16000);

function getID(id) {
    localStorage.setItem('id', id);
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    showDetails(newProduct);
}

function getID2(id) {
    localStorage.setItem('id2', id);
    mainSection.innerHTML = slider;
    mainSection.innerHTML += gaShowersection;
    trndsShow(newTrends);

}
// show new Product Details
function showDetails(arr) {
    let id = localStorage.getItem("id");
    let NPDrawUI = `
<h4 class="section-header"><span><a href="index.html">Primary care</a>
&#11166;&#11166; ${arr[id-1].title}</h4>
<div class=" flex detail-l">
<img src="${arr[id-1].imgUrl2}">
<h3 class="m-l-30px">${arr[id-1].title}</h3>
</div>
<div class="flex detail-I">
<img src="${arr[id-1].imgUrl1}">
<div>
<h2 class="pd-b-20px">${arr[id-1].title}</h2>
<h4 class="pd-b-20px">The Price Is : ${arr[id-1].price}$</h4>

<button class="btn-see-more" onclick="peycard(newProduct,${id-
1})">Order</button>

<h3 class="m-y-20px">Details :</h3>
<p>${arr[id-1].desc}</p>
</div>
</div>
`
    document.querySelector('.show-g-cards .div1').innerHTML = NPDrawUI;
}
// Show Trends Dtetails
function trndsShow(arr) {
    let id = localStorage.getItem("id2");
    let NTDrawUI = `
<h4 class="section-header"><span><a href="index.html">Primary care</a>
&#11166;&#11166; Trends Details</h4>
<div class="flex detail-I ">
<img src="${arr[id-1].imgUrl}" style="width:70%">
<div>
<h2 class="pd-b-20px">${arr[id-1].desc}</h2>
<br/><br/>
<p>${arr[id-1].desc2}</p>
</div>
</div>
`
    document.querySelector('.show-g-cards .div1').innerHTML = NTDrawUI;
}