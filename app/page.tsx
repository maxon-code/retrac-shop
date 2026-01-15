import Image from "next/image";
import { getShopItems } from "./lib/retrac";
import "@radix-ui/themes/styles.css";
import Navigation from "./Navigation"
import {
    Theme,
    Text,
    Flex,
    Badge,
    Box,
    Grid,
    Card,
    Link,
    IconButton
} from "@radix-ui/themes";
import MobileCardsSwiper from "./Swiper";
import "./globals.css"
const rarityColorMap: Record<string, React.ComponentProps<typeof Badge>["color"]> = {
    Common: "gray",
    Uncommon: "green",
    Rare: "blue",
    Epic: "purple",
    Legendary: "yellow",
    Mythic: "crimson",
    "Frozen Series": "cyan",
    "MARVEL SERIES": "red",
    "Icon Series": "purple",
};

export default async function HomePage() {
    const items = await getShopItems();

    const grouped = items.reduce((acc: any, item) => {
        if (!acc[item.section]) acc[item.section] = [];
        acc[item.section].push(item);
        return acc;
    }, {});

    const sectionOrder = ["Weekly", "Daily"];

    const orderedSections = [
        ...sectionOrder.filter((s) => grouped[s]),
        ...Object.keys(grouped).filter((s) => !sectionOrder.includes(s)),
    ];

    return (

        <Theme appearance="dark" accentColor="yellow" radius="large">




            <Navigation />

                <Flex direction="column" gap="5" m="8" align="center">
                    <Text as="p" align="center" wrap="balance" color="gray"  size={{initial: "7", md: "6"}}>
                        This is a Retrac Shop.
                        <br/> You can see items from  <Link target="_blank" href="https://discord.com/invite/retrac" color="yellow" highContrast>Retrac</Link>
                    </Text>

                    <IconButton asChild size={{initial: "4", md: "3"}} variant="outline" color="gray" highContrast>

                        <a href="https://github.com/maxon-code/retrac-shop" target="_blank">
                            <Image src="/github.svg" alt="GitLogo" width={32} height={32}>
                            </Image>
                        </a>

                    </IconButton>
                </Flex>





                <Flex direction="column" gap="7">
                    {orderedSections.map((section) => (
                        <Box key={section} p="6">
                            <Flex align="center" justify="between" mb="3">
                                <Text size="5" weight="bold">
                                    {section}
                                </Text>
                                <Text size="2" color="gray">
                                    {grouped[section].length} items
                                </Text>
                            </Flex>
                            <MobileCardsSwiper items={grouped[section]} />
                            <div className="desktopOnly">
                            <Grid columns={{ initial: "2", md: "3", lg: "4" }} gap="4">
                                {grouped[section].map((item: any) => (
                                    <Card key={item.id} size="2">
                                        <Flex direction="column" gap="3">

                                            <Box >
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={360}
                                                    height={360}
                                                    className="p-2"
                                                />
                                            </Box>


                                            <Flex gap="2" wrap="wrap">
                                                <Badge size={{initial: "1", md: "3"}} color={rarityColorMap[item.rarity] ?? "gray"}>
                                                    {item.rarity}
                                                </Badge>

                                                <Badge size={{initial: "1", md: "3"}} variant="soft" color="gray">
                                                    {item.type}
                                                </Badge>
                                            </Flex>

                                            <Text weight="bold" size="3">
                                                {item.name}
                                            </Text>

                                            <Flex align="center" gap="1">

                                                <img
                                                    src="https://img.icons8.com/?size=100&id=86678&format=png&color=000000"
                                                    alt="price icon"
                                                    style={{ width: 16, height: 16 }}
                                                ></img>
                                                <Text size="2">{item.price}</Text>
                                            </Flex>

                                        </Flex>
                                    </Card>
                                ))}
                            </Grid>
                            </div>
                        </Box>
                    ))}
                </Flex>




        </Theme>
    );
}

