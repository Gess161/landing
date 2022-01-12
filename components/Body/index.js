import Start from "./Start"
import { Box } from "@mui/material"
import ContentCard from "../ContentContainer/ContentCard"
import Socials from "./Socials"
import Progress from "./Progress/"
import { useEffect, useState } from "react"
import BurgerButton from "../BurgerButton"

export default function Body() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
            height="100%"
        >
            <Progress />
            <Socials />
            <Box
                width="100%"
                height="100%"
                mt="12.5%"
                display="flex"
                justifyContent="center"
            >
                <Start />
            </Box>
            <Box
                mt={"32.3vw"}
                sx={{
                    "@media(max-width:900px)": {
                        mt: 35
                    },
                    "@media(max-width:600px)": {
                        mt: 10
                    },
                }}
            >
                <ContentCard image={"/01.png"} text="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? " tagline="get started" heading="What level of hiker are you?" count={1} />
                <ContentCard direction="row-reverse" image={"/02.png"} text="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet." tagline="hiking essentials" heading="Picking the right Hiking Gear!" count={2} />
                <ContentCard image={"/03.png"} text="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.." tagline="where you go is the key" heading={`Understand Your Map & Timing`} count={3} />
            </Box>
        </Box>
    )
}