import styles from "@/components";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import * as Progress from "react-native-progress";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function TelaHome(){
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: "https://via.placeholder.com/100" }} // Substitua pela URL da foto
        />
        <View style={{alignItems:"center"}}>
          <Text style={styles.userName}>Thiago Carretero</Text>
          <Text style={styles.pendingInvoices}>Faturas pendentes: R$ 0,00</Text>
        </View>
        <Icon style={{marginHorizontal:5}} name="account-check-outline" size={30} color="#007bff" />
      </View>

      {/* Training Progress Section */}
      <TouchableOpacity  style={styles.trainingSection} onPress={()=>router.push("/treinos")}>
        <Text style={styles.trainingTitle}>Sessões realizadas</Text>
        <Text style={styles.trainingProgressText}>6/60</Text>
        <Progress.Bar progress={6 / 60} width={null} color="#007bff" borderRadius={1} />
        <TouchableOpacity style={styles.nextTrainingButton} >
          <Text style={styles.nextTrainingText}>Próximo treino: E</Text>
        </TouchableOpacity>
      </TouchableOpacity >
     
    </View>
  );
};



