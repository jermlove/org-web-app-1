/**
 * Azure AD B2C (External ID) Configuration
 * MSAL Authentication Setup for Org Web App 1
 */

import { Configuration, PopupRequest } from '@azure/msal-browser';

// Azure AD B2C Configuration
export const msalConfig: Configuration = {
  auth: {
    clientId: process.env.NEXT_PUBLIC_AZURE_AD_CLIENT_ID || '',
    authority: process.env.NEXT_PUBLIC_AZURE_AD_AUTHORITY || '',
    knownAuthorities: [process.env.NEXT_PUBLIC_AZURE_AD_KNOWN_AUTHORITY || ''],
    redirectUri: process.env.NEXT_PUBLIC_AZURE_AD_REDIRECT_URI || 'http://localhost:3003',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case 0:
            console.error(message);
            return;
          case 1:
            console.warn(message);
            return;
          case 2:
            console.info(message);
            return;
          case 3:
            console.debug(message);
            return;
        }
      },
    },
  },
};

// Scopes for login request
export const loginRequest: PopupRequest = {
  scopes: ['openid', 'profile', 'email'],
};

// B2C User Flow Policies
export const b2cPolicies = {
  names: {
    signUpSignIn: process.env.NEXT_PUBLIC_B2C_SIGNUP_SIGNIN || 'B2C_1_susi',
    forgotPassword: process.env.NEXT_PUBLIC_B2C_FORGOT_PASSWORD || 'B2C_1_reset',
    editProfile: process.env.NEXT_PUBLIC_B2C_EDIT_PROFILE || 'B2C_1_edit_profile',
  },
  authorities: {
    signUpSignIn: {
      authority: process.env.NEXT_PUBLIC_B2C_AUTHORITY_SIGNUP_SIGNIN || '',
    },
    forgotPassword: {
      authority: process.env.NEXT_PUBLIC_B2C_AUTHORITY_FORGOT_PASSWORD || '',
    },
    editProfile: {
      authority: process.env.NEXT_PUBLIC_B2C_AUTHORITY_EDIT_PROFILE || '',
    },
  },
};

// Protected routes that require authentication
export const protectedRoutes = ['/dashboard', '/profile', '/settings'];

// Public routes accessible without authentication
export const publicRoutes = ['/', '/about', '/contact'];
