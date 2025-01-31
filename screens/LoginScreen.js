import axios from "axios";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/authSlice";

const API_URL = "https://laterz.api.exebyte.io/api/auth/login";

function LoginScreen() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  function handleLogin() {
    if (!password || !email) {
      return;
    }

    axios
      .post(API_URL, {
        userEmail: email,
        userPassword: password,
      })
      .then((res) => {
        dispatch(logIn(res.data.data));
      });
  }

  return (
    <View style={styles.container}>
      <Text>Login here</Text>
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
