import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./notificationCardStyles";
export default function NotificationCard(props) {
  return (
    <View style={styles.mainView}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: props.image,
        }}
        imageStyle={{ borderRadius: 6 }}
      />
      <Text style={styles.date}>Monday,10 May 2021</Text>
      <Text style={styles.heading}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a
        repellat,
      </Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit a
        repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit a repellat,
      </Text>
      <Text style={styles.publisher}>Published By</Text>
    </View>
  );
}
