import { TamaguiProvider, type TamaguiProviderProps } from 'tamagui'
import { config } from '../tamagui.config'

export default function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider
      config={config}
      defaultTheme={'light'}
      {...rest}
    >
      {children}
    </TamaguiProvider>
  )
}
