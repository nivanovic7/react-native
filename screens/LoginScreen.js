import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/authSlice";
import { useLoginMutation } from "../redux/authApi";

function LoginScreen() {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const [password, setPassword] = useState("Password1!");
  const [email, setEmail] = useState("test@yahoo.com");

  async function handleLogin() {
    if (!password || !email) {
      return;
    }
    const res = await login({ userEmail: email, userPassword: password });
    dispatch(logIn(res.data.data));
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
      />
      <TextInput
        style={styles.textInput}
        placeholder="password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={handleLogin} title="Login" />
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    padding: 16,
    gap: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 8,
  },
});
