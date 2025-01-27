class ProductModel {
    constructor(name, description, price, quantity, imageUri, id = null, userId = null) {
        this.id = id || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.imageUri = imageUri;
        this.userId = userId;
    }
}

export default ProductModel;