fetch ("/api/products")
.then((response) => response.json())
.then((data)=>{
    data.forEach((product)=>{
        console.log(product)
    });
})