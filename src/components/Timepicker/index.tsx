import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from "react";
import dayjs, {Dayjs} from 'dayjs';
import { TextField } from "@mui/material";
import { TimepickerProps } from "../../types/@types";

const Timepicker = (props: TimepickerProps) => {
    const {label} = props;
  const [value, setValue] = useState<Dayjs | null>(
    dayjs(dayjs())
  );

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
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default Timepicker;
