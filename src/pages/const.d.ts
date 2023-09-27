import { Chain } from "wagmi";

declare const sepolia_override: Chain = {
    id: 11155111,
    network: "sepolia",
    name: "Sepolia",
    nativeCurrency: {
        name: "Sepolia Ether",
        symbol: "SEP",
        decimals: 18,
    },
    rpcUrls: {
        alchemy: {
            http: readonly["https://eth-sepolia.g.alchemy.com/v2"],
            webSocket: readonly["wss://eth-sepolia.g.alchemy.com/v2"]
        },
        infura: {
            http: readonly["https://sepolia.infura.io/v3"],
            webSocket: readonly["wss://sepolia.infura.io/ws/v3"]
        },
        default: {
            http: readonly["https://rpc-sepolia.rockx.com"]
        },
        public: {
            http: readonly["https://rpc-sepolia.rockx.com"]
        },
    },
    blockExplorers: {
        etherscan: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        },
        default: {
            name: "Etherscan",
            url: "https://sepolia.etherscan.io"
        },
    },
    contracts: {
        multicall3: {
            address: "0xca11bde05977b3631167028862be2a173976ca11",
            blockCreated: 6507670
        },
    },
    testnet: true
};

export { sepolia_override };