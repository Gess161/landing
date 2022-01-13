import { Box } from "@mui/material";
import Image from "next/image";

export default function Clouds() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                position: "relative",
                top: "0",
                left: "0",
                backgroundColor: "rgb(152, 191, 199);",
                ...mediaBg
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    background: "linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);",
                    width: "100%",
                    height: "100%",
                    zIndex: 10
                }}
            >
            </Box>
            <Box sx={{ ...cloud, animation: "animateStart 200s linear" }}>
                <Image src={'/clouds/cloud1.png'} layout="fill" priority />
            </Box>
            <Box sx={{ ...cloud, animation: "animate 120s linear infinite" }}>
                <Image src={'/clouds/cloud1.png'} layout="fill" />
            </Box>
            <Box sx={{ ...cloud, animation: "animate 140s linear infinite" }} >
                <Image src={'/clouds/cloud2.png'} layout="fill" />
            </Box>
            <Box sx={{ ...cloud, animation: "animate 200s linear infinite" }}>
                <Image src={'/clouds/cloud3.png'} layout="fill" />
            </Box>
            <Box sx={{ ...cloud, animation: "animate 280s linear infinite" }}>
                <Image src={'/clouds/cloud4.png'} layout="fill" />
            </Box>
            <Box sx={{ ...cloud, animation: "animate 350s linear infinite" }}>
                <Image src={'/clouds/cloud5.png'} layout="fill" />
            </Box>
        </Box>
    )
}

const cloud = {
    top: "-24%",
    left: "0",
    width: "100%",
    height: "80%",
    position: "absolute",
}
const mediaBg = {
    "@media(max-width: 900px)": {
        height: "50%"
    },
    "@media(max-width: 600px)": {
        height: "35%"
    }
}