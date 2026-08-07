import appColors from '@/styles/appColors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { ComponentProps } from 'react';

// Herda todas as props originais (name, size, color, etc.) mantendo o autocomplete total
type Props = {
  name: ComponentProps<typeof MaterialCommunityIcons>['name']
  size?: number
  color?: string
}

export default function Icon({ name = "email-outline", size = 48, color = appColors.text }: Props) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />
}