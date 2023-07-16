import React from 'react';


export const rootNavigationRef = React.createRef(); 


export function navigateRoot (name, params) {
  return rootNavigationRef.current?.navigate(name, params)
}
