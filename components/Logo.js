import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";

export default function Logo(props) {
    const { text } = props;
    const theme = useTheme()
    return (
        <Box>
            <Typography color={theme.palette.primary.main}  fontFamily="Playfair-Display" fontSize="32px">
                {text}
            </Typography>
        </Box>
    )
}