import React from "react";
import { View, Text, ScrollView } from "react-native";
import NotificationCard from "./notificationsCard";
import styles from "./notificationViewStyles";
export default function NotificationView() {
  return (
    <ScrollView stickyHeaderIndices={[1]}>
      <View style={styles.mainView}>
        <Text style={styles.headerText}>Hot Updates</Text>
        <NotificationCard image="https://images.radio.com/aiu-media/ap-a27870793e074e0b9b29d949a2ea9875_0a1aza3c0-Behind_the_Wheel_93358.jpg" />
        <NotificationCard image="https://image.cnbcfm.com/api/v1/image/107084341-1657006773986-gettyimages-1236639618-RUSSIA_GAS_STORAGE.jpeg?v=1662016938&w=1920&h=1080" />

        <NotificationCard image="https://cpsc-d8-media-prod.s3.amazonaws.com/s3fs-public/Picture1_39.jpg?VersionId=qZh_I3Vn9hr_k4PEpMydFCfIXZG2xPS4" />
        <NotificationCard image="https://cpsc-d8-media-prod.s3.amazonaws.com/s3fs-public/Picture1_39.jpg?VersionId=qZh_I3Vn9hr_k4PEpMydFCfIXZG2xPS4" />
      </View>
    </ScrollView>
  );
}
