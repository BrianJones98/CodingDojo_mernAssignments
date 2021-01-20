const ProductController = require("../controllers/Product.controller");

module.exports = app =>{
    app.get("/api/products", ProductController.getAllProducts);
    app.post("/api/products/create", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findSingleProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}