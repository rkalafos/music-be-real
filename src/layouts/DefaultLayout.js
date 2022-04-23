import React from 'react';
import {Box, Center, Stack, VStack} from "@chakra-ui/react";
import { Header } from "../components/Header";
import {Blur} from "../components/Blur";


export const DefaultLayout = ({children}) => {
    return(
        <Box position={"relative"}>
            <VStack
                w={"full"}
                h={"100%"}
                align={"center"}
                position={"fixed"}
                overflowY={"auto"}
                sx={{
                    "::-webkit-scrollbar": {
                        display: "none"
                    },
                    webkitOverflowScrolling: "touch"
                }}
                pb={'1$'}
            >
                <Header />
                <Stack as={Center} direction={'row'} w={'100%'}>
                    {children}
                </Stack>
            </VStack>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    )
};