import { Request, Response } from "express";
import { createMenuObject} from '../helpers/createMenuObject';    

export const home = (req: Request, res: Response) => {
    res.render('pages/home', {
        menu: createMenuObject('all'),
            banner:{
            title: 'Todos os Animais',
            background: 'all-animals.jpg',
        }
        });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/pages', {
        menu: createMenuObject('dogs'),
            banner:{
            title: 'Cachorros',
            background: 'banner_dog.jpg',
        }
        });
};

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('cats'),
            banner:{
            title: 'Gatos',
            background: 'banner_cat.jpg',
        }
        });
};

export const fishes = (req: Request, res: Response) => {
    res.render('pages/fish', {
        menu: createMenuObject('fish'),
            banner:{
            title: 'Peixes',
            background: 'banner_fish.jpg',
        }
        });
};