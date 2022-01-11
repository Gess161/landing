import Image from "next/image";
import { Box } from "@mui/material";
import AccountMenu from "./AccountMenu";

export default function Account() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            zIndex="10"
        >
            <Box display="flex" height="24px" width="24px" mr={1}>
                <Image src="/profile.png" height="100%" width="100%" />
            </Box>
            <AccountMenu />
        </Box>
    )
}