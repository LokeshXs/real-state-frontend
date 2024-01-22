import { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';

// *****************************************************

const TextFieldComponent = ({ id, name, label, type, error, helperText, value, onChange, onBlur, disabled, isRequired, isPassword, ...props }) => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      id={id}
      type={isPassword ? showPassword ? 'text' : 'password' : type}
      name={name}
      error={error}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      label={label}
      helperText={helperText}
      variant="outlined"
      disabled={disabled}
      
      {...props}
      required={isRequired}
      InputProps={{
        endAdornment: (
          isPassword ? <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment> : ''
        )
      }}

    />
  )
}

export default TextFieldComponent;