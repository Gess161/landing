import { Box } from "@mui/material";
import Image from "next/image"
import Content from "./Content";

const ContentCard = (props) => {
    const { image, tagline, heading, text, count, direction } = props;

    return (
        <Box
            width="80%"
            display="flex"
            justifySelf="center"
            minHeight="720px"
            justifyContent={direction === "row" ? "flex-start" : "flex-end"}
            m="0 auto"
            mb="200px"
            flexDirection={direction}
            zIndex={10}
            sx={{
                "@media(max-width: 1180px)": {
                    flexDirection: "column",
                    height: "1400px",
                    mb: "50px"
                }
            }}
        >
            <Box
                display="flex"
                width="61%"
                zIndex={10}
                justifyContent="center"
                sx={mediaText}
                pl={direction === "row" ? 0 : 8}
            >
                <Content
                    tagline={tagline}
                    heading={heading}
                    text={text}
                    count={"0" + count}
                />
            </Box>
            <Box
                display="flex"
                width="39%"
                zIndex={10}
                sx={mediaImage}
            >
                <Image src={image} height="100%" width="600px" />
            </Box>
        </Box>
    )
}

export default ContentCard;

const mediaImage = {
    "@media(max-width: 1180px)": {
        width: "100%",
        height: "50%",
        justifyContent: "center"
    },
}

const mediaText = {
    "@media(max-width: 1180px)": {
        width: "100%",
        height: "50%"
    },
}