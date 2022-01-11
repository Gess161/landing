import { Box } from "@mui/material";
import Image from "next/image";

export default function Clouds() {
    return (
        <Box
            display="flex"
            width="100%"
            height="100%"
            overflow="hidden"
            position="relative"
            top="0"
            left="0"
            sx={{
                backgroundColor: "rgb(152, 191, 199);",
            }}
        >
            <Box
                position="absolute"
                width="100%"
                height="100%"
                sx={{ background: "linear-gradient(330.24deg, rgba(11, 29, 38, 0) 31.06%, #0B1D26 108.93%);" }}
                zIndex={10}
            >
            </Box>
            <Box
                top="-26%"
                left="0"
                position="absolute"
                width="100%"
                height="90%"
                sx={{
                    animation: "animatemid 120s linear infinite"
                }}
            >
                <Image src={'/clouds/cloud1.png'} layout="fill" />
            </Box>
            <Box
                top="-19%"
                left="0"
                position="absolute"
                width="100%"
                height="90%"
                sx={{
                    animation: "animate 140s linear infinite"
                }}
            >
                <Image src={'/clouds/cloud2.png'} layout="fill" />
            </Box>
            <Box
                sx={{
                    animation: "animate 200s linear infinite"
                }}
                top="-19%"
                left="0"
                width="100%"
                height="90%"
                position="absolute"
            >
                <Image src={'/clouds/cloud3.png'} layout="fill" />
            </Box>
            <Box
                sx={{
                    animation: "animatemid 280s linear infinite"
                }}
                width="100%"
                height="90%"
                position="absolute"
                top="-26%"
                left="0"
            >
                <Image src={'/clouds/cloud4.png'}  layout="fill" />
            </Box>
            <Box
                top="-26%"
                left="0"
                width="100%"
                height="90%"
                position="absolute"
                sx={{
                    animation: "animate 350s linear infinite"
                }}
            >
                <Image src={'/clouds/cloud5.png'} layout="fill" />
            </Box>
        </Box>
    )
}