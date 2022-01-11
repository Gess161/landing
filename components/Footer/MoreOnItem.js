import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material";

export default function MoreOnItem(props) {
    const { item } = props;
    const theme = useTheme();
    return (
        <Box mt={4}>
            <Link href="#" underline="hover" variant="body1" color={theme.palette.primary.main}>
                {item}
            </Link>
        </Box>

    )
}