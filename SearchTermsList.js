import React from "react";
import { SectionList, View, Text } from "react-native";

const SearchTermsList = (props) => {
  const { searchTerms } = props;
  return (
    <SectionList
      sections={searchTerms}
      keyExtractor={(item, index) => item + index}
      renderSectionHeader={({ section: { title } }) => (
        <View
          style={{
            backgroundColor: "#f1f2f2",
            paddingVertical: 5,
            paddingHorizontal: 20,
          }}
        >
          <Text>{title}</Text>
        </View>
      )}
      renderItem={({ item }) => {
        return (
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#d5d8d8",
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Text>{item.text}</Text>
          </View>
        );
      }}
    />
  );
};

export default SearchTermsList;
