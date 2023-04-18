import React, { useState } from "react";

const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    return {
      value,
      setValue,
      reset: () => setValue(""),
      bind: {
        value,
        onChange: (event: any) => {
          setValue(event.target.value);
        }
      }
    };
  };
  
export default useInput;
