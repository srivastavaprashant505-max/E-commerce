const id=new URLSearchParams(location.search).get('id');
fetch('https://dummyjson.com/products/'+id)
.then(r=>r.json()).then(p=>{
document.getElementById('product').innerHTML=`
<div class='card'>
<img src='${p.thumbnail}'>
<h2>${p.title}</h2>
<p>${p.description}</p>
<p>₹ ${p.price}</p>
<button id='add'>Add To Cart</button>
</div>`;
document.getElementById('add').onclick=()=>{
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
cart.push(p);
localStorage.setItem('cart',JSON.stringify(cart));
alert('Added to cart');
};
});