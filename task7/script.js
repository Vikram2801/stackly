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