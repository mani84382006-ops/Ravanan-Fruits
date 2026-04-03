function placeOrder() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let location = document.getElementById("locationText").innerText;

    if (name === "" || mobile === "" || address === "") {
        alert("Fill all details");
        return;
    }

    let selected = document.querySelectorAll(".product-check:checked");

    if (selected.length === 0) {
        alert("Select at least one product");
        return;
    }

    let orderList = "";

    selected.forEach((item, index) => {
        let pname = item.getAttribute("data-name");
        let price = item.getAttribute("data-price");

        let qty = item.parentElement.querySelector(".qty").value || 1;

        orderList += `${index + 1}. ${pname} - Qty: ${qty} - ₹${price}\n`;
    });

    let message = `🛒 New Order\n\n👤 Name: ${name}\n📞 Mobile: ${mobile}\n📍 Address: ${address}\n${location}\n\n📦 Products:\n${orderList}`;

    let phone = "919092921262";

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}


// ================= SEARCH PRODUCT =================
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
    });
});


// ================= FILTER PRODUCT =================
function filterProduct(category) {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (category === "all") {
            card.style.display = "block";
        } 
        else if (card.classList.contains(category)) {
            card.style.display = "block";
        } 
        else {
            card.style.display = "none";
        }
    });
}


// ================= LOCATION =================
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            document.getElementById("locationText").innerText =
                `Latitude: ${lat}, Longitude: ${lon}`;
        });
    } else {
        alert("Geolocation not supported");
    }
}


function placeOrder() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let address = document.getElementById("address").value;
    let location = document.getElementById("locationText").innerText;

    if (name === "" || mobile === "" || address === "") {
        alert("Fill all details");
        return;
    }

    let selected = document.querySelectorAll(".product-check:checked");

    if (selected.length === 0) {
        alert("Select at least one product");
        return;
    }

    let orderList = "";
    let total = 0;

    selected.forEach((item, index) => {
        let pname = item.getAttribute("data-name");
        let price = parseInt(item.getAttribute("data-price"));

        let qtyInput = item.parentElement.querySelector(".qty");
        let qty = parseInt(qtyInput.value) || 1;

        let subtotal = price * qty;
        total += subtotal;

        orderList += `${index + 1}. ${pname}\n   Qty: ${qty} | ₹${price} x ${qty} = ₹${subtotal}\n`;
    });

    let message = `🛒 New Order\n\n👤 Name: ${name}\n📞 Mobile: ${mobile}\n📍 Address: ${address}\n${location}\n\n📦 Products:\n${orderList}\n💰 Total: ₹${total}`;

    let phone = "919092921262";

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    // Google Sheet send
fetch("YOUR_GOOGLE_SCRIPT_URL", {
    method: "POST",
    body: JSON.stringify({
        name: name,
        mobile: mobile,
        products: orderList,
        address: address,
        location: location
    })
});




}

// ================= SCROLL TOP BUTTON =================
let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};