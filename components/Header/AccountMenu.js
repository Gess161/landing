import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/system';


export default function AccountMenu() {
  const theme = useTheme
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant='text'
        sx={{
            p: 0,
            textTransform: "none",
        }}
        color="primary"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Account
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Settings</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
      </Menu>
    </div>
  );
}

const StyledMenuItem = styled(<MenuItem />)(({theme}) => ({
    color: theme.palette.primary.main,
    background: "inherit"
}));