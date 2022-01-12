import { IconButton, Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Socials() {
    return (
        <Box
            sx={{
                position: "fixed",
                left: "-3%",
                top: "55%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                maxWidth: "300px",
                width: "100%",
                zIndex: 10,
                transform: "rotate(90deg)",
                "@media(max-width: 900px)": {
                    display: "none"
                },
                "@media(min-width: 2100px)": {
                    left: 0
                }
            }}
        >
            <Typography color="primary" variant="body1">Follow us</Typography>

            <IconButton color="primary" aria-label="instagram">
                <Image src="/instagram.svg" width="24px" height="24px" />
            </IconButton>
            <IconButton color="primary" aria-label="twitter">
                <Image src="/twitter.svg" width="24px" height="24px" />
            </IconButton>
        </Box>
    )
}