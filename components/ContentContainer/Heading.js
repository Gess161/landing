import { Box, Typography } from "@mui/material"
import { useTheme } from "@mui/system"

export default function Heading(props) {
    const { text } = props;
    const theme = useTheme()
    return (
        <Box
            display="flex"
            padding="27px 0"
            maxWidth="700px"
            zIndex="10"
            sx={{
                "@media(max-width: 600px)":{
                    pt: 4,
                    height: "400px"
                }
            }}
        >
            <Typography color={theme.palette.primary.main} variant="h2">{`${text}`}</Typography>
        </Box>
    )
}