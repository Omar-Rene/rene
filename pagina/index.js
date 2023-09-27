fetch("/api/products")
  .then((response) => response.json())
  .then((data) => {
    const productList = document.getElementById("product-list");

    data.forEach((product) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <strong>${product.name}</strong><br>
        Price: $${product.price}<br>
        Description: ${product.description}<br>
        <img src="${product.image_url}" alt="${product.name}" width="100"><br><br>
      `;
      productList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Error al obtener productos:", error);
  });
