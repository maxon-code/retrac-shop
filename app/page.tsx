import { getShopItems} from "@/app/lib/retrac";
import HomeClient from "./HomeClient";

export default async function Page() {
    const items = await getShopItems();

    return <HomeClient items={items}/>
}