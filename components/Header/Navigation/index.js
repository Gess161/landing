import NavItem from "./NavItem";
import { Box } from "@mui/material";

export default function Navigation() {
    return (
        <Box

            sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                width:"100%",
                maxWidth:"300px",
                justifyContent:"space-between",
                zIndex:"10",
                ...mediaNavigation
            }}
        >
            <NavItem item="Equipment" />
            <NavItem item="About us" />
            <NavItem item="Blog" />
        </Box>
    )
}

const mediaNavigation = {
    "@media(max-width: 600px)":{
        display: "none"
    },
    "@media(min-width: 2100px)":{
        maxWidth: "600px"
    }
}