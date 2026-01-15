export type ShopItem = {
    id: string;
    name: string;
    description: string;
    type: string;
    rarity: string;
    image: string;
    price: number;
    section: string;
};
type FortniteCosmetic = {
    id: string;
    images?: {
        icon?: string;
        smallIcon?: string;
        featured?: string;
    };
}
async function getFortniteImagesMap(): Promise<Record<string, FortniteCosmetic>> {
    const res = await fetch("https://fortnite-api.com/v2/cosmetics/br", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch Fortnite cosmetics");
    }

    const data = await res.json();

    const map: Record<string, FortniteCosmetic> = {};
    for (const item of data.data) {
        map[item.id] = item;
    }

    return map;
}

export async function getShopItems(): Promise<ShopItem[]> {
    const [catalogREs, shopRes, fortniteMap] = await Promise.all([
        fetch("https://retrac.site/retrac/data", { cache: "no-store" }),
        fetch("https://retrac.site/shop/today", { cache: "no-store" }),
        getFortniteImagesMap(),
    ]);

    if (!catalogREs.ok || !shopRes.ok) {
        throw new Error("Failed to fetch Retrac data.");
    }

    const catalogData = await catalogREs.json();
    const shopData: any = await shopRes.json();

    const cosmetics = catalogData.cosmetics ?? {};
    const storefronts = shopData.Storefronts ?? [];

    const items: ShopItem[] = [];

    for (const sf of storefronts) {
        for (const offer of sf.DBMtxOffers ?? []) {
            if (offer.Type !== "MTX") continue;

            const price =
                offer.Price?.FinalPrice ??
                offer.Price?.OriginalPrice ??
                0;

            const section =
                offer.Meta?.SectionID ??
                sf.Name ??
                "Unknown";

            for (const grant of offer.Grants ?? []) {
                const templateId = grant.Template;
                if (!templateId) continue;

                const wrapper = cosmetics[templateId];
                if (!wrapper?.Cosmetic) continue;

                const cos = wrapper.Cosmetic;
                const fortniteCos = fortniteMap[cos.id];

                const image =
                    fortniteCos?.images?.icon ||
                    fortniteCos?.images?.smallIcon ||
                    "/placeholder.png";

                items.push({
                    id: cos.id,
                    name: cos.name,
                    description: cos.description,
                    type: cos.type.displayValue,
                    rarity: cos.rarity.displayValue,
                    image,
                    price,
                    section,
                });
            }
        }
    }

    return items;
}
