// import React, { useState } from "react";
// import ShoppingList from "./ShoppingList";
// import itemData from "../data/items";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   function onDarkModeClick() {
//     setIsDarkMode((isDarkMode) => !isDarkMode);
//   }

//   return (
//     <div className={"App " + (isDarkMode ? "dark" : "light")}>
//       <header>
//         <h2>Shopster</h2>
//         <button onClick={onDarkModeClick}>
//           {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//       </header>
//       <ShoppingList items={itemData} />
//     </div>
//   );
// }

// export default App;

// src/App.js
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList
        items={itemData}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
