import { View } from "react-native";
import { style } from "./style";
import AuthHeader from "../../../components/AuthHeader/Index";
import Input from "../../../components/Input/Index";

const Signup = () => {
  return (
    <View style={style.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="Nikhil Nambam" />
        <Input label="E-mail" placeholder="nambamnikhil8@gmail.com" />
          <Input isPassword={true}label="Password" placeholder="hello" />
    </View>
  );
};

export default Signup;