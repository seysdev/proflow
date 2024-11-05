import { View, TouchableOpacity, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export function ButtonTab({ state, descriptors, navigation }) {
  console.log("{ state, descriptors, navigation }", {
    state,
    descriptors,
    navigation,
  });

  const icons = {
    index: (props) => (
      <Feather name="home" size={24} color="black" {...props} />
    ),
    search: (props) => (
      <Feather name="search" size={24} color="black" {...props} />
    ),
    favorites: (props) => (
      <Feather name="heart" size={24} color="black" {...props} />
    ),
    cart: (props) => (
      <Feather name="shopping-bag" size={24} color="black" {...props} />
    ),
    profile: (props) => (
      <Feather name="user" size={24} color="black" {...props} />
    ),
  };
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        console.log("route.name", route.name);

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            style={styles.tabbarItem}
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icons[route.name]({ color: isFocused ? "#000" : "#767676" })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingBottom: 40,
    paddingTop: 20,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
});
