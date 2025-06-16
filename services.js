const products = [
  {
     id: 1,
     title: "Mathematics Textbook", 
     price: 7500, 
      discount: 10000,
     image: "math.webp" 
    },
  { 
    id: 2, 
    title: "Science Workbook", 
    price: 4000, 
    discount: 5000,
    image: "science.webp" 
  },
  { 
    id: 3, 
    title: " App Subscription", 
    price: 10000, 
    discount: 12000,
    image: "suscription.webp" 
  },
  { 
    id: 4, 
    title: "School Supplies Kit", 
    price: 11500,
    discount: 0,
     image: "supplies.webp" 
    },
  { 
    id: 5, 
    title: "School Bag", 
    price: 12000, 
    discount: 15000,
    image: "bag.webp" 
  },
  { 
    id: 6, 
    title: "Stationary Mock Up", 
    price: 15000, 
    discount: 20000,
    image: "station.webp" 
  },
  { 
    id: 7, 
    title: "Water Bottle", 
    price: 5000, 
    discount: 0,
    image: "water.webp" 
  },
  { 
    id: 8, 
    title: "School Merchandise", 
    price: 25000, 
    discount: 30000,
    image: "march.webp" 
  },
  { 
    id: 9, 
    title: "Pen", 
    price: 2550,
    discount: 3000,
    image:"pen.webp" 
  },
  { 
    id: 10, 
    title: "Mathematical Set", 
    price: 8550, 
    discount: 0,
    image: "mathset.webp" 
  },
  { 
    id: 11, 
    title: "Food Flask", 
    price: 6000, 
    discount: 8000,
    image: "flasks.webp" 
  },
  { 
    id: 12, 
    title: "Lunch Box", 
    price: 17000, 
    discount: 20000,
    image: "lunch box.webp" 
  },
  { 
    id: 13, 
    title: "Marker", 
    price: 3000, 
    discount: 5000,
    image: "marker.webp" 
  },
   { 
    id: 14, 
    title: "Educational Games", 
    price: 23300, 
    discount: 30000,
    image: "game.webp" 
  },
   { 
    id: 15, 
    title: " Printed Wall Charts", 
    price: 10500, 
    discount: 15000,
    image: "wall.webp" 
  },
   { 
    id: 16, 
    title: " Notebook", 
    price: 1700, 
    discount: 2500,
    image: "note.webp" 
  },
  { 
    id: 17, 
    title: "English Textbook", 
    price: 14000, 
    discount: 9000,
    image: "eng.webp" 
  },
   { 
    id: 18, 
    title: "Dictionary", 
    price: 16000, 
    discount:19500,
    image: "dictionary.webp" 
  }
];

const productsContainer = document.getElementById('products');
const searchInput = document.getElementById("searchInput");

// Render products on the page
function renderProducts(productList) {
  productsContainer.innerHTML = ""; // Clear previous products
  productList.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p style="font-weight:bolder; font-size:20px;">&#8358;${product.price}</p>
      <p style="text-decoration: line-through; color:red; font-weight:bold; ">&#8358;${product.discount}</p>
      <button data-id="${product.id}">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
}

// Initial render
renderProducts(products);

// Add to cart functionality
productsContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const productId = parseInt(event.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.title} has been added to your cart.`);
  }
});

// Search functionality
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query)
  );
  renderProducts(filtered);
});
