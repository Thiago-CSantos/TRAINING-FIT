import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#fff",
      elevation: 5,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 10,
    },
    userName: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
    },
    pendingInvoices: {
      fontSize: 14,
      color: "#666",
    },
    qrCodeButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: 15,
      margin: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 5,
    },
    qrCodeText: {
      fontSize: 16,
      color: "#333",
    },
    discountCard: {
      margin: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 5,
      overflow: "hidden",
    },
    discountImage: {
      width: "100%",
      height: 150,
    },
    discountText: {
      textAlign: "center",
      padding: 10,
      fontSize: 16,
      fontWeight: "bold",
      color: "#007bff",
    },
    trainingSection: {
      margin: 10,
      padding: 15,
      backgroundColor: "#fff",
      borderRadius: 8,
      elevation: 5,
    },
    trainingTitle: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#333",
    },
    trainingProgressText: {
      fontSize: 14,
      color: "#666",
      marginVertical: 5,
    },
    nextTrainingButton: {
      marginTop: 10,
      padding: 10,
      backgroundColor: "#007bff",
      borderRadius: 8,
      alignItems: "center",
    },
    nextTrainingText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    bottomNavigation: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      padding: 10,
      backgroundColor: "#fff",
      elevation: 5,
    },
    navText: {
      fontSize: 12,
      color: "#007bff",
      marginTop: 5,
    },
  });

  export default styles;