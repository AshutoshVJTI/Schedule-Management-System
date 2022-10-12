import React, { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatepickerProps } from "../../types/@types";

const DatePicker = (props: DatepickerProps) => {
  const { setDate } = props;
  const [value, setValue] = useState<Dayjs | null>(dayjs(dayjs()));

  useEffect(() => {
    setDate(dayjs(value).format("YYYY-MM-DD"));
  }, [setDate, value])

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
        label="Date"
        inputFormat="DD/MM/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField className="textfield" size="small" {...params} />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
