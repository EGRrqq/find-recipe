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

type CardItemProps = {
    item: IHit
}

const CardItem: React.FC<CardItemProps> = ({ item }) => {
    const { colorMode } = useColorMode();

    return (
        <Card
            bg={colorMode === 'light' ? 'yellow.300' : 'green.300'}
            maxW='sm'
        >
            <CardBody>
                <Stack mt='6' spacing='3'>
                    <Image src={item.recipe.image} alt='recipe image' borderRadius='lg' />
                    <Heading size='md'>{item.recipe.label}</Heading>
                </Stack>
            </CardBody>

            <Divider />

            <CardFooter>
                <Text>footer</Text>
            </CardFooter>
        </Card>
    );
};

export default CardItem;
