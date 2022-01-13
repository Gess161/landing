import { Box } from "@mui/material";
import Image from "next/image";
import Clouds from "./Clouds";

export default function Background() {
    return (
        <Box //background container
            sx={{ 
                position: "absolute",
                width: "100%",
                height: "100%",
                minHeight: "1440px",
                "@media(min-width: 2100px)": {
                    height: "200%"
                },
            }}
        >
            <Box //container shadow
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
            <Box //container bottom shadow
                sx={{ 
                    zIndex: 1,
                    height: "200px",
                    width: "100%",
                    position: "absolute",
                    bottom: '-5px',
                    background: "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%);",
                    ...mediaShadow
                }}
            />
            <Box //background images
                sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: '0',
                    left: '0',
                    overflow: "hidden",
                }}
            >
                <Box //mountains
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        top: "18.2vw",
                        ...mediaBg
                    }}

                >
                    <Image layout="fill" src="/mnt.png" priority />
                </Box>
                <Box  //hill
                    sx={{
                        width: "100%",
                        height: "80%",
                        position: "absolute",
                        top: "33.85vw",
                        ...mediaBg
                    }}
                >
                    <Image layout="fill" src="/hill.png" priority />
                </Box>
            </Box>
        </Box>
    )
}


const mediaBg = {
    "@media(max-width: 900px)": {
        height: "50%"
    },
    "@media(max-width: 600px)": {
        height: "35%"
    }
}

const mediaShadow = {
    "@media(max-width: 900px)": {
        bottom: "400px"
    },
    "@media(max-width: 600px)": {
        bottom: "730px"
    }
}