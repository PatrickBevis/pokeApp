import React, { useState } from "react";
import { Text, View, Image, StyleSheet, FlatList, Button } from "react-native";
import PkmnInfo from "../../components/PkmnInfo";
import { PokeList } from "../../data/pokemonList";

const Home = () => {
  const [counterPokedex, setCounterPokedex] = useState(0);
  const [pokeListState, setPokeListState] = useState(PokeList);

  const getNamePkmn = (namePkmn) => {
    console.log("Mon nom est", namePkmn);
    console.log("Le pokemeon suivant est ", PokeList[counterPokedex + 1].name);
  };

  const modifyLevel = () => {
    const newArr = [...PokeList];
    pokeListState[counterPokedex].level =
      newArr[counterPokedex].level + 5;
    setPokeListState(newArr);
  };

  const onNext = () => {
    if (counterPokedex === PokeList.length - 1) {
      setCounterPokedex(0);
    } else {
      setCounterPokedex(counterPokedex + 1);
    }
  };

  const onPrevious = () => {
    if (counterPokedex === 0) {
      setCounterPokedex(PokeList.length - 1);
    } else {
      setCounterPokedex(counterPokedex - 1);
    }
  };

  return (
    <View>
    <Text style={styles.text_title}>Pokedex Application</Text>
      <PkmnInfo
        id={PokeList[counterPokedex].id}
        name={PokeList[counterPokedex].name}
        level={PokeList[counterPokedex].level}
        isMale={PokeList[counterPokedex].isMale}
        src={PokeList[counterPokedex].src}
        onClickPkmn={modifyLevel}
      />
      <Button title="Next" onPress={() => onNext()} />
      <Button title="Previous" onPress={() => onPrevious()} />
    </View>
  );
};

const styles = StyleSheet.create({
    text_title:{
        fontSize:26,
    },
  
});

export default Home;
