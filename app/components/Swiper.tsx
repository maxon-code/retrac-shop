"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Image from "next/image";
import { Card, Flex, Badge, Box, Text } from "@radix-ui/themes";

import { rarityColorMap, itemTypeMap} from "@/app/lib/Badges";
export default function MobileCardsSwiper({ items }: { items: any[] }) {
    return (
        <div className="mobileOnly">
            <div className="mobileCenter">
                <Swiper
                    style={{"--swiper-pagination-bullet-inactive-color": "rgba(220, 220, 220);, 1", "--swiper-pagination-color": "#fff"} as React.CSSProperties}
                    touchRatio={1.5} slidesPerView={1.0} spaceBetween={30} loop={true} navigation={false} pagination={{clickable: true,}} effect="cards" modules={[Pagination, Navigation]} className="mySwiper">
                    {items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card size="2" style={{ height: "100%" }}>
                                <Flex direction="column" gap="3">
                                    <Box>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={400}
                                            height={400}
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
                                        <Badge size={{initial: "1", md: "3"}} variant="soft" color="gray">


                                            {itemTypeMap[item.type] && (
                                                <img src={itemTypeMap[item.type]} alt={item.type} width={20} height={20}/>
                                            )}
                                            <span>{item.type}</span>
                                        </Badge>
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
