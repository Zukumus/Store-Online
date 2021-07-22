import { makeAutoObservable } from 'mobx';

export default class UserStore {
   constructor() {


      this._types = [
         {
            id: 1,
            name: "Phone",
         },
         {
            id: 2,
            name: "Tv",
         },
         {
            id: 3,
            name: "NootBook",
         }
      ]


      this._brands = [
         {
            id: 1,
            name: "Lenovo",
         },
         {
            id: 2,
            name: "Samsung",

         },
         {
            id: 3,
            name: "Asus",
         }
      ]

      this._device =
         [
            {
               id: 1,
               name: "Lenovo SS!)www111",
               price: 21000,
               rating: 0,
               img: "https://ae01.alicdn.com/kf/HTB1H1uziyQnBKNjSZFmq6AApVXaB/Smartphone-ASUS-Zenfone-4-Max-ZC520KL-3-32GB-mobile-phone-2017-twincamera-superbattery.jpg",

            },
            {
               id: 2,
               name: "Lenovo SS!)www11122",
               price: 21000,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg"
            },
            {
               id: 3,
               name: "A 51",
               price: 9800,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg",
            },
            {
               id: 4,
               name: "Lenovo SS!)www111",
               price: 21000,
               rating: 0,
               img: "https://ae01.alicdn.com/kf/HTB1H1uziyQnBKNjSZFmq6AApVXaB/Smartphone-ASUS-Zenfone-4-Max-ZC520KL-3-32GB-mobile-phone-2017-twincamera-superbattery.jpg",
            },
            {
               id: 5,
               name: "Lenovo SS!)www11122",
               price: 21000,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg"
            },
            {
               id: 6,
               name: "A 51",
               price: 9800,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg",
            },
            {
               id: 7,
               name: "Lenovo SS!)www111",
               price: 21000,
               rating: 0,
               img: "https://ae01.alicdn.com/kf/HTB1H1uziyQnBKNjSZFmq6AApVXaB/Smartphone-ASUS-Zenfone-4-Max-ZC520KL-3-32GB-mobile-phone-2017-twincamera-superbattery.jpg",
            },
            {
               id: 8,
               name: "Lenovo SS!)www11122",
               price: 21000,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg"
            },
            {
               id: 9,
               name: "A 51",
               price: 9800,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg",
            },
            {
               id: 10,
               name: "Lenovo SS!)www111",
               price: 21000,
               rating: 0,
               img: "https://ae01.alicdn.com/kf/HTB1H1uziyQnBKNjSZFmq6AApVXaB/Smartphone-ASUS-Zenfone-4-Max-ZC520KL-3-32GB-mobile-phone-2017-twincamera-superbattery.jpg",

            },
            {
               id: 11,
               name: "Lenovo SS!)www11122",
               price: 21000,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg"
            },
            {
               id: 12,
               name: "A 51",
               price: 9800,
               rating: 0,
               img: "https://cdn.kns.ru/linkpics/samsung-galaxy-s6-edge-sm-g925fzgaser-0.jpg",
            },
         ]




      makeAutoObservable(this)
   };

   setTypes(types) {
      this._types = types
   };

   setBrands(brands) {
      this._brands = brands
   };

   setDevice(device) {
      this._device = device
   };

   get types() {
      return this._types
   };

   get brands() {
      return this._brands
   };

   get device() {
      return this._device
   };

}

