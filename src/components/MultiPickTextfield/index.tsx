import { Autocomplete, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { MultipickTextfieldProps } from "../../types/@types";

const MultipickTextfield = (props: MultipickTextfieldProps) => {
  const { setData, options } = props;
  const [values, setValues] = useState([] as string[]);

  const handleChange = (
    e: React.SyntheticEvent<Element, Event>,
    newVal: string[]
  ) => {
    setValues(newVal);
  };

  useEffect(() => {
    setData(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <div>
      <Autocomplete
        multiple
        disablePortal
        options={options}
        onChange={handleChange}
        size="small"
        renderInput={(params) => (
          <TextField
            variant="outlined"
            label="Guests User ID"
            placeholder="Enter Guests User ID"
            className="textfield"
            sx={{
              "& fieldset": { border: "none" },
              "& label.Mui-focused": {
                color: "white",
              },
            }}
            {...params}
          />
        )}
      />
    </div>
  );
};

export default MultipickTextfield;
