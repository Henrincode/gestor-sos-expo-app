import appColors from "@/styles/appColors";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    component: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        width: '100%',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: appColors.input.border,
    }
})

export default styles