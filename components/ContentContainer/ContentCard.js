import * as React from "react"
import { Box } from "@mui/material";
import Image from "next/image"
import Content from "./Content";

const ContentCard = (props) => {
    const { image, tagline, heading, text, count, direction, forwardedRef } = props;

    return (
        <Box // main container
            sx={{
                width: "72.8%",
                display: "flex",
                justifySelf: "center",
                minHeight: "720px",
                justifyContent: direction === "row" ? "flex-start" : "flex-end",
                m: "0 auto",
                mb: "200px",
                flexDirection: direction,
                zIndex: 10,
                ...mediaCard
            }}
            ref={forwardedRef}
        >   
            <Box // text container
                display="flex"
                width="61%"
                zIndex={10}
                justifyContent="center"
                pl={direction === "row" ? 0 : 8}
                sx={mediaText}
            >
                <Content
                    tagline={tagline}
                    heading={heading}
                    text={text}
                    count={"0" + count}
                />
            </Box>
            <Box // image container
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
    "@media(max-width: 600px)": {
        height: "400px",
    }
}

const mediaText = {
    "@media(max-width: 1180px)": {
        width: "100%",
        height: "50%",
        p: 0,
    },
}

const mediaCard = {
    "@media(max-width: 1180px)": {
        flexDirection: "column",
        height: "1300px",
        mb: "50px"
    },
    "@media(max-width: 600px)": {
        justifyContent: "space-around"
    }
}