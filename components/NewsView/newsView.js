import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Button, Chip } from "react-native-paper";
import styles from "./newsViewStyles";
export default function NewsView() {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          style={{ width: 390, height: 400, zIndex: 1 }}
          resizeMode="cover"
          source={{
            uri: "https://www.gizmodo.com.au/wp-content/uploads/sites/2/2022/09/02/flinders-autonomous-bus.png?quality=80&resize=1280,720",
          }}
        >
          <View style={styles.box}>
            <Text>Sunday, 9 May 2021</Text>
            <Text styles={styles.header1}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              vitae doloribus nam magni minus consectetur,
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          magnam aspernatur sapiente qui accusantium illo non delectus, eveniet
          mollitia accusamus, tempora a, porro inventore nisi. Nesciunt
          accusantium itaque eveniet blanditiis. Quod beatae labore provident,
          officia consectetur commodi, amet iste ipsam delectus at obcaecati est
          atque in maxime similique perspiciatis! Unde eligendi ipsa facere
          reiciendis numquam culpa. Quam recusandae doloribus placeat? Eum vero
          atque repellendus eveniet. Sequi dolores commodi labore! Blanditiis
          facere exercitationem nemo molestiae totam fugit nesciunt nisi rerum
          amet sunt quod voluptate quasi, nobis possimus optio hic similique
          vitae! Earum autem, nesciunt maiores quas accusantium tempore
          aspernatur error iste accusamus. Libero veniam quia ex doloribus odio
          exercitationem odit tempora quidem repellat? Eligendi incidunt in
          voluptatibus quod voluptas doloremque neque! Ratione quos consequuntur
          natus vero laboriosam ullam reiciendis, earum voluptatem asperiores
          aut, id velit repellendus officia minus possimus iure dolores. Tenetur
          perspiciatis magnam eius harum, quos animi deleniti exercitationem
          enim. Perferendis eveniet quam nemo illo quo veritatis, ducimus optio
          cumque voluptas ipsa debitis dolores magni ut molestias quod
          repudiandae dolor non rem laboriosam repellat hic repellendus quasi.
          Quo, quidem et! Atque nesciunt ipsum ut dolorum inventore totam itaque
          tenetur, fugiat, officiis porro eos incidunt consectetur cum magnam
          aperiam. Laudantium repudiandae iure iusto ipsa quasi temporibus
          soluta consectetur quod facere nam! Asperiores aliquam possimus nobis
          eum tenetur exercitationem. Fugiat, ad incidunt! Similique optio
          exercitationem ut incidunt architecto natus voluptatem dicta earum
          animi doloribus quo quas, repellendus at illum excepturi, quia
          tenetur. Cumque nesciunt odio ut sit beatae consectetur rerum dolores
          eligendi, enim est quo provident ea cum vel error possimus sequi illo
          voluptatem repellat aperiam earum, quam optio quod numquam! Labore.
          Beatae aut porro esse repellendus accusamus minima culpa ducimus
          expedita dolorem iste, facilis ipsa sit excepturi ipsum at autem iure
          aspernatur est dignissimos doloribus consectetur ex libero veritatis
          pariatur! Nobis.
        </Text>
      </View>
    </ScrollView>
  );
}
