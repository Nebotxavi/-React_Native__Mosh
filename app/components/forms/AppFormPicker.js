import React from "react";

import { useFormikContext } from "formik";

import AppPicker from "../appPicker/AppPicker";
import ErrorMessage from "./ErrorMessage";

const AppFormPicker = ({ items, name, numberOfColumns = 1, PickerItemComponent, placeholder, width }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        numberOfColumns={numberOfColumns}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
