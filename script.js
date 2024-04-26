

function loadProducts(){
    const productContainer=document.querySelector(".product-container");
    productContainer.innerHTML="";
    let productHtml="";
    fetch("https://dummyjson.com/products")
    .then(res=>res.json())
    .then(({products})=>{
        products.forEach(product => {
            productHtml+=` <div class="card">
            <div class="image">
                <img src="${product.thumbnail}" alt="">
            </div>
            <div class="info">
                <h3>${product.title}</h3>
                <span>$${product.price}</span>
                <b><i class="fa-solid fa-star"></i> ${product.rating}</b>
                <div class="action">
                    <button>
                        <i class="fa-solid fa-pen-to-square"></i>
                        Edit
                    </button>
                    <button>
                        <i class="fa-solid fa-trash"></i>
                        Delete
                    </button>
                </div>
            </div>
        </div>`;
        });
        productContainer.innerHTML=productHtml;
    })
    .catch(error=>{
        console.log(error);
    })
}
loadProducts()

function loadCategories(){
    const categories=document.querySelector(".categories");
    let li='<li class="active">All</li>';
    fetch("https://dummyjson.com/products/categories")
    .then(res=>res.json())
    .then(data=>{
        for (const category of data) {
            li+=`<li>${category}</li>`;
        }
        categories.innerHTML=li;
    })
    .catch(error=>{
        console.log(error);
    })
}
loadCategories()