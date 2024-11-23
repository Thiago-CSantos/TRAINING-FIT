
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    scrollContainer: {
        flex: 1,
        padding: 10
      },
    card: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        borderRadius: 5,
        backgroundColor: "#fff",
        elevation: 5
    }
});

export default styles;