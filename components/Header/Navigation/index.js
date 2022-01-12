import NavItem from "./NavItem";
import { Box } from "@mui/material";

export default function Navigation() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            width="100%"
            maxWidth="300px"
            justifyContent="space-between"
            zIndex="10"
            sx={{
                "@media(max-width: 600px)":{
                    display: "none"
                }
            }}
        >
            <NavItem item="Equipment" />
            <NavItem item="About us" />
            <NavItem item="Blog" />
        </Box>
    )
}