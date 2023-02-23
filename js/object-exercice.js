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

swal({
    title: 'Bienvenido a SweetAlert',
    text: 'Este modal o dialogo',
    icon: 'info',
    timer: 3000
});

const tableBody = document.querySelector('#table-body');

function renderizarTabla(){
    tableBody.innerHTML = ''
    Products.forEach((producto)=>{
        let imageSrc = '/assest/image/no-product.png';
       if(producto.image) 
            imageSrc  = producto.image;
       const tableRow = `
       <tr>
                <td><img class= "product__img" src="${imageSrc}" alt="${producto.name}" width="80px"></td>
                <td>${producto.name}</td>
                <td class="product__desc">${producto.description}</td>
                <td class="product__price">$ ${producto.price}</td>
                <td class="product__others">
                      <i class="fa-solid fa-box"></i>
                      <i class="fa-solid fa-box"></i>
                
                </td>
                <td class = "product__actions">
                <button class= "product__action-btn">
                <i class="fa-regular fa-trash-can"></i>
                </button>
                <button class= "product__action-btn btn-edit">
                <i class="fa-solid fa-pencil"></i>
                </button>
                <button class= "product__action-btn btn-favorite">
                <i class="fa-regular fa-star"></i>
                </button>
                </td>
            </tr>
       ` 
       tableBody.innerHTML += tableRow; 
    })
}

renderizarTabla();

function addProduct(evt){
    evt.preventDefault();
    console.dir(evt.target);
    const elements = evt.target.elements;
    
    const newProducts = {
        name: elements.name.value,
        description: elements.description.value,
        price: elements.price.valueAsNumber,
        image: elements.image.value,
        stock: elements.stock.checked,
        joystick: elements.joystick.checked,
        games: elements.games.value
    }
    console.log(newProducts);

Products.push(newProducts);

renderizarTabla();
}

