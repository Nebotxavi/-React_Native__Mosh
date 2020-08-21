import React from "react";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik";

import AppScreen from "../components/appScreen/AppScreen";
import AppTextInput from "../components/appTextInput/AppTextInput";
import AppButton from "../components/appButton/AppButton";

function LoginScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Formik initialValues={{ email: "", password: "" }} onSubmit={(values) => console.log(values)}>
        {({ handleChange, handleSubmit }) => (
          <>
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress" // iOS only
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password" // iOS only
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
