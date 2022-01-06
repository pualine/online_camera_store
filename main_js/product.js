/******************************
 * Fetch Products
 *************************************/
const getProduts = async () => {
  try {
    const result = await fetch("./data_/products.json");
    const data = await result.json();
    const products = data.products;
    return products;
  } catch (error) {
    console.log(error);
  }
};

// Load Products
window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProduts();
  displayProducts(products);
});

const categorySection = document.querySelector(".center-category");
// Display Products
const displayProducts = (items) => {
  let displayItems = items.map(
    (product) => ` <div class="product category-products">
  <div class="product-header category_header">
    <img src=${product.image} alt="">
  </div>
  <div class="product-footer">
    <h3>${product.title}</h3>
    <div class="star-rating">
      <svg>
        <use xlink:href="images_/sprite.svg#icon-star-full"></use>
      </svg>
      <svg>
        <use xlink:href="images_/sprite.svg#icon-star-full"></use>
      </svg>
      <svg>
        <use xlink:href="images_/sprite.svg#icon-star-full"></use>
      </svg>
      <svg>
        <use xlink:href="images_/sprite.svg#icon-star-full"></use>
      </svg>
      <svg>
        <use xlink:href="images_/sprite.svg#icon-star-full"></use>
      </svg>
    </div>
    <div class="product-price">
      <h4>GHS${product.price}</h4>
      <a href="#"><button type="button" class="product-bttn">
        Add To Cart
      </button></a>
    </div>
    <ul>
      <a href="#">
        <svg>
          <use xlink:href="images_/sprite.svg#icon-eye"></use>
        </svg>
      </a>
      <a href="#">
        <svg>
          <use xlink:href="images_/sprite.svg#icon-heart-o"></use>
        </svg>
      </a>
      <a href="#">
        <svg>
          <use xlink:href="images_/sprite.svg#icon-loop2"></use>
        </svg>
      </a>
    </ul>
  </div>
</div>`
  );
  displayItems = displayItems.join("");
  if (categorySection) {
    categorySection.innerHTML = displayItems;
  }
};

// Button Filter

const filterButtn = document.querySelectorAll(".filter-buttons");
const categoryContainer = document.getElementById("category");

if (categoryContainer) {
  categoryContainer.addEventListener("click", async (event) => {
    const target = event.target.closest(".section-heading");
    if (!target) return;

    const id = target.dataset.id;
    const products = await getProduts();

    if (id) {
      // remove active button
      Array.from(filterButtn).forEach((buttn) => {
        buttn.classList.remove("active");
      });
      target.classList.add("active");

      // Loads Products
      let categoryMenu = products.filter((product) => {
        if (product.category === id) {
          return product;
        }
      });
      if (id === "All Products") {
        displayProducts(products);
      } else {
        displayProducts(categoryMenu);
      }
    }
  });
}
