import { config as configBase } from '@tamagui/config/v3'
import { createFont, createTamagui } from 'tamagui'

export const config = createTamagui({
  ...configBase,
  defaultFont: 'ClashDisplay-Regular',
  fonts: {
    body: createFont({
      family: 'ClashDisplay-Regular',
      size: {
        1: 11,
        2: 12,
        3: 13,
        4: 14,
        5: 16,
        6: 18,
        7: 20,
        8: 22,
        9: 30,
        10: 42,
      },
    }),
    heading: createFont({
      family: 'ClashDisplay-Bold',
      size: {
        1: 11,
        2: 12,
        3: 13,
        4: 14,
        5: 16,
        6: 18,
        7: 20,
        8: 22,
        9: 30,
        10: 42,
      },
    }),
  },
})

export default config

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf { }
}
