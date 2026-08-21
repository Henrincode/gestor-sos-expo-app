import { ComponentProps, ReactNode } from "react"
import { View } from "react-native"

type Props = {
    children: ReactNode
    gap?: number
    style?: ComponentProps<typeof View>['style']
}

export default function InputGroup({ gap = 4, children, style = {} }: Props) {
    return (
        <View style={[{ gap }, style]}>
            {children}
        </View>
    )
}