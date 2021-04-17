import React from "react";
import { TextInput, View } from "react-native";
import useSearchTerms from "./useSearchTerms";
import SearchTermsList from "./SearchTermsList";

const SearchPage = () => {
  const [searchTerms, changeText] = useSearchTerms();

  return (
    <View style={{ marginTop: 100 }}>
      <TextInput
        placeholder="Enter search term..."
        autoCorrect={true}
        selectTextOnFocus={false}
        onChangeText={changeText}
        style={{
          backgroundColor: "#d8d8d8",
          width: "100%",
          height: 60,
          padding: 20,
        }}
      />
      <SearchTermsList searchTerms={searchTerms} />
    </View>
  );
};

export default SearchPage;
