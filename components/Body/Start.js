import Heading from "../ContentContainer/Heading"
import Tagline from "../ContentContainer/Tagline"
import { Box, Button } from "@mui/material"
import Image from "next/image"

export default function Start(props) {
    const { scrollTo } = props;
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "300px",
                width: "60%",
                maxWidth: "700px",
                ...startMedia
            }}
        >
            <Tagline text="A hiking guide" />
            <Box display="flex" width="100%" height="400px" >
                <Heading text="Be Prepared For The Mountains And Beyond!" />
            </Box>
            <Button
                color="primary"
                variant="text"
                endIcon={<Image src="/arrowdownward.png" width="16px" height="24px" />}
                mr={1}
                sx={buttonStyles}
                onClick={scrollTo}
            >
                scroll down
            </Button>
        </Box>
    )
}

const buttonStyles = {
    zIndex: 10,
    width: "200px",
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
