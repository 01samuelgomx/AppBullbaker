import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const CustomTabBarButton = ({ children, onPress, style }) => (
  <TouchableOpacity
    style={style}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);

export default CustomTabBarButton;
