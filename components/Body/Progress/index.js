import ProgressBar from "./ProgressBar";
import { Box, Typography } from "@mui/material";

export default function Progress(props) {
    return (
        <Box
            sx={{
                width: '100%',
                position: "fixed",
                right: "-4.5%",
                top: "55%",
                zIndex: 10,
                ...mediaProgressBar
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "300px",
                    position: "absolute",
                    right: "170px",
                    justifyContent: "space-around",
                    top: "-145px",
                    alignItems: "flex-end",

                }}
            >
                <Typography color="primary" variant="body1">Start</Typography>
                <Typography color="primary" variant="body1">01</Typography>
                <Typography color="primary" variant="body1">02</Typography>
                <Typography color="primary" variant="body1">03</Typography>
            </Box>
            <Box
                sx={{
                    width: '300px',
                    position: "absolute",
                    right: "0",
                    zIndex: 10,
                    transform: "rotate(90deg)",
                }}
            >
                <ProgressBar />
            </Box >
        </Box>
    )
}

const mediaProgressBar = {
    "@media(max-width: 900px)": {
        display: "none"
    },
    "@media(max-width: 1180px)": {
        right: "-6.5%"
    },
    "@media(min-width: 2100px)": {
        right: 0
    }
}