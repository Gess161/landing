import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";

export default function Logo(props) {
    const { text } = props;
    const theme = useTheme()
    return (
        <Box
            zIndex="10"
            display="flex"
            alignItems="center"
        >
            <Typography color={theme.palette.primary.main} fontFamily="Playfair-Display" variant="h3">
                {text}
            </Typography>
        </Box>
    )
}