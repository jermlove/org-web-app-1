/**
 * Authentication Provider Component
 * Wraps the application with MSAL Provider for Azure AD B2C
 */

'use client';

import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

const msalInstance = new PublicClientApplication(msalConfig);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <MsalProvider instance={msalInstance}>{children}</MsalProvider>;
}
