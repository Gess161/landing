import { Box } from "@mui/material";
import Image from "next/image"
import Content from "./Content";

const ContentCard = (props) => {
    const { image, tagline, heading, text, count, direction } = props;
    console.log(direction)
    return (
        <Box
            height="720px"
            width="100%"
            display="flex"
            mb="200px"
            flexDirection={direction | "row"}
        >
            <Box
                display="flex"
                flex={2}
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
                flex={1}

            >
                <Image src={image} height="100%" width="565px" />
            </Box>
        </Box>
    )
}

export default ContentCard;