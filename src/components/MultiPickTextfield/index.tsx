import { Chip, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import "./multipicktextfield.css";
import { MultipickTextfieldProps } from "../../types/@types";

const MultipickTextfield = (props: MultipickTextfieldProps) => {
  const { setData } = props;
  const [values, setValues] = useState([""]);
  const [currValue, setCurrValue] = useState("");

  const handleKeyUp = (e: any) => {
    if (e.keyCode === 13) {
      setValues((oldState) => [...oldState, e.target.value]);
      setCurrValue("");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCurrValue(e.target.value);
    setData(values);
  };

  const handleDelete = (item: string, index: number) => {
    let arr = [...values];
    arr.splice(index, 1);
    setValues(arr);
  };

  return (
    <div className="root">
        <FormControl className="formControlRoot">
          <TextField
            variant="outlined"
            label="Guests User ID"
            placeholder="Enter Guests User ID"
            value={currValue}
            onChange={handleChange}
            onKeyDown={handleKeyUp}
            size="small"
            className="textfield"
          />
          <div className="container">
            {values.map((item, index) => (
              <Chip
                size="small"
                onDelete={() => handleDelete(item, index)}
                label={item}
              />
            ))}
          </div>
        </FormControl>
    </div>
  );
};

export default MultipickTextfield;
