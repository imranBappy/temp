import MuiTextFiled from "@mui/material/TextField";

const TextField = ({
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  fullWidth = true,
  style = {},
  ...props
}) => {
  return (
    <MuiTextFiled
      label={label}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      fullWidth
      sx={{
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "primary.main",
          },
          "&:hover fieldset": {
            borderColor: "primary.main",
          },
          "&.Mui-focused fieldset": {
            borderColor: "primary.main",
          },
        },
        mb: 2,
        ...style,
      }}
      {...props}
    />
  );
};

export default TextField;
