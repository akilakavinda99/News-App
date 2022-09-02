import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import ChipCard from "./chipCard";

export default function ChipCardView() {
  return (
    <ScrollView>
      <ChipCard image="https://media.npr.org/assets/img/2022/09/01/screen-shot-2022-09-01-at-1.41.57-pm_wide-a783b0182b3e2c7c550343c665e454cf44bef4a8.jpg?s=1400" />
      <ChipCard image="https://scx2.b-cdn.net/gfx/news/hires/2022/nissan-eager-to-levera.jpg" />
      <ChipCard image="https://images.barrons.com/im-577741/social" />
      <ChipCard image="https://images.moneycontrol.com/static-mcnews/2020/10/tradeexportimportchina-770x433.jpeg" />

      <ChipCard image="https://static.tweaktown.com/news/8/8/88268_01_neil-degrasse-tyson-explains-big-numbers-like-elon-musks-net-worth_full.jpg" />
      <ChipCard image="https://bsmedia.business-standard.com/_media/bs/img/article/2021-03/22/full/1616402274-9851.jpg" />
    </ScrollView>
  );
}
