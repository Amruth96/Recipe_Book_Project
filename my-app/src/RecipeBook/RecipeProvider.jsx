import { useState } from "react";
import UseRecipe from "../Context";
import RecipeConsumer from "./RecipeConsumer";
import './Recipe.css'; 
 
function RecipeProvider() {
    const [input, setInput] = useState("");   // Default input is an empty string
    const [inputText, setInputText] = useState([]);   // Default list is an empty array
 
      // Function to handle changes in the recipe input field
    const handleTodoChange = (event) => {
        setInput(event.target.value);  // Update the input state with the new value
    };
 
 
    const handleTodoSubmit = () => {
        if (input.trim() !== "") {   // Check if the input is not empty
            setInputText([...inputText, input]);  // Add the new recipe to the list
            setInput("");   // Clear the input field after submitting the recipe
        }
    };
    const handleDelete = (i) => {
        const updatedTasks = [...inputText];   // Create a copy of the current list
        updatedTasks.splice(i, 1);  // Remove the recipe at index `i`
        setInputText(updatedTasks);  // Update the list state with the new list
    };
 
    const handleEdit = (i) => {
        const newText = prompt("Edit your recipe:", inputText[i]);
         // If the user entered a valid (non-empty) new recipe name
        if (newText && newText.trim() !== "") {   
            const updatedTasks = [...inputText]; // Create a copy of the current list
            updatedTasks[i] = newText;  // Replace the old recipe at index
            setInputText(updatedTasks);  // Update the list state with the modified list
        }
 
    };
 
    return (
        <div className="card">
            <h1>Recipe Book</h1>
            <div className="cards">
                <input
                    type="text"
                    value={input}
                    placeholder="Enter your recipe here.."
                    onChange={handleTodoChange} />
 
                <button onClick={handleTodoSubmit}>Add Recipe</button>
            </div>
            <UseRecipe.Provider value={{ inputText, handleDelete, handleEdit }}>
                <RecipeConsumer />
            </UseRecipe.Provider>
        </div>
 
    );
}
export default RecipeProvider;