export default class productModel{
    constructor(id,name,img,price){
        this.id=id;
        this.name=name,
        this.img=img,
        this.price=price
    }

    getProducts(){
        return products;
    }
    addNewProduct(obj){
        // console.log(obj);
        let id=products.length+1;
        let product=new productModel(id,obj.name,obj.img,obj.price);
        products.push(product);

    }
}
let products=[
    {
        id:1,
        name:'Shoes',
        img:'https://static.vecteezy.com/system/resources/thumbnails/046/323/598/small_2x/pair-of-colorful-sports-shoes-for-active-lifestyle-png.png',
        price:2549,
    },
    {
        id:2,
        name:'Shirt',
        img:'https://cottonfolk.in/cdn/shop/files/Men_sBrownPinstripeShort-SleeveShirt.jpg?v=1732268509&width=2048',
        price:799,
    },
    {
        id:3,
        name:'Trousers',
        img:'https://img.freepik.com/free-photo/hand-holding-light-brown-beige-pants_23-2150756276.jpg?semt=ais_hybrid&w=740&q=80',
        price:599,
    },
    {
        id:4,
        name:'T-shirt',
        img:'https://onesciencenutrition.in/wp-content/uploads/2023/10/WhatsAppImage2023-07-15at3.36.31PM-1.webp',
        price:399,
    },
    {
        id:5,
        name:'Hats',
        img:'https://media.istockphoto.com/id/1453988945/photo/yellow-bucket-hat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Dwt6ToZZBqfZOiHj7S4lNZfBx4CsPM9_WEa8e4SPZC8=',
        price:899,
    }
];