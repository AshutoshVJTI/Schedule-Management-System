import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import { SnackbarWrapperProps } from "../../types/@types";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const SnackbarWrapper = (props: SnackbarWrapperProps) => {
  const { error } = props;
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    if (error.length > 0) setOpen(true);
  }, [error.length]);
  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackbarWrapper;
