import { Box } from "@mui/material";
import Image from "next/image";
import Clouds from "./Clouds";

export default function Background() {
    return (
        <Box
            position="absolute"
            width="100%"
            height="100%"
            minHeight="1440px"
            z-index={-1}
            sx={{
                "@media(max-width:1180px)": {
                    minHeight:"1000px"
                }
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(340.24deg, hsla(200, 54%, 10%, 0), hsla(200, 54%, 10%, 0.1) 108.93%);",
                    position: "absolute",
                    zIndex: 1
                }}
            />
            <Clouds />
            <Box
                height="200px"
                width="100%"
                position="absolute"
                bottom='-5px'
                sx={{ background: "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);" }}
                zIndex={1}
            />
            <Box 
                position="absolute"
                width="100%"
                height="100%"
                top='0'
                left='0'
                overflow="hidden"
            >
                <Box
                    width="100%"
                    height="100%"
                    position="absolute"
                    top="18.2vw"
                >
                    <Image
                        layout="fill"
                        src="/mnt.png"
                        priority
                    />
                </Box>
                <Box
                    width="100%"
                    height="80%"
                    position="absolute"
                    top="33.85vw"
                >
                    <Image
                        layout="fill"
                        src="/hill.png"
                        priority
                    />
                </Box>
            </Box>
        </Box>
    )
}