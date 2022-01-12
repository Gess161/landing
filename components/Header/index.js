import { Box } from "@mui/material";
import BurgerButton from "../BurgerButton";
import Logo from "../Logo";
import Account from "./Account";
import Navigation from "./Navigation";

export default function Header() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            width="91.5%"
            m="0 auto"
            pt="2%"
            justifyContent="space-between"
            zIndex="10"
            alignItems="center"
        >
            <Logo text="MNTN" />
            <Navigation />
            <Box
                sx={{
                    "@media(max-width:600px)":{
                        display: "none"
                    }
                }}
            >
                <Account />
            </Box>
            <BurgerButton />
        </Box>
    )
}