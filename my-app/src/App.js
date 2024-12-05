//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
        //  Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
         // href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
       // >
         // Learn React
       // </a>
      //</header>
    //</div>
  //);
//}

//export default App;








// import React, { useState, useEffect } from 'react';
// import ProductList from './Product-Catalog/ProductList';
// import Filters from './Product-Catalog/Filters';
// import SortOptions from './Product-Catalog/SortOptions';
// import './Product-Catalog/App.css';


// function App() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [priceRange, setPriceRange] = useState([0, 1000]);
//   const [sortOption, setSortOption] = useState('name');

//   useEffect(() => {
//     fetch('/products.json')  
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data); // Set the products state with the fetched data
//         setFilteredProducts(data);  // Initially, show all products
//       });
//   }, []);

//   // Filtering and sorting logic
//   useEffect(() => {
//     let updatedProducts = [...products];  // Create a copy of the original product list

//     // Filter by category
//     if (selectedCategory) {
//       updatedProducts = updatedProducts.filter(
//         (product) => product.category === selectedCategory
//       );
//     }

//     // Filter by price range
//     updatedProducts = updatedProducts.filter(
//       (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
//     );

//     // Sorting by price or name
//     if (sortOption === 'price') {
//       updatedProducts.sort((a, b) => a.price - b.price);
//     } else {
//       updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
//     }

//     setFilteredProducts(updatedProducts); // Update the filtered product list
//   }, [selectedCategory, priceRange, sortOption, products]);  // This effect runs when these state variables change

//   // Handlers for filters and sorting
//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);  // Update the selected category
//   };

//   const handlePriceRangeChange = (range) => {
//     setPriceRange(range);   // Update the price range
//   };

//   const handleSortChange = (option) => {
//     setSortOption(option);  // Update the selected sort option
//   };

//   return (
//     <div className="App">
//       <h1>Product Catalog</h1>
//       <Filters
//         selectedCategory={selectedCategory}
//         onCategoryChange={handleCategoryChange}
//         onPriceRangeChange={handlePriceRangeChange}
//       />
//       <SortOptions onSortChange={handleSortChange} />
//       <ProductList products={filteredProducts} />
//     </div>
//   );
// }

// export default App;











// import React from 'react';
// import { RecipeProvider } from './RecipeBookApp/RecipeContext';
// import RecipeList from './RecipeBookApp/RecipeList';
// import AddRecipe from './RecipeBookApp/AddRecipe';


// function App() {
//   return (
//     <RecipeProvider>
//       <div className="App">
//         <h1>Recipe Book</h1>
//         <AddRecipe />
//         <RecipeList />
//       </div>
//     </RecipeProvider>
//   );
// }

// export default App;














// import RecipeProvider from "./RecipeBook/RecipeProvider";

 
// import React from 'react'
 
//  function App() {
//   return (
//     <div>
//       <RecipeProvider/>
//     </div>
//   )
// }
// export default App;








import Counter from "./Components/Counter";

 
import React from 'react'
 
 function App() {
  return (
    <div>
      <Counter/>
    </div>
  )
}
export default App;