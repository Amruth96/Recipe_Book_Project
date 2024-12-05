import { useContext } from "react";
import UseRecipe from "../Context";
const RecipeConsumer = () =>{        // RecipeConsumer component
    const{inputText, handleDelete, handleEdit} = useContext(UseRecipe);
return(
    <ul className="cards">
        {inputText.map((task,i) => (
            <li className="listitems" key = {i}>
          {task}
          <button className="but" onClick={()=>handleDelete(i)}>Delete</button>
          <button onClick={() => handleEdit(i)}>Edit</button>
            </li>
        ))}
 
    </ul>
    )
};
 
export default RecipeConsumer;