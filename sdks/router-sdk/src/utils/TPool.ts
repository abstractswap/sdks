import { Pool as V4Pool } from '@abstractswap/v4-sdk'
import { Pair } from '@abstractswap/v2-sdk'
import { Pool as V3Pool } from '@abstractswap/v3-sdk'

export type TPool = Pair | V3Pool | V4Pool
