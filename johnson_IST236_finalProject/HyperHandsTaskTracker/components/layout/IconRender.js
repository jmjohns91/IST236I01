import React from 'react';
import { iconLibraries, icons } from '../../constants/icons';

export const IconRenderer = ({ iconName, iconLibrary, size, color }) => {
  // console.log(`Rendering ${iconName} from ${iconLibrary}`);
  if (!iconName || !iconLibrary) return null;

  const Icon = iconLibraries[iconLibrary];
  if (!Icon) {
    console.error(`Icon library '${iconLibrary}' not found.`);
    return null;
  }

  return <Icon name={iconName} size={size} color={color} />;
};
