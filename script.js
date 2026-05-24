const products = [

{
    id: 1,
    name: "Gaming Laptop",
    category: "Laptop",
    price: "$1200",

    image:
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800"
},

{
    id: 2,
    name: "Smart Phone",
    category: "Phone",
    price: "$800",

    image:
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800"
},

{
    id: 3,
    name: "Wireless Headphones",
    category: "Accessories",
    price: "$150",

    image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800"
},

{
    id: 4,
    name: "Smart Watch",
    category: "Accessories",
    price: "$250",

    image:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800"
}

];

const container =
document.getElementById("productContainer");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");

const themeBtn =
document.getElementById("themeBtn");

const cartCount =
document.getElementById("cartCount");

let cart = 0;

function displayProducts(items){

    container.innerHTML = "";

    items.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <p>${product.category}</p>

                <p class="price">
                    ${product.price}
                </p>

                <button onclick="addToCart()">
                    Add To Cart
                </button>

            </div>

        </div>
        `;
    });
}

displayProducts(products);

searchInput.addEventListener("input", filterProducts);

categoryFilter.addEventListener("change", filterProducts);

function filterProducts(){

    const searchValue =
    searchInput.value.toLowerCase();

    const categoryValue =
    categoryFilter.value;

    const filtered = products.filter(product => {

        const matchesSearch =
        product.name.toLowerCase()
        .includes(searchValue);

        const matchesCategory =
        categoryValue === "all" ||
        product.category === categoryValue;

        return matchesSearch &&
        matchesCategory;
    });

    displayProducts(filtered);
}

function addToCart(){

    cart++;

    cartCount.innerText = cart;
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");
});