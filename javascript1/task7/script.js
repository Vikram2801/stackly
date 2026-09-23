//task1

let api = "https://fakestoreapi.com/products"

fetch(api).then((response)=>{
    if(!response.ok){
       throw new Error("Failed to fetch products");
    }
    return response.json();
    
})
.then((data)=>{
    console.log("All Products");
    console.log(data);

    
    console.log("/n  product details");

    data.forEach((product) => {
         console.log("Title:", product.title);
      console.log("Price: $", product.price);
      console.log("Category:", product.category);

        
    });

    const productTitleAndPrice = data.map((product)=>{
        return{
            title:product.title,
            price: product.price

        }
    })
    console.log("Title and Price" ,productTitleAndPrice);

    const lessPriceProduct = data.filter((product)=>{
           return product.price >100;
    });
     console.log('lessPriceProduct', lessPriceProduct);

    const electronicProd = data.find((product)=>{
        
        return product.category === "electronics"
    })
    console.log('electronicProd', electronicProd);

    const totalPrice = data.reduce((total,product)=>{
       
        return total + product.price;
    },0);
     console.log('totalPrice', totalPrice);

    const highestPriceToLow = [...data].sort((a,b)=>{
       
        return b.price -a.price

    })
    // highestPriceToLow.forEach((product)=>{
       
    //   return{
    //        Title:product.title,
    //        Price:product.price
    //   }
        
        
        
        
    // })
     console.log('highestPriceToLow', highestPriceToLow)
  })
  .catch((error)=>{
    console.log("Api Error",error);
    
  })
  .finally(()=>{
    console.log("api finally successfully completed");
    
  })

  

//   Task 2 — Product Category Dashboard

// Function to calculate category count
function countCategory(products, categoryName) {
  return products.filter((product) => {
    return product.category === categoryName;
  }).length;
}

// Function to calculate average price
function calculateAverage(products) {
  const total = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return total / products.length;
}

fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  })
  .then((products) => {

    // map() - Create price array
    const prices = products.map((product) => {
      return product.price;
    });

    // filter() - Category products
    const electronics = products.filter((product) => {
      return product.category === "electronics";
    });

    const jewelery = products.filter((product) => {
      return product.category === "jewelery";
    });

    const mensClothing = products.filter((product) => {
      return product.category === "men's clothing";
    });

    const womensClothing = products.filter((product) => {
      return product.category === "women's clothing";
    });

    // sort() - Highest to lowest
    const sortedProducts = [...products].sort((a, b) => {
      return b.price - a.price;
    });

    // Highest price
    const highestPrice = sortedProducts[0].price;

    // Lowest price
    const lowestPrice = sortedProducts[sortedProducts.length - 1].price;

    // Average price
    const averagePrice = calculateAverage(products);

    // Display Dashboard
    console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${products.length}

Electronics: ${electronics.length}
Jewelery: ${jewelery.length}
Men's Clothing: ${mensClothing.length}
Women's Clothing: ${womensClothing.length}

Highest Price: $${highestPrice}
Lowest Price: $${lowestPrice}
Average Price: $${averagePrice.toFixed(2)}
    `);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Dashboard loading completed!");
  });

// Task 3 — User & Post API

const usersAPI = "https://jsonplaceholder.typicode.com/users";
const postsAPI = "https://jsonplaceholder.typicode.com/posts";

// Function to display user names
function displayUserNames(users) {
  console.log("===== USER NAMES =====");

  users.forEach((user) => {
    console.log(user.name);
  });
}

// Function to display name and email
function displayUserDetails(users) {
  console.log("\n===== USER NAME + EMAIL =====");

  users.forEach((user) => {
    console.log(`${user.name} - ${user.email}`);
  });
}

fetch(usersAPI)
  .then((response) => {
    return response.json();
  })
  .then((users) => {

    // 1 & 2 Display users
    displayUserNames(users);

    // 3 Display name + email
    displayUserDetails(users);

    // 4 Find user with ID 5
    const userFive = users.find((user) => {
      return user.id === 5;
    });

    console.log("\n===== USER ID 5 =====");
    console.log(userFive);


    // 5 Filter users from a city
    const cityName = "South Christy";

    const usersFromCity = users.filter((user) => {
      return user.address.city === cityName;
    });

    console.log(`\n===== USERS FROM ${cityName} =====`);
    console.log(usersFromCity);
  })
  .catch((error) => {
    console.error("User API Error:", error.message);
  });


// Fetch Posts
fetch(postsAPI)
  .then((response) => {
    return response.json();
  })
  .then((posts) => {

    // 6 & 7 Posts written by user ID 1
    const userOnePosts = posts.filter((post) => {
      return post.userId === 1;
    });

    console.log("\n===== POSTS BY USER ID 1 =====");

    userOnePosts.forEach((post) => {
      console.log(post.title);
    });


    // 8 Count posts
    console.log(
      `\nUser ID 1 created ${userOnePosts.length} posts`
    );


    // 9 First post with title > 50 characters
    const longTitlePost = posts.find((post) => {
      return post.title.length > 50;
    });

    console.log("\n===== FIRST POST TITLE ABOVE 50 CHARACTERS =====");
    console.log(longTitlePost);

  })
  .catch((error) => {
    console.error("Posts API Error:", error.message);
  });

  //Task 4 — API + Search


// Function to search products
function searchProducts(products, category, maxPrice) {

  const result = products.filter((product) => {

    return (
      product.category.toLowerCase() === category.toLowerCase() &&
      product.price <= maxPrice
    );

  });

  return result;
}


// Ask user
const category = prompt("Enter product category:");

const maxPrice = Number(
  prompt("Enter maximum price:")
);


fetch(api)
  .then((response) => {

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  })
  .then((products) => {

    const filteredProducts = searchProducts(
      products,
      category,
      maxPrice
    );

    console.log("===== SEARCH RESULTS =====");

    if (filteredProducts.length === 0) {
      console.log("No products found");
    } else {

      filteredProducts.forEach((product) => {

        console.log(`
Title: ${product.title}
Category: ${product.category}
Price: $${product.price}
-------------------------
        `);

      });

    }

  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Search completed!");
  });

//   Task 5 — API Shopping Cart


// Function to calculate discount
function calculateDiscount(total) {

  if (total > 200) {
    return 20;
  } 
  else if (total > 100) {
    return 10;
  } 
  else {
    return 0;
  }

}


fetch(api)
  .then((response) => {

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  })
  .then((products) => {

    const cart = [];


    // Display available products
    console.log("===== AVAILABLE PRODUCTS =====");

    products.forEach((product) => {
      console.log(
        `ID: ${product.id} | ${product.title} | $${product.price}`
      );
    });


    // Ask for product IDs
    const input = prompt(
      "Enter product IDs separated by commas (Example: 1,5,10)"
    );


    // Convert input to array
    const selectedIds = input.split(",").map((id) => {
      return Number(id.trim());
    });


    // Add selected products to cart
    selectedIds.forEach((id) => {

      const selectedProduct = products.find((product) => {
        return product.id === id;
      });

      if (selectedProduct) {
        cart.push(selectedProduct);
      }

    });


    // Calculate total
    const total = cart.reduce((sum, product) => {
      return sum + product.price;
    }, 0);


    // Calculate discount
    const discountPercent = calculateDiscount(total);

    const discountAmount =
      (total * discountPercent) / 100;

    const finalAmount =
      total - discountAmount;


    // Display Cart
    console.log("\n===== CART =====");

    cart.forEach((product, index) => {

      console.log(`
Product ${index + 1}: ${product.title}
Price: $${product.price}
      `);

    });


    console.log(`Total: $${total.toFixed(2)}`);
    console.log(`Discount: ${discountPercent}%`);
    console.log(
      `Final Amount: $${finalAmount.toFixed(2)}`
    );

  })
  .catch((error) => {
    console.error("Error:", error.message);
  })
  .finally(() => {
    console.log("Shopping completed!");
  });


//   Task 6 — FakeStore Product Report

const apiLink = "https://fakestoreapi.com/products";


fetch(apiLink)

  // Check response and convert JSON
  .then((response) => {

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  })


  // Process Products
  .then((products) => {

    console.log("========== PRODUCT REPORT ==========\n");


    // Total Products
    console.log(
      `Total Products: ${products.length}`
    );


    // 1. Display all products using forEach()
    console.log("\n===== ALL PRODUCTS =====");

    products.forEach((product) => {

      console.log(
        `${product.id}. ${product.title} - $${product.price}`
      );

    });


    // 2. Create product names using map()
    const productNames = products.map((product) => {
      return product.title;
    });


    console.log("\n===== PRODUCT NAMES =====");

    productNames.forEach((name) => {
      console.log(`- ${name}`);
    });


    // 3. Filter expensive products
    const expensiveProducts = products.filter((product) => {
      return product.price > 100;
    });


    console.log("\n===== PRODUCTS ABOVE $100 =====");

    expensiveProducts.forEach((product) => {
      console.log(
        `${product.title} - $${product.price}`
      );
    });


    // 4. Find first electronics product
    const electronicsProduct = products.find((product) => {
      return product.category === "electronics";
    });


    console.log("\n===== ELECTRONICS PRODUCT =====");

    console.log(
      `${electronicsProduct.title} - $${electronicsProduct.price}`
    );


    // 5. Calculate total price using reduce()
    const totalPrice = products.reduce((total, product) => {
      return total + product.price;
    }, 0);


    console.log("\n===== TOTAL PRODUCT VALUE =====");

    console.log(
      `$${totalPrice.toFixed(2)}`
    );


    // 6. some()
    const productAbove500 = products.some((product) => {
      return product.price > 500;
    });


    console.log("\n===== ANY PRODUCT ABOVE $500 =====");

    console.log(productAbove500);


    // 7. every()
    const allProductsAbove1 = products.every((product) => {
      return product.price > 1;
    });


    console.log("\n===== ALL PRODUCTS ABOVE $1 =====");

    console.log(allProductsAbove1);


    // 8. Sort highest to lowest
    const sortedProducts = [...products].sort((a, b) => {
      return b.price - a.price;
    });


    console.log("\n===== HIGHEST → LOWEST =====");

    sortedProducts.forEach((product) => {

      console.log(
        `${product.title} - $${product.price}`
      );

    });

  })


  // Error handling
  .catch((error) => {

    console.error(
      "API Error:",
      error.message
    );

  })


  // Always executes
  .finally(() => {

    console.log(
      "\n========== REPORT COMPLETED =========="
    );

  });