import React from "react";

import { useFormikContext } from "formik";

import AppTextInput from "../appTextInput/AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        // Other props includes:
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        // placeholder="Email"
        // textContentType="emailAddress" // iOS only
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
