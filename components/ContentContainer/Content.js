import { Box, Typography, useTheme, Button } from "@mui/material"
import Image from "next/image";

const Content = (props) => {
    const { tagline, heading, text, count } = props;
    const theme = useTheme()
    return (
        <Box
            display="flex"
            flexDirection="column"
            position="relative"
            p={17}
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
            <Box
                display="flex"
                flexDirection="row"
                height="22px"
                alignItems="center"
            >
                <Box
                    display="flex"
                    width="72px"
                    height="2px"
                    mr={4}
                    backgroundColor={theme.palette.secondary.main}
                />
                <Typography variant="h6" color={theme.palette.secondary.main}> {tagline} </Typography>
            </Box>
            <Box
                display="flex"
                padding="27px 0"
                maxWidth="500px"
            >
                <Typography color={theme.palette.primary.main} variant="h2">{heading}</Typography>
            </Box>
            <Box
                display="flex"
                pb="27px"
                maxWidth="500px"
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
                        "&:hover": {
                            backgroundColor: theme.palette.background.default
                        }
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
