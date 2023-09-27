fetch("/api/products")
    .then((response) => response.json())
    .then((data) => {
        const productList = document.getElementById("product-list");

        data.forEach((product) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <img src="${product.image_url}" alt="${product.name}">
                <div class="product-info">
                    <strong>${product.name}</strong><br>
                    Price: $${product.price}<br>
                    Description: ${product.description}<br>
                </div>
            `;
            productList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error("Error al obtener productos:", error);
    });
