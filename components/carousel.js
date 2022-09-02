import React, { Component } from "react";
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  Text,
  View,
} from "react-native";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;
const ITEM_HEIGHT = 200;

const cards = [
  { index: "1", title: "hello" },
  { index: "2", title: "hi" },
];

const AdvancedCardCarousel = () => (
  <View>
    <Text>HEllo</Text>
  </View>
);

export default AdvancedCardCarousel;
// export default function AdvancedCardCarousel() {
//   const scrollX = React.useRef(new Animated.Value(0)).current;

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
//       <Text>Hello</Text>
//       <ScrollView
//         horizontal={true}
//         decelerationRate={"normal"}
//         snapToInterval={ITEM_WIDTH}
//         style={{ marginTop: 40, paddingHorizontal: 0 }}
//         showsHorizontalScrollIndicator={false}
//         bounces={false}
//         disableIntervalMomentum
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={12}
//       >
//         {cards.map((item, idx) => {
//           const inputRange = [
//             (idx - 1) * ITEM_WIDTH,
//             idx * ITEM_WIDTH,
//             (idx + 1) * ITEM_WIDTH,
//           ];

//           const translate = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.85, 1, 0.85],
//           });

//           const opacity = scrollX.interpolate({
//             inputRange,
//             outputRange: [0.5, 1, 0.5],
//           });

//           return (
//             <Animated.View
//               style={{
//                 width: ITEM_WIDTH,
//                 height: ITEM_HEIGHT,
//                 marginLeft: idx === 0 ? OFFSET : undefined,
//                 marginRight: idx === cards.length - 1 ? OFFSET : undefined,
//                 opacity: opacity,
//                 transform: [{ scale: translate }],
//               }}
//             >
//               <Card>
//                 <Text key={item.index}>{item.title}</Text>
//               </Card>
//             </Animated.View>
//           );
//         })}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
