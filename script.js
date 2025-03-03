let products = [];

function renderGallery() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";
    products.forEach((product, index) => {
        gallery.innerHTML += `
            <div class="product">
                <img src="${product.image}" onclick="editProduct(${index})" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <button onclick="deleteProduct(${index})">Delete</button>
            </div>`;
    });
}

function addProduct() {
    const name = prompt("Enter product name:");
    if (!name) return;
    const description = prompt("Enter product description:");
    const price = prompt("Enter product price:");
    const image = `https://source.unsplash.com/200x150/?${encodeURIComponent(name)}`;
    products.push({ name, description, price, image });
    renderGallery();
}

function editProduct(index) {
    const product = products[index];
    product.name = prompt("Edit product name:", product.name) || product.name;
    product.description = prompt("Edit product description:", product.description) || product.description;
    product.price = prompt("Edit product price:", product.price) || product.price;
    product.image = `https://source.unsplash.com/200x150/?${encodeURIComponent(product.name)}`;
    renderGallery();
}

function deleteProduct(index) {
    products.splice(index, 1);
    renderGallery();
}

function searchProduct() {
    const query = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".product").forEach((product, index) => {
        const name = products[index].name.toLowerCase();
        product.style.display = name.includes(query) ? "block" : "none";
    });
}
