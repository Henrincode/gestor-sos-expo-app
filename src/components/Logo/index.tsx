import appColors from "@/styles/appColors";
import { Text, View } from "react-native";
import Icon from "../Icon";
import styles from "./styles";

type Props = {
    size?: number
    title?: boolean
    subTitle?: boolean
}

export default function Logo({ size = 42, title, subTitle }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                {/* icon box */}
                <View style={styles.containerIcon}>
                    <Icon name="hammer-screwdriver" size={size * 1.5} color={appColors.logo.text} />
                </View>
                <View>
                    {title && <Text style={[styles.text, { fontSize: size }]}>Gestor SOS</Text>}
                    {subTitle && <Text style={[styles.subText, { fontSize: size * 0.5 }]}>Smart Order System</Text>}
                </View>
            </View>
        </View>
    )
}