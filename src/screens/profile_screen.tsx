import { View, Text, StyleSheet, Image } from "react-native";

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
            source={require("../../assets/usuario.png")}
            style={styles.avatar}
            />

            <Text style={styles.name}>Caio Serpa</Text>
            <Text style={styles.email}>serpacr@outlook.com</Text>

            <View style={styles.card}>
            <Text style={styles.cardTitle}>Informações</Text>
            <Text style={styles.cardText}>Pedidos realizados: 5</Text>
            <Text style={styles.cardText}>Favoritos: 3</Text>
            <Text style={styles.cardText}>Membro desde: 2019</Text>
            </View>

            <View style={styles.card}>
            <Text style={styles.cardTitle}>Endereço principal</Text>
            <Text style={styles.cardText}>Rua Chapolin Colorado, 000</Text>
            <Text style={styles.cardText}>Acre - AC</Text>
            <Text style={styles.cardText}>CEP 51515-151</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: "#f7f7fb",
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 55,
        marginTop: 24,
        marginBottom: 16,
    },
    name: {
        fontSize: 22,
        fontWeight: "700",
        color: "#1e1e1e",
    },
    email: {
        fontSize: 14,
        color: "#666",
        marginTop: 4,
        marginBottom: 24,
    },
    card: {
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: 8,
        color: "#333",
    },
    cardText: {
        fontSize: 14,
        color: "#555",
        marginBottom: 4,
    },
});