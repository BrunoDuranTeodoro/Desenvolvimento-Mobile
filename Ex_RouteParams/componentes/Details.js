import React from "react";
import { View, Text, Button, StatusBar } from "react-native";
import styles from "./Styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList>;

export default function Settings({ route }: Props){

    const { title } = route.params;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            {}
            <Text>{title}</Text>
        </View>
    );
}