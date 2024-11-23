import styles from "@/components/treinos";
import { Ionicons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default function TelaTreinos() {
    return (
        <View style={[styles.container, { padding: 10 }]}>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 20, justifyContent: "space-between" }}>
                <Text>Objetivo</Text>
                <Icon name="dumbbell" size={100} color="#007bff" />
                <View>
                    <Text>Data de Inicio</Text>
                    <Text>15/10/2024</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer}>
                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>

                <View style={styles.card}>
                    <Text style={{ fontSize: 50, color: "#007bff", fontWeight: "bold" }}>A</Text>
                    <View>
                        <Text style={{ fontSize: 13, color: "#007bff", fontWeight: "bold" }}>Grupos musculares</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Perna</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 40, color: "#007bff", fontWeight: "bold" }}>8</Text>
                        <Text style={{ color: "#979797", fontWeight: "500" }}>Exercícios</Text>
                    </View>
                    <Ionicons name="search" size={30} color="#b1aeae" />
                </View>
            </ScrollView>

        </View>
    )
}