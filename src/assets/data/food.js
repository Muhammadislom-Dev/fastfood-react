import food3 from '../img/food3.jpg'
import food4 from '../img/food4.jpg'
import food5 from '../img/food5.jpg'
import food6 from '../img/food6.jpg'
import food7 from '../img/food7.jpg'
import food8 from '../img/food8.jpg'
import food9 from '../img/food9.jpg'
import food10 from '../img/food10.jpg'
import food11 from '../img/food11.jpg'
import food12 from '../img/food12.jpg'
import food13 from '../img/food13.jpg'
import food14 from '../img/food14.jpg'
import food15 from '../img/food15.jpg'
import food16 from '../img/food16.jpg'
import food17 from '../img/food17.jpg'
import food18 from '../img/food18.jpg'
import food19 from '../img/food19.jpg'
import food20 from '../img/food20.jpg'
import food21 from '../img/food21.jpg'
import food22 from '../img/img22.jpg'
import food23 from '../img/img23.jpg'
import food24 from '../img/img24.jpg'
import food25 from '../img/img25.png'
import food26 from '../img/img26.jpg'
import food27 from '../img/img27.jpg'
import food29 from '../img/img29.jpg'
import sweat1 from '../img/sweat1.jpg'
import sweat2 from '../img/sweat2.jpg'
import sweat3 from '../img/sweat3.jpg'
import sweat4 from '../img/sweat4.jpg'
import sweat5 from '../img/sweat5.jpg'
import drink1 from '../img/drink1.webp'
import drink2 from '../img/drink2.webp'
import drink3 from '../img/drink3.webp'
import drink4 from '../img/drink4.webp'
import drink5 from '../img/drink5.webp'
import drink6 from '../img/drink6.webp'

const foods = [
    {
        id:1,
        img: food3,
        title: "Slow Cooker Chicken Chili",
        price: 2.45,
        available: 20,
        type: 'soup'
    },
    {
        id:2,
        img: food4,
        title: "Salted Pasta with mushroom sauce",
        price: 9,
        available: 20,
        type: 'hot-dishes'
    },
    {
        id:3,
        img: food3,
        title: "Beef dumpling in  hot and sour soup",
        price: 6.4,
        available: 20,
        type: 'hot-dishes',
    },
    {
        id:4,
        img: food4,
        title: "Slow Cooker Chicken Chili",
        price: 3.7,
        available: 20,
        type: 'soup',
    },
    {
        id:5,
        img: food5,
        title: "Soulful Chicken Soup",
        price: 4.9,
        available: 20,
        type: 'pizza',
    },
    {
        id:6,
        img: food6,
        title: "Slow Cooker Chicken Chili",
        price: 5,
        available: 20,
        type: 'soup',
    },
    {
        id:7,
        img: food7,
        title: "Soulful Chicken Soup",
        price: 11.2,
        available: 20,
        type: 'pizza',
    },
    {
        id:8,
        img: food8,
        title: "Smoky Ham and  Pea Soup",
        price: 23.5,
        available: 20,
        type: 'set',
    },
    {
        id:9,
        img: sweat1,
        title: "Mixed berry mousse",
        price:  7.9,
        available: 20,
        type: 'desert',
    },
    {
        id:10,
        img: sweat2,
        title: "Mango and coconut soufflé",
        price: 3.45,
        available: 20,
        type: 'desert',
    },
    {
        id:11,
        img: sweat3,
        title: "Homemade carrot cake",
        price: 14,
        available: 20,
        type: 'desert',
    },
    {
        id:12,
        img: sweat4,
        title: "Vegan chocolate cake",
        price: 8,
        available: 20,
        type: 'desert',
    },
    {
        id:13,
        img: sweat5,
        title: "Praline and ganache cake",
        price: 11.8,
        available: 20,
        type: 'desert',
    },
    {
        id:14,
        img: sweat2,
        title: "XL lemon meringue pie",
        price: 5,
        available: 20,
        type: 'desert',
    },
    {
        id:15,
        img: food9,
        title: "Salted Pasta with mushroom sauce",
        price: 6,
        available: 20,
        type: 'hot-dishes'
    },
    {
        id:16,
        img: food10,
        title: "Salted Pasta with mushroom sauce",
        price: 14.5,
        available: 20,
        type: 'cold-dishes'
    },
    {
        id:17,
        img: food11,
        title: "Salted Pasta with mushroom sauce",
        price: 12,
        available: 20,
        type: 'cold-dishes'
    },
    {
        id:18,
        img: food12,
        title: "Salted Pasta with mushroom sauce",
        price: 32,
        available: 20,
        type: 'hot-dishes'
    },
    {
        id:19,
        img: food13,
        title: "Ribye",
        price: 13,
        available: 10,
        type: 'set'
    },
    {
        id:20,
        img: food14,
        title: "Salmon fillet",
        price: 16,
        available: 8,
        type: 'grill'
    },
    {
        id:21,
        img: food15,
        title: "Grilled Kielbasa Tacos",
        price: 19,
        available: 10,
        type: 'grill'
    },
    {
        id:22,
        img: food16,
        title: "New York Strip",
        price: 17.8,
        available: 5,
        type: 'grill'
    },
    {
        id:23,
        img: food17,
        title: "Baby ribs and shrip",
        price: 27,
        available: 3,
        type: 'grill'
    },
    {
        id:24,
        img: food18,
        title: "Tuna Steak",
        price: 18,
        available: 4,
        type: 'set'
    },
    {
        id:25,
        img: food5,
        title: "Curried Peanut Dip",
        price: 18.4,
        available: 7,
        type: 'appetizer'
    },
    {
        id:26,
        img: food8,
        title: "Crab Salad",
        price: 23,
        available: 9,
        type: 'appetizer'
    },
    {
        id:27,
        img: food18,
        title: "Crispy Cheese Twists",
        price: 19,
        available: 24,
        type: 'appetizer'
    },
    {
        id:28,
        img: food19,
        title: "Tuna Steak",
        price: 8.5,
        available: 14,
        type: 'appetizer'
    },
    {
        id:29,
        img: food20,
        title: "Mala Fried Peanuts",
        price: 6,
        available: 18,
        type: 'appetizer'
    },
    {
        id:30,
        img: food21,
        title: "Ham and Cheese Feuilleté",
        price: 4.6,
        available: 25,
        type: 'appetizer'
    },
    {
        id:31,
        img: food6,
        title: "Slow Cooker Chicken Chili",
        price: 2.45,
        available: 14,
        type: 'cold'
    },
    {
        id:32,
        img: food3,
        title: "Salted Pasta  sauce",
        price: 9,
        available: 8,
        type: 'cold'
    },
    {
        id:33,
        img: food9,
        title: "Salted Pasta  sauce",
        price: 6,
        available: 16,
        type: 'cold-dishes'
    },
    {
        id:34,
        img: food10,
        title: "Salted Pasta  mushroom ",
        price: 14.5,
        available: 18,
        type: 'cold'
    },
    {
        id:35,
        img: food15,
        title: "Grilled Kielbasa Tacos",
        price: 9,
        available: 11,
        type: 'cold-dishes'
    },
    {
        id:36,
        img: food16,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:37,
        img: food21,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:38,
        img: food22,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:38,
        img: food23,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:38,
        img: food24,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:38,
        img: food25,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold'
    },
    {
        id:38,
        img: food26,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'soup'
    },
    {
        id:38,
        img: food27,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'cold-dishes'
    },
    {
        id:38,
        img: food29,
        title: "New York Strip",
        price: 52,
        available: 3,
        type: 'soup'
    },
    {
        id:39,
        img:drink1,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
    {
        id:39,
        img:drink2,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
    {
        id:39,
        img:drink3,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
    {
        id:39,
        img:drink4,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
    {
        id:39,
        img:drink5,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
    {
        id:39,
        img:drink6,
        title: "Shampan Italy",
        price: 25,
        available: 15,
        type: "drink"
    },
]

export default foods