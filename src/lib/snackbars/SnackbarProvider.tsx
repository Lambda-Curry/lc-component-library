import React, { FC, ReactNode, createRef } from 'react';
import { SnackbarProvider as MuiSnackbarProvider } from 'notistack';
import { SnackbarAction } from './SnackbarAction';

import './snackbars.css';

export interface SnackbarProviderProps {
  children: ReactNode;
}

export const SnackbarProvider: FC<SnackbarProviderProps> = props => {
  // Add default action to all snackbars
  const snackbarProviderRef = createRef<MuiSnackbarProvider>();
  const onClickDismiss = (key: string) => {
    if (snackbarProviderRef?.current) snackbarProviderRef.current.closeSnackbar(key);
  };

  return (
    <MuiSnackbarProvider
      ref={snackbarProviderRef}
      classes={{
        root: 'snackbar',
        containerRoot: 'snackbars',
        variantInfo: 'snackbar-info',
        variantSuccess: 'snackbar-success',
        variantWarning: 'snackbar-warning',
        variantError: 'snackbar-danger'
      }}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      action={(key: string) => <SnackbarAction onClick={() => onClickDismiss(key)}>Dismiss</SnackbarAction>}
      {...props}
    />
  );
};
