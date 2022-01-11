import { Box, Typography, useTheme, Button } from "@mui/material"
import Image from "next/image";
import Heading from "./Heading";
import Tagline from "./Tagline";

const Content = (props) => {
    const { tagline, heading, text, count } = props;
    const theme = useTheme()
    return (
        <Box
            display="flex"
            flexDirection="column"
            position="relative"
            justifyContent={"center"}
            p={15}
            sx={{
                "@media(max-width: 850px)": {
                    padding: 0
                }
            }}
        >
            <Box
                fontSize="240px"
                fontWeight={700}
                position="absolute"
                top="0"
                left="0"
                color={theme.palette.primary.main}
                sx={{ opacity: 0.1 }}
            >
                {count}
            </Box>
            <Tagline text={tagline} />
            <Box
                maxWidth="620px"
            >
                <Heading text={heading} />
            </Box>

            <Box
                display="flex"
                pb="27px"
                maxWidth="620px"
            >
                <Typography lineHeight="32px" color={theme.palette.primary.main} variant="body1">{text}</Typography>
            </Box>
            <Box
                display="flex"
                mr="4px"
            >
                <Button
                    variant="text"
                    sx={{
                        p: 0,
                        textTransform: "none",
                        ".MuiButton-endIcon": { ml: 2 },
                        "&:hover": { backgroundColor: theme.palette.background.default }
                    }}
                    color="secondary"
                    mr={1}
                    endIcon={<Image src="/arrow.svg" width="24px" height="16px" />}
                > read more
                </Button>
            </Box>
        </Box>
    )
}

export default Content
