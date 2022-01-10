import { Box, Typography, useTheme } from "@mui/material"

export default function Tagline(props) {
    const theme = useTheme()
    const { text } = props;
    return (
        <Box
            display="flex"
            flexDirection="row"
            height="22px"
            alignItems="center"
            zIndex="10"
        >
            <Box
                display="flex"
                width="72px"
                height="2px"
                mr={4}
                backgroundColor={theme.palette.secondary.main}
            />
            <Typography variant="h6" color={theme.palette.secondary.main}> {`${text}`} </Typography>
        </Box>
    )
}