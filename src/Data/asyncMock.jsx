export const products = [
    {
        id: 1,
        name: 'stone up',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://i.3djuegos.com/juegos/15431/shadows_die_twice/fotos/ficha/shadows_die_twice-4816853.webp',
        category: 'pantalones'
    },
    {
        id: 2,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://i.ebayimg.com/images/g/E98AAOSwMndezd0y/s-l500.jpg',
        category: 'pantalones'
    },
    {
        id: 3,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'pantalones'
    },
    {
        id: 4,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'pantalones'
    },
    {
        id: 5,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-1.jpg',
        category: 'buzo'
    },
    {
        id: 6,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-2.jpg',
        category: 'buzo'

    },
    {
        id: 7,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/81iAfj6SgYL._AC_SX522_.jpg',
        category: 'buzo'
    },
    {
        id: 8,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/81QxewHSb5L._AC_SX569_.jpg',
        category: 'buzo'
    },
    {
        id: 9,
        name: 'stone cup',
        price: 299,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/81cTJfYdiVL._AC_SX522_.jpg',
        category: 'buzo'
    },
    {
        id: 10,
        name: 'gray bag',
        price: 300,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://m.media-amazon.com/images/I/81ImGBSmrnL._AC_SX522_.jpg',
        category: 'buzo'
    },
    {
        id: 11,
        name: 'chiar',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-3.jpg',
        category: 'buzo'
    },
    {
        id: 12,
        name: 'STool',
        price: 310,
        despcription: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno',
        stock: 5,
        img: 'https://demos.webicode.com/html/eco-shop-html/html/images/product-2-4.jpg',
        category: 'buzo'
    },
];

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products)
        }, 3000);
    })
};

export const getProductById = (id) => {
    return new Promise((res) => {
        const productoFiltrado = products.find((product) => product.id === parseInt(id));
        setTimeout(() => {
            res(productoFiltrado);
        }, 2000);
    });
};