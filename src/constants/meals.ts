/* eslint-disable @typescript-eslint/no-unused-vars */
import { IMeal } from 'types/product.type';
import images from './../assets/images/mealsImg/index';

export const initialMealsList: IMeal[] = [
    {
        id: 1,
        title: 'Sushi',
        description: 'Finest fish and veggies',
        imgUrl: String(images.meal1),
        price: 22.99,
    },
    {
        id: 2,
        title: 'Schnitzel',
        description: 'A german specialty!',
        imgUrl: '',
        price: 16.5,
    },
    {
        id: 3,
        title: 'Barbecue Burger',
        description: 'American, raw, meaty',
        imgUrl: String(images.meal1),
        price: 12.99,
    },
    {
        id: 4,
        title: 'Green Bowl',
        description: 'Healthy...and green...',
        imgUrl: String(images.meal1),
        price: 18.99,
    },
];
