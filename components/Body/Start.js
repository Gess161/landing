import Heading from "../ContentContainer/Heading"
import Tagline from "../ContentContainer/Tagline"
import { Box, Button, useTheme } from "@mui/material"
import Image from "next/image"

export default function Start() {
    const theme = useTheme()
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            height="300px"
            width="60%"
            maxWidth="700px"
        >
            <Tagline text="A hiking guide" />
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "400px"
                }}
            >
                <Heading text="Be Prepared For The Mountains And Beyond!" />
            </Box>
            <Button
                variant="text"
                sx={{
                    zIndex: 10,
                    width: "120px",
                    p: 0,
                    m: 0,
                    textTransform: "none",
                    ".MuiButton-endIcon": { ml: 2 }
                }}
                color="primary"
                mr={1}
                endIcon={<Image src="/arrowdownward.png" width="16px" height="24px" />}
            > scroll down
            </Button>
        </Box>
    )
}