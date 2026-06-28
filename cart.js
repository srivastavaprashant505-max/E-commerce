let cart=JSON.parse(localStorage.getItem('cart')||'[]');
const div=document.getElementById('cart');
let total=0;
cart.forEach((p,i)=>{
total+=p.price;
const d=document.createElement('div');
d.className='card';
d.innerHTML=`<h3>${p.title}</h3><p>₹ ${p.price}</p>
<button onclick='removeItem(${i})'>Remove</button>`;
div.appendChild(d);
});
const tax=+(total*0.18).toFixed(2);
const grand=(total+tax).toFixed(2);
document.getElementById('bill').innerHTML=
`Total: ₹ ${total}<br>Tax (18%): ₹ ${tax}<br>Grand Total: ₹ ${grand}`;
function removeItem(i){
cart.splice(i,1);
localStorage.setItem('cart',JSON.stringify(cart));
location.reload();
}