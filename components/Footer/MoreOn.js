import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";
import MoreOnItem from "./MoreOnItem";

export default function MoreOn(props) {
    const { text, items } = props;
    const theme = useTheme()
    return (
        <Box>
            <Box>
                <Typography color={theme.palette.secondary.main}>More on {text}</Typography>
            </Box>
            <Box>
                {items.map(item => {
                    return (<MoreOnItem item={item} />)
                })}
            </Box>
        </Box>
    )
}