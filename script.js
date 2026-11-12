
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " has been added to your cart!");
}

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");

    if (!cartItems || !cartTotal) return;

    cartItems.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(function(product, index) {
        cartItems.innerHTML += `
            <div class="cart-item">
                <p>${product.name} - UGX ${product.price.toLocaleString()}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;

        total += product.price;
    });

    cartTotal.innerHTML = "Total: UGX " + total.toLocaleString();
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
}

displayCart();

function sendWhatsApp() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let message = document.getElementById("customerMessage").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let text = "Hello Danie Accessories! My name is " + name +
        ". My email is " + email +
        ". Message: " + message;

    let url = "https://wa.me/256767263363?text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}

function sendEmail() {
    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let message = document.getElementById("customerMessage").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let subject = "Message from Danie Accessories customer";
    let body = "Name: " + name +
        "\nEmail: " + email +
        "\nMessage: " + message;

    window.location.href = "mailto:daniellamahooro5@gmail.com?subject=" +
        encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
}



