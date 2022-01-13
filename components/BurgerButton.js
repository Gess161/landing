import * as React from "react"
import { Hidden, IconButton, Box, SwipeableDrawer, } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/system";
import NavItem from "./Header/Navigation/NavItem";
import Account from "./Header/Account.js"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function BurgerButton() {
    const [menuOpen, setOpen] = React.useState(false)

    const toggleDrawer = (open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }
        setOpen(!menuOpen);
    };

    return (
        <Hidden smUp>
            <StyledButton
                onClick={toggleDrawer("right", false)}
                color="primary"
            >
                <MenuIcon />
            </StyledButton>
            <StyledDrawer
                role="presentation"
                anchor="right"
                onOpen={toggleDrawer("right", false)}
                onClose={toggleDrawer("right", false)}
                open={menuOpen}
            >
                <StyledButton
                    onClick={toggleDrawer("right", false)}
                    color="primary"
                    sx={{ alignSelf: "flex-start", p: 4 }}
                >
                    <ArrowForwardIosIcon fontSize="small" />
                </StyledButton>
                <Box sx={{ p: 4 }}>
                    <NavItem item="Equipment" />
                </Box>
                <Box sx={{ p: 4 }}>
                    <NavItem item="About us" />
                </Box>
                <Box sx={{ p: 4 }}>
                    <NavItem item="Blog" />
                </Box>
                <Box sx={{ p: 4 }}>
                    <Account />
                </Box>
            </StyledDrawer>
        </Hidden>
    )
}

const StyledButton = styled(IconButton)(({ theme }) => ({
    zIndex: 10,
    width: "45px",
    height: "45px",
    padding: 2,
}))

const StyledDrawer = styled(SwipeableDrawer)(({ theme }) => ({
    right: 0,
    ".MuiPaper-root": {
        background: theme.palette.background.default,
        display: 'flex',
        alignItems: "center"
    }
}))