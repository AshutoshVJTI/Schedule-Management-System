import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TextField } from "@mui/material";
import { TimepickerProps } from "../../types/@types";

const Timepicker = (props: TimepickerProps) => {
  const { label, setTime } = props;
  const [value, setValue] = useState<Dayjs | null>(dayjs(dayjs()));

  useEffect(() => {
    setTime(dayjs(value).format("HH:mm"));
  }, [setTime, value]);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label={label}
        value={value}
        onChange={handleChange}
        minutesStep={1}
        renderInput={(params) => (
          <TextField
            required
            className="textfield"
            sx={{
              "& fieldset": { border: "none" },
              "& label.Mui-focused": {
                color: "white",
              },
            }}
            size="small"
            {...params}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default Timepicker;
