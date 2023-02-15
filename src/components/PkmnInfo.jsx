import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";

const PkmnInfo = ({ name, level, isMale, src, onClickPkmn }) => {
  return (
    <View>
      <Text>C'est un pokemon</Text>
      <Text>
        C'est un {name}, son niveau est {level}
      </Text>
      {isMale ? <Text>C'est un male</Text> : <Text>C'est une femelle</Text>}
      <TouchableOpacity onPress={() => onClickPkmn()}>
        <Text>Press Here</Text>

        <Image source={src} style={styles.imgPkmn} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imgPkmn: {
    width: 200,
    height: 200,
  },
});
export default PkmnInfo;
