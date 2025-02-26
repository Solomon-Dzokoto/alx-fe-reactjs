import { useNavigate } from "react-router-dom"
import { useRecipeStore } from "./recipeStore"


const DeleteRecipeButton = ({recipeId}) => {
    const navigate = useNavigate()
    const deleteRecipe = useRecipeStore((state)=>state.deleteRecipe)
    
    const onDelete = () => {
        deleteRecipe(recipeId)}
        navigate('/')
    }

    return (
        <button onClick={onDelete}>
            Delete
        </button>
    )
}

export default DeleteRecipeButton
