let data = JSON.parse(localStorage.getItem("products"));

let initialState = data ? data : [
    {
        id: 1,
        name: 'Iphone 6s 32GB',
        des: 'San pham aple',
        img: 'https://ss7.vzw.com/is/image/VerizonWireless/iphone6s-spgry-front?$device-lg$',
        price: 500,
        inventory: 10,
        rating: 4,
    },
    {
        id: 2,
        name: 'Samsung galaxy s7',
        des: 'San pham samsung',
        img: 'https://ss7.vzw.com/is/image/VerizonWireless/SamGalHeroBLK_a_001_spin?$png8alpha256$&hei=410',
        price: 450,
        inventory: 15,
        rating: 3,
    },
    {
        id: 3,
        name: 'Vinsmart',
        des: 'San pham cua nguoi viet',
        img: 'https://voxsmart.com/img/PNG/product-page/vsmart-phone.png',
        price: 300,
        inventory: 99,
        rating: 5,
    }
];

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default products;