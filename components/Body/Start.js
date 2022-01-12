import Heading from "../ContentContainer/Heading"
import Tagline from "../ContentContainer/Tagline"
import { Box, Button } from "@mui/material"
import Image from "next/image"

export default function Start() {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            height="300px"
            width="60%"
            maxWidth="700px"
            sx={{ ...startMedia }}
        >
            <Tagline text="A hiking guide" />
            <Box display="flex" width="100%" height="400px" sx={{...headingMedia}} >
                <Heading text="Be Prepared For The Mountains And Beyond!" />
            </Box>
            <Button
                variant="text"
                sx={buttonStyles}
                color="primary"
                mr={1}
                endIcon={<Image src="/arrowdownward.png" width="16px" height="24px" />}
            >
                scroll down
            </Button>
        </Box>
    )
}

const buttonStyles = {
    zIndex: 10,
    width: "120px",
    p: 0,
    m: 0,
    textTransform: "none",
    ".MuiButton-endIcon": { ml: 2 }
}

const startMedia = {
    "@media(max-width: 600px)": {
        width: "80%",
        height: "700px",
    }
}

const headingMedia = {
    "@media(max-width: 600px)": {
        mb: 14
    }
}