import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { ComponentProps } from 'react';

// Herda todas as props originais (name, size, color, etc.) mantendo o autocomplete total
type Props = ComponentProps<typeof MaterialCommunityIcons>

export default function Icon({ name = "email-outline", size = 24, color = "black", ...rest }: Props) {
  return <MaterialCommunityIcons name={name} size={size} color={color} {...rest} />
}