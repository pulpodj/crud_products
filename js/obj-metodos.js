const Products = [
    {
        name: 'PS5',
        description: 'La consola más potente de Sony al día de la fecha',
        price: 290000,
        stock: true,
        image: 'https://as.com/meristation/imagenes/2020/11/06/reportajes/1604654372_894608_1604656126_noticia_normal.jpg',
        games: ['God of War Origin']
    },
    {
        name: 'PS4',
        description: 'La consola anterior de Sony',
        price: 140000,
        stock: true,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg'
    },
    {
        name: 'PS3',
        description: 'La consola anterior de Sony',
        price: 70000,
        stock: false,
        image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
        jostick: true,
        games: ['Uncharted 3']
    },

    {
        name: 'PS2',
        description: 'La consola anterior de Sony',
        price: 30000,
        stock: false,
    },
    {
        name: 'XBOX Series X',
        description: 'La consola más potente de Microsoft al día de la fecha',
        price: 279000,
        stock: true,
        image: 'https://www.atajo.com.ar/images/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01.jpg',
        games: ['Halo Infinite'],
        jostick: true,

    },
    {
        name: 'XBOX One',
        description: 'La consola anterior de Microsoft',
        price: 115000,
        stock: false,
        image: 'https://i.blogs.es/a7dc9c/fc7174d71089999f6a7e15c1d16/1366_2000.png'
    },
    {
        name: 'XBOX 360',
        description: 'La consola de Microsoft que compite con la PS3',
        price: 60000,
        stock: true,
        image: 'https://http2.mlstatic.com/D_NQ_NP_686099-MLA32731207921_112019-O.webp',
    }
];

const game = {
    name: 'PS3',
    description: 'La consola anterior de Sony',
    price: 70000,
    stock: false,
    image: 'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2019/07/PS4-PS5.jpg',
    jostick: true,
    games: ['Uncharted 3']
};

//queda referenciado
const gameCopy = game;

game.price = 150000;

//shallow copy 

const gameCopySpred = {...game};

//Object assign

const gameCopyAssign = Object.assign({},game);

gameCopySpred.price = 75000;

// console.table (game)
// console.table (gameCopy)
// console.table(gameCopySpred)

// delete gameCopyAssign.image ;
// console.table(gameCopyAssign)

// for(let prod in game){
//     console.log(game[prod]);
// }

// const objectKeys = Object.keys(game) 
//     console.log(objectKeys)

// const objectValue = Object.value(game) 
//     console.log(objectValue)

    const objectEntries = Object.entries(game) 
//     console.log(objectEntries)

//  for(let prod in objectEntries){
//     console.log(objectEntries[prod][1]);
// }   
    
// objectEntries.forEach((element) =>{
//     console.log(element[1])
// });

objectEntries.forEach((element) =>{
    console.log(`El Prod= ${element[1]} --- Valor= ${element[1]}`)
});



