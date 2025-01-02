import { Ionicons } from '@expo/vector-icons'

interface EyeIconProps {
    visible: boolean
    color?: string
}

export default function EyeIcon({ visible, color = '#999' }: EyeIconProps) {
    return (
        <Ionicons
            name={visible ? 'eye-outline' : 'eye-off-outline'}
            size={20}
            color={color}
        />
    )
} 