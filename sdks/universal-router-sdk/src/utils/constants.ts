import { BigNumber } from 'ethers'

export enum UniversalRouterVersion {
  V1_2 = '1.2',
  V2_0 = '2.0',
}

export type RouterConfig = {
  address: string
  creationBlock: number
}

type ChainConfig = {
  weth: string
  routerConfigs: { [key in UniversalRouterVersion]: RouterConfig }
}

const WETH_NOT_SUPPORTED_ON_CHAIN = '0x0000000000000000000000000000000000000000'

// Todo: Change `CHAIN_CONFIGS` to pull the UR address with v4
export const CHAIN_CONFIGS: { [key: number]: ChainConfig } = {
  // mainnet
  [1]: {
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 17143817,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 17143817,
      },
    },
  },
  // goerli
  [5]: {
    weth: '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 8940568,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 8940568,
      },
    },
  },
  // sepolia
  [11155111]: {
    weth: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 3543575,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 3543575,
      },
    },
  },
  // polygon
  [137]: {
    weth: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
        creationBlock: 52210153,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xec7BE89e9d109e7e3Fec59c222CF297125FEFda2',
        creationBlock: 52210153,
      },
    },
  },
  //polygon mumbai
  [80001]: {
    weth: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 35176052,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 35176052,
      },
    },
  },
  //optimism
  [10]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8',
        creationBlock: 114702266,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xCb1355ff08Ab38bBCE60111F1bb2B784bE25D7e8',
        creationBlock: 114702266,
      },
    },
  },
  // optimism goerli
  [420]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 8887728,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 8887728,
      },
    },
  },
  // arbitrum
  [42161]: {
    weth: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x5E325eDA8064b456f4781070C0738d849c824258',
        creationBlock: 169472836,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x5E325eDA8064b456f4781070C0738d849c824258',
        creationBlock: 169472836,
      },
    },
  },
  // arbitrum goerli
  [421613]: {
    weth: '0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 18815277,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 18815277,
      },
    },
  },
  // celo
  [42220]: {
    weth: WETH_NOT_SUPPORTED_ON_CHAIN,
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x643770e279d5d0733f21d6dc03a8efbabf3255b4',
        creationBlock: 21407637,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x643770e279d5d0733f21d6dc03a8efbabf3255b4',
        creationBlock: 21407637,
      },
    },
  },
  // celo alfajores
  [44787]: {
    weth: WETH_NOT_SUPPORTED_ON_CHAIN,
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 17566658,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 17566658,
      },
    },
  },
  // binance smart chain
  [56]: {
    weth: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
        creationBlock: 35160263,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
        creationBlock: 35160263,
      },
    },
  },
  // avalanche
  [43114]: {
    weth: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
        creationBlock: 40237257,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x4Dae2f939ACf50408e13d58534Ff8c2776d45265',
        creationBlock: 40237257,
      },
    },
  },
  // base goerli
  [84531]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xd0872d928672ae2ff74bdb2f5130ac12229cafaf',
        creationBlock: 6915289,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xd0872d928672ae2ff74bdb2f5130ac12229cafaf',
        creationBlock: 6915289,
      },
    },
  },
  // base mainnet
  [8453]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 9107268,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FAD',
        creationBlock: 9107268,
      },
    },
  },
  [81457]: {
    weth: '0x4300000000000000000000000000000000000004',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x643770E279d5D0733F21d6DC03A8efbABf3255B4',
        creationBlock: 1116444,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x643770E279d5D0733F21d6DC03A8efbABf3255B4',
        creationBlock: 1116444,
      },
    },
  },
  [7777777]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x2986d9721A49838ab4297b695858aF7F17f38014',
        creationBlock: 11832155,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x2986d9721A49838ab4297b695858aF7F17f38014',
        creationBlock: 11832155,
      },
    },
  },
  [324]: {
    weth: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06',
        creationBlock: 12640979,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x28731BCC616B5f51dD52CF2e4dF0E78dD1136C06',
        creationBlock: 12640979,
      },
    },
  },
  [11124]: {
    weth: '0x9EDCde0257F2386Ce177C3a7FCdd97787F0D841d',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xCdFB71b46bF3f44FC909B5B4Eaf4967EC3C5B4e5',
        creationBlock: 2616204,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xCdFB71b46bF3f44FC909B5B4Eaf4967EC3C5B4e5',
        creationBlock: 2616204,
      },
    },
  },
  [543210]: {
    weth: '0xAc98B49576B1C892ba6BFae08fE1BB0d80Cf599c',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xF93Ce7C55073aE244f4a5C810924D790C65F742E',
        creationBlock: 12528,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xF93Ce7C55073aE244f4a5C810924D790C65F742E',
        creationBlock: 12528,
      },
    },
  },
  [60808]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
        creationBlock: 5369968,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x346239972d1fa486FC4a521031BC81bFB7D6e8a4',
        creationBlock: 5369968,
      },
    },
  },
  [7560]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xbc1287f5af439c7d6dcfa0bdcbb30d81725ffda0',
        creationBlock: 9622699,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xbc1287f5af439c7d6dcfa0bdcbb30d81725ffda0',
        creationBlock: 9622699,
      },
    },
  },
  [360]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x663EfF39dd168A7Eb4016a237b16A8aB86901856',
        creationBlock: 6177818,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x663EfF39dd168A7Eb4016a237b16A8aB86901856',
        creationBlock: 6177818,
      },
    },
  },
  [57073]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x9C5577aEF7c2a5C80aA62bA5420170F6b4a302FF',
        creationBlock: 525058,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x9C5577aEF7c2a5C80aA62bA5420170F6b4a302FF',
        creationBlock: 525058,
      },
    },
  },
  [17069]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0x02b36A5aCa3e51d2E73926E3D3bB59C979B60C78',
        creationBlock: 598982,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0x02b36A5aCa3e51d2E73926E3D3bB59C979B60C78',
        creationBlock: 598982,
      },
    },
  },
  [690]: {
    weth: '0x4200000000000000000000000000000000000006',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xf92496316432e9EaCcAb99dDCcFd7e40A4d8fe46',
        creationBlock: 929085,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xf92496316432e9EaCcAb99dDCcFd7e40A4d8fe46',
        creationBlock: 929085,
      },
    },
  },
  [2741]: {
    weth: '0x3439153EB7AF838Ad19d56E1571FBD09333C2809',
    routerConfigs: {
      [UniversalRouterVersion.V1_2]: {
        address: '0xc3B15E2Aaf6e58cBEB87596B49F60b2764a02375',
        creationBlock: 62138,
      },
      [UniversalRouterVersion.V2_0]: {
        address: '0xc3B15E2Aaf6e58cBEB87596B49F60b2764a02375',
        creationBlock: 62138,
      },
    },
  },
}

export const UNIVERSAL_ROUTER_ADDRESS = (version: UniversalRouterVersion, chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].routerConfigs[version].address
}

export const UNIVERSAL_ROUTER_CREATION_BLOCK = (version: UniversalRouterVersion, chainId: number): number => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].routerConfigs[version].creationBlock
}

export const WETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId].weth == WETH_NOT_SUPPORTED_ON_CHAIN) throw new Error(`Chain ${chainId} does not have WETH`)

  return CHAIN_CONFIGS[chainId].weth
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const E_ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
