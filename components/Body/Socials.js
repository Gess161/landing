import { Typography } from "@mui/material";
import Image from "next/image";

export default function Socials() {
    return (
        <Box
            display="flex"
            flexDirection="row"
            transform="rotate(90deg)"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="300px"
            width="100%"
        >
            <Typography variant="body1">Follow us</Typography>
            <Box width="24px" height="24px">
                <Image src="/instagram.svg" />
            </Box>
            <Box width="24px" height="24px">
                <Image src="/twitter.svg" />
            </Box>
        </Box>
    )
}