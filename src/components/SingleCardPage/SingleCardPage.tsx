import { Center } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import { useGetSingleRecipeQuery } from "../../services/recipesService";

const SingleCardPage: React.FC = () => {
  const { id } = useParams()
  const {
    data: card,
    isLoading,
    error: cardError,
    isError,
  } = useGetSingleRecipeQuery(String(id));

  return (
    <Center>
      {card?.recipe.label}
    </Center>
  )
}

export default SingleCardPage