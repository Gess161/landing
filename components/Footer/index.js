import { Box, Typography, useTheme } from "@mui/material";
import Logo from "../Logo";
import MoreOn from "./MoreOn";

export default function Footer() {
    const blog = [`About MNTN`, `Contribution & Writers`, `Write For Us`, `Contact Us`, `Privacy Policy`]
    const mntn = [`The Team`, `Jobs`, `Press`]
    const theme = useTheme()
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "76.2%",
                pb: "80px",
                m: "0 auto",
                zIndex: 10,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flex: 2,
                    flexDirection: "row",
                    "@media(max-width:1180px)": {
                        flex: 1
                    }
                }}
            >
                <Box>
                    <Logo text="MNTN" />
                    <Box
                        maxWidth="300px"
                    >
                        <Typography display={"flex"} mt={5} color={theme.palette.primary.main} variant="body1">
                            Get out there & discover your next slope, mountain & destination!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                display="flex"
                flex={1}
                justifyContent="space-between"
            >
                <MoreOn text={"The Blog"} items={blog} />
                <MoreOn text={"MNTN"} items={mntn} />
            </Box>
        </Box>
    )
}