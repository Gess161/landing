import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/system';
import Image from "next/image"
import { styled } from '@mui/material';

export default function MenuListComposition() {
    const theme = useTheme()
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Button
                    sx={{ p: 0, alignItems: "center", zIndex: 10, alignItems: "center", textTransform: 'none', fontWeight: 700 }}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    startIcon={<Image src="/profile.png" height="24px" width="24px"/>}
                >
                    Account
                </Button>
                <StyledPopper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                zIndex: 10,
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper sx={{ zIndex: 10,boxShadow: "none" }}
                            >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <StyledMenuItem onClick={handleClose}>Profile</StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>Settings</StyledMenuItem>
                                        <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </StyledPopper>
            </div>
        </Stack>
    );
}

const StyledPopper = styled(Popper)(({theme}) => ({
    zIndex: 10
}));

const StyledMenuItem = styled(MenuItem)(({theme}) => ({
        fontSize: "14px",
        color: theme.palette.primary.main,
        zIndex: 10
}));