
import { TouchableOpacity, Text } from "react-native";
const Tus = (props) => {
  // props üst komponentten gelen veriler
  return (
    <TouchableOpacity
      style={
        {
          width: "20%",
          height: 70,
          backgroundColor: props.color,
          justifyContent: "center",
          alignItems: "center",
          margin: "1%",
        }
      }
      onPress={props.onPress}>
      <Text
        style={
          {
            fontSize: 35,
            color: '#000',
          }
        }
      >
        {props.yazi}
      </Text>
    </TouchableOpacity>
  );
}
export default Tus;