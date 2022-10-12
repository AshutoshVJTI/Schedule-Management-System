import { Chip, FormControl, TextField } from "@mui/material";
import React, {  useState } from "react";
import "./multipicktextfield.css";

const MultipickTextfield = () => {
  const [values, setValues] = useState(["test"]);
  const [currValue, setCurrValue] = useState("");

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      setValues((oldState) => [...oldState, e.target.value]);
      setCurrValue("");
    }
  };

  const handleChange = (e: any) => {
    setCurrValue(e.target.value);
  };

  const handleDelete = (item: any, index: any) => {
    let arr = [...values];
    arr.splice(index, 1);
    setValues(arr);
  };

  return (
    <div className="App">
      <FormControl className="formControlRoot">
        <div className="container">
          {values.map((item, index) => (
            <Chip
              size="small"
              onDelete={() => handleDelete(item, index)}
              label={item}
            />
          ))}
        </div>
        <TextField
          variant="outlined"
          label="Guests User ID"
          placeholder="Enter Guests User ID"
          value={currValue}
          onChange={handleChange}
          onKeyDown={handleKeyUp}
        />
      </FormControl>
    </div>
  );
};

export default MultipickTextfield;
