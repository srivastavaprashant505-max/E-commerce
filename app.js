const c=document.getElementById('products');
fetch('https://dummyjson.com/products?limit=194')
.then(r=>r.json()).then(d=>{
d.products.forEach(p=>{
 const div=document.createElement('div');
 div.className='card';
 div.innerHTML=`<img src="${p.thumbnail}">
 <h3>${p.title}</h3>
 <p>₹ ${p.price}</p>
 <button onclick="location.href='product.html?id=${p.id}'">View</button>`;
 c.appendChild(div);
});
});