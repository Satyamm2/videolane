import { Container, VStack, Heading, Input, Button, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Signup(){
    return(
        <>
        <Container maxW={"container.xl"} h={"120vh"} p={"16"}>
            <form>
                <VStack alignItems={"stretch"} spacing={"8"} w={["full", "96"]} m={"auto"} my={"16"}>
                    <Heading>VIDEO LANE</Heading>
                    <Avatar alignSelf={"center"} boxSize={"32"} />

                    <Input placeholder={"Name"} type={"text"} required focusBorderColor={"blue.500"} />
                    <Input placeholder={"Email"} type={"email"} required focusBorderColor={"blue.500"} />
                    <Input placeholder={"Password"} type={"password"} required focusBorderColor={"blue.500"} />

                    <Button colorScheme={"blue"} type={"submit"}>Sign Up</Button>

                    <Text textAlign={"right"}>
                        Already Signed Up?{" "} 
                        <Button variant={"link"} colorScheme={"blue"}>
                            <Link to={"/login"}>Log In</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
        </>
    );
}

export default Signup;