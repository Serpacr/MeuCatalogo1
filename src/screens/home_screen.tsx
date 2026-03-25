import { ProductCard } from "../components/product_card";
import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList, Product } from "../routes/app_routes";

type NavProp = NativeStackNavigationProp<RootStackParamList, "Tabs">;

export default function HomeScreen() {
    const navigation = useNavigation<NavProp>();

    const products: Product[] = [
        {
            id: 1,
            name: "God of War Ragnarök",
            price: 249.99,
            picture: require("../../assets/gow2.jpg"),
            description: "Kratos e Atreus enfrentam o destino em uma jornada épica pelos reinos nórdicos.",
        },
        {
            id: 2,
            name: "GTA V",
            price: 149.99,
            picture: require("../../assets/GTAV.jpg"),
            description: "Explore Los Santos em um mundo aberto cheio de ação, crimes e liberdade.",
        },
        {
            id: 3,
            name: "The Witcher 3",
            price: 99.99,
            picture: require("../../assets/TW3.jpg"),
            description: "Assuma o papel de Geralt de Rívia em um RPG vasto e cheio de escolhas.",
        },
    ];

    return (
        <View>
            <ScrollView>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        picture={product.picture}
                        onPress={() => navigation.navigate("Details", { product })}
                    />
                ))}
            </ScrollView>
        </View>
    );
}