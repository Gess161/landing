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

        >
            <Tagline text="A hiking guide" />
            <Heading text="Be Prepared For The Mountains And Beyond!" />
            <Button
                variant="text"
                sx={{
                    zIndex: 2,
                    width: "120px",
                    p: 0,
                    m: 0,
                    textTransform: "none",
                    ".MuiButton-endIcon": { ml: 2}
                }}
                color="primary"
                mr={1}
                endIcon={<Image src="/arrowdownward.png" width="16px" height="24px" />}
            > scroll down
            </Button>
        </Box>
    )
}