
export default class ProductModel {
    constructor(id, name, desc, imageUrl, category, price, sizes) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imageUrl = imageUrl;
        this.category = category;
        this.sizes = sizes;
    }

    static GetAll() {
        return products;
    }
}


var products = [
    new ProductModel(
        1,
        'Product 1',
        'Description',
        100,
        'image url here',
        'Category 1'
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description',
        200,
        'image url here',
        'Category 2',
        ['M', 'XL']
    ),
    new ProductModel(
        3,
        'Product 3',
        'Description',
        300,
        'image url here',
        'Category 3',
        ['M', 'XL', 'S']
    )
]