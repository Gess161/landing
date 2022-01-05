import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export default function MoreOnItem(props) {
    const { item } = props;
    const theme = useTheme();
    return (
        <Box
            mt={4}
        >
            <Typography variant="body1" color={theme.palette.primary.main}>
                {item}
            </Typography>
        </Box>

    )
}