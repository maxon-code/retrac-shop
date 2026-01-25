import { Badge } from "@radix-ui/themes";
export const rarityColorMap: Record<string, React.ComponentProps<typeof Badge>["color"]> = {
    Common: "gray",
    Uncommon: "green",
    Rare: "blue",
    Epic: "purple",
    Legendary: "yellow",
    Mythic: "crimson",
    "Frozen Series": "cyan",
    "Marvel Series": "red",
};
export const itemTypeMap: Record<string, string> = {
    Outfit: "/icons/outfit.png",
    Pickaxe: "/icons/pickaxe.png",
    Emote: "/icons/emote.png",
    "Loading Screen": "/icons/loading-screen.png",
    Glider: "/icons/glider.png",
}