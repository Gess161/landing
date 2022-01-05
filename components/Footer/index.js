import { Box, Typography, useTheme } from "@mui/material";
import Logo from "../Logo";
import MoreOn from "./MoreOn";

export default function Footer() {
    const blog = [`About MNTN`, `Contribution & Writers`, `Write For Us`, `Contact Us`, `Privacy Policy`]
    const mntn = [`The Team`, `Jobs`, `Press`]
    const theme = useTheme()
    return (
        <Box
            display="flex"
            flexDirection="row"
        >
            <Box
                display="flex"
                flex={2}
                flexDirection={"row"}
            >
                <Box>
                    <Logo text="MNTN" />
                    <Box
                        maxWidth="300px"
                    >
                        <Typography mt={5} color={theme.palette.primary.main} variant="body1">
                            Get out there & discover your next slope, mountain & destination!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                flex={1}
                justifyContent="space-around"
            >
                <MoreOn text={"The Blog"} items={blog} />
                <MoreOn text={"MNTN"} items={mntn} />
            </Box>
        </Box>
    )
}