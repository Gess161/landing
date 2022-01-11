import { Box, Link } from "@mui/material";
import { useTheme } from "@mui/material";

export default function NavItem(props) {
    const { item } = props;
    const theme = useTheme();
    return (
        <Box>
            <Link href="#" underline="hover" variant="body1" color={theme.palette.primary.main} sx={{ fontWeigth: 700 }}>
                {item}
            </Link>
        </Box>

    )
}