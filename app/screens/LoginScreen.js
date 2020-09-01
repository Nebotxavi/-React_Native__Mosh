import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppScreen from "../components/appScreen/AppScreen";
import SubmitButton from "../components/forms/SubmitButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  return (
    <AppScreen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress" // iOS only
        />

        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password" // iOS only
        />
        <SubmitButton title="Login" />
      </AppForm>
    </AppScreen>
  );
}

// FIRST VERSION

{
  /* <AppScreen style={styles.container}>
<Image style={styles.logo} source={require("../assets/logo-red.png")} />
<Formik
  initialValues={{ email: "", password: "" }}
  onSubmit={(values) => console.log(values)}
  validationSchema={validationSchema}
>
  {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
    <>
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        onBlur={() => setFieldTouched("email")}
        onChangeText={handleChange("email")}
        placeholder="Email"
        textContentType="emailAddress" // iOS only
      />
      // <AppText style={{ color: "red" }}>{errors.email}</AppText> 
      <ErrorMessage error={errors.email} visible={touched.email} />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        onChangeText={handleChange("password")}
        onBlur={() => setFieldTouched("password")}
        placeholder="Password"
        secureTextEntry
        textContentType="password" // iOS only
      />
      // <AppText style={{ color: "red" }}>{errors.password}</AppText> 
      <ErrorMessage error={errors.password} visible={touched.password} />
      <AppButton title="Login" onPress={handleSubmit} />
    </>
  )}
</Formik>
</AppScreen> */
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
