import { useEffect, useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [hasAtLeastOneField, setHasAtLeastOneField] = useState(false);

  useEffect(() => {
    let changeValue = false;
    for (const value of Object.values(values)) 
      if (value !== null && value !== "") {
        changeValue = true;
        break;
      }
    }

    changeValue === true
      ? setHasAtLeastOneField(true)
      : setHasAtLeastOneField(false);
  }, [values]);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value
    });
  };

  return [values, handleInputChange, hasAtLeastOneField, reset];
};

