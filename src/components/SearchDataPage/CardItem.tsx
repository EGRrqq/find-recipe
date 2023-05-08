import { IHit } from "../../types/recipes";
import { 
    Image, 
    useColorMode, 
    Text, 
    Card, 
    CardBody, 
    Stack, 
    Divider, 
    CardFooter, 
    Heading 
} from "@chakra-ui/react";
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from "react-router-dom";

type CardItemProps = {
    item: IHit
}

const CardItem: React.FC<CardItemProps> = ({ item }) => {
    const { colorMode } = useColorMode();

    return (
        <AnimatePresence>
            <Card
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                bg={colorMode === 'light' ? 'yellow.300' : 'green.300'}
                maxW='sm'
            >
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Image src={item.recipe.image} alt='recipe image' borderRadius='lg' />
                        <Link to={`/recipes/${item.recipe.uri.split("#")[1]}`}>
                            <Heading size='md'>{item.recipe.label}</Heading>
                        </Link>
                    </Stack>
                </CardBody>

                <Divider />

                <CardFooter>
                    <Text>card footer</Text>
                </CardFooter>
            </Card>
        </AnimatePresence>
    );
};

export default CardItem;
