import React, { useState } from "react";
import classNames from "classnames";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";
import { withStyles } from "@material-ui/core/styles";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = (theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: "flex",
    alignItems: "center",
  },
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

// MySnackbarContent.propTypes = {
//   classes: PropTypes.object.isRequired,
//   className: PropTypes.string,
//   message: PropTypes.node,
//   onClose: PropTypes.func,
//   variant: PropTypes.oneOf(["success", "warning", "error"]).isRequired,
// };

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = (theme) => ({
  margin: {
    margin: theme.spacing(4),
  },
});

const CustomizedSnackbars = ({ messageContent, success, error }) => {
  const [open, setOpen] = useState(true);

  // const success = useSelector((state) => state.subscription.success);
  // const error = useSelector((state) => state.subscription.error);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {success && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        //   className={classes.margin}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="success"
            message={messageContent}
          />
        </Snackbar>
      )}

      {error && (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <MySnackbarContentWrapper
            onClose={handleClose}
            variant="error"
            message={messageContent}
          />
        </Snackbar>
      )}
    </div>
  );
};

// CustomizedSnackbars.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles2)(CustomizedSnackbars);
