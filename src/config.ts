import { ICollectionType, IConfig } from "./lib/app/types";

const CONFIG: IConfig = {
    coinDenom: "uandr",
    name: "PixelBid Auction dApp",
    chainId: "galileo-4",
    createdDate: "2024-03-31T19:01:01.148Z",
    modifiedDate: "2024-03-31T19:01:01.148Z",
    id: "andromeda",
    collections: [
        {
            auction:
                "andr1hh338rlhx9uzdhz0hu66pa08mar36m498guqpexagfejsyaan2csmgpggt",
            cw721: "andr1evwsnaj4ktu6glc09heuxp65xfsdxx6763vg482809pas6vupnyqfd4zfr",
            name: "PixelBid Summer Edition",
            type: ICollectionType.AUCTION,
            id: "embeddables-auction-1",
        }
    ],
};

export default CONFIG;
