/**
 * Custom Authentication Hook
 * Provides authentication state and methods using MSAL
 */

'use client';

import { useMsal } from '@azure/msal-react';
import { InteractionStatus } from '@azure/msal-browser';
import { loginRequest, b2cPolicies } from './authConfig';

export function useAuth() {
  const { instance, accounts, inProgress } = useMsal();

  const isAuthenticated = accounts.length > 0;
  const isLoading = inProgress !== InteractionStatus.None;
  const account = accounts[0] || null;

  const signIn = async () => {
    try {
      await instance.loginRedirect(loginRequest);
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  const signInPopup = async () => {
    try {
      await instance.loginPopup(loginRequest);
    } catch (error) {
      console.error('Sign in popup error:', error);
    }
  };

  const signOut = async () => {
    try {
      await instance.logoutRedirect({
        account: account,
      });
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const resetPassword = async () => {
    try {
      await instance.loginRedirect({
        authority: b2cPolicies.authorities.forgotPassword.authority,
        scopes: [],
      });
    } catch (error) {
      console.error('Password reset error:', error);
    }
  };

  const editProfile = async () => {
    try {
      await instance.loginRedirect({
        authority: b2cPolicies.authorities.editProfile.authority,
        scopes: [],
      });
    } catch (error) {
      console.error('Edit profile error:', error);
    }
  };

  const getAccessToken = async (scopes: string[]) => {
    try {
      const response = await instance.acquireTokenSilent({
        scopes,
        account: account || undefined,
      });
      return response.accessToken;
    } catch (error) {
      console.error('Token acquisition error:', error);
      try {
        const response = await instance.acquireTokenPopup({
          scopes,
          account: account || undefined,
        });
        return response.accessToken;
      } catch (popupError) {
        console.error('Token popup error:', popupError);
        throw popupError;
      }
    }
  };

  return {
    isAuthenticated,
    isLoading,
    account,
    signIn,
    signInPopup,
    signOut,
    resetPassword,
    editProfile,
    getAccessToken,
  };
}
