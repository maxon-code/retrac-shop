"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import { Card, Flex, Badge, Box, Text } from "@radix-ui/themes";

const rarityColorMap: Record<string, React.ComponentProps<typeof Badge>["color"]> = {
    Common: "gray",
    Uncommon: "green",
    Rare: "blue",
    Epic: "purple",
    Legendary: "yellow",
    Mythic: "crimson",
    "Frozen Series": "cyan",
    "Marvel Series": "red",
};

export default function MobileCardsSwiper({ items }: { items: any[] }) {
    return (
        <div className="mobileOnly">
            <div className="mobileCenter">
                <Swiper
                    style={{"--swiper-pagination-bullet-inactive-color": "rgba(220, 220, 220);, 1", "--swiper-pagination-color": "#fff"}}
                    slidesPerView={1.0} spaceBetween={30} loop={true} navigation={false} pagination={{clickable: true,}} effect="cards" modules={[Pagination, Navigation]} className="mySwiper">
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card size="2" style={{ height: "100%" }}>
                                <Flex direction="column" gap="3">
                                    <Box>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={500}
                                            height={500}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                borderRadius: 12,
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Box>

                                    <Flex gap="2" wrap="wrap">
                                        <Badge color={rarityColorMap[item.rarity] ?? "gray"}>{item.rarity}</Badge>
                                        <Badge variant="soft" color="gray">{item.type}</Badge>
                                    </Flex>

                                    <Text weight="bold">{item.name}</Text>
                                    <Flex align="center" gap="1">
                                        <Text size="2">{item.price}</Text>
                                        <img
                                            src="https://img.icons8.com/?size=100&id=86678&format=png&color=000000"
                                            alt="price icon"
                                            style={{ width: 16, height: 16 }}
                                        />
                                    </Flex>

                                </Flex>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
