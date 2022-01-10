import { Box } from "@mui/material";
import Image from "next/image";
import Clouds from "./Clouds";

export default function Background() {
    return (
        <Box
            position="absolute"
            width="100%"
            height="1422px"
            z-index={-1}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(340.24deg, hsla(200, 54%, 10%, 0), hsla(200, 54%, 10%, 0.4) 108.93%);",
                    position: "absolute",
                    zIndex: 1
                }}
            />
            <Clouds />
            <Box
                height="21vw"
                width="100%"
                position="absolute"
                top="74vw"
                sx={{ background: "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);" }}
                zIndex={1}
            >
            </Box>
            <Box
                width="100%"
                height="100%"
                position="absolute"
                top="18.2vw"

            >
                <Image
                    layout="responsive"
                    width="100%"
                    height="70%"
                    src="/mnt.png"
                    priority
                />
            </Box>
            <Box
                top="33.85vw"
                width="100%"
                height="100%"
                position="absolute"
            >
                <Image
                    layout="responsive"
                    width="140%"
                    height="80%"
                    src="/hill.png"
                    priority
                />
            </Box>
        </Box>
    )
}