import {Flex, Text, Box} from "@radix-ui/themes";
import "../globals.css"
export default function  Navigation() {
    return (
        <Flex
        align="center"
        justify={{ initial: "center", md: "between" }}
        gap="4"
        p="4"
        mx={{ initial: "2", md: "6" }}

    >
        <Flex align="center" gap="3" className="logo-focus-in" justify={{ initial: "center", md: "start" }}>

            <img src="/simple.svg" alt="icon" width={40} height={40}/>

            <Box p="3">
                <Text
                    size={{ initial: "8", md: "6" }}
                    weight="bold"
                    align={{ initial: "center", md: "left" }}

                >
                    Retrac Shop
                </Text>
            </Box>


        </Flex>
    </Flex>
    )
}
