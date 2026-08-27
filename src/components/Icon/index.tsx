import appColors from '@/styles/appColors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { ComponentProps } from 'react';

// Herda todas as props originais (name, size, color, etc.) mantendo o autocomplete total
type Props = {
  name: ComponentProps<typeof Ionicons>['name']
  size?: number
  color?: string
}

export default function Icon({ name = "mail-outline", size = 48, color = appColors.text }: Props) {
  return <Ionicons name={name} size={size} color={color} />
}