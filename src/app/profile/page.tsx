/**
 * Profile Page for Org Web App 1
 * Crimson Voyager Theme - User Profile Management
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { isAuthenticated, isLoading, account, signOut, editProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      router.push('/');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="voyager-spinner"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  const userName = account?.name || 'Captain Voyager';
  const userEmail = account?.username || 'captain@example.com';
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="voyager-nav flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/voyager-ship-icon.svg" alt="Ship" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Crimson Voyager</h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="/dashboard" className="voyager-nav-item">
            ⚓ Dashboard
          </a>
          <a href="/profile" className="voyager-nav-item active">
            👤 Profile
          </a>
          <button onClick={signOut} className="voyager-nav-item hover:bg-red-500 hover:bg-opacity-30">
            🚪 Sign Out
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <div className="voyager-card mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full voyager-gradient flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {userInitials}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2 voyager-text-gradient">{userName}</h1>
              <p className="text-gray-600 text-lg mb-3">{userEmail}</p>
              <div className="flex gap-3">
                <span className="voyager-badge">⚓ Captain</span>
                <span className="voyager-badge-violet">✅ Verified Voyager</span>
              </div>
            </div>
            <button
              onClick={editProfile}
              className="voyager-btn-primary"
            >
              ✏️ Edit Profile
            </button>
          </div>
        </div>

        {/* Account Information */}
        <div className="voyager-card mb-8">
          <h2 className="text-2xl font-bold mb-6 voyager-text-gradient">📋 Captain's Log</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Captain Name</span>
              <span className="font-semibold">{userName}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Email Address</span>
              <span className="font-semibold">{userEmail}</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Rank</span>
              <span className="voyager-badge-crimson">Captain</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600 font-medium">Fleet Status</span>
              <span className="voyager-badge-violet">Active Voyager</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600 font-medium">Joined Fleet</span>
              <span className="font-semibold">December 2024</span>
            </div>
          </div>
        </div>

        {/* Voyage Stats */}
        <div className="voyager-card mb-8">
          <h2 className="text-2xl font-bold mb-6 voyager-text-gradient">⛵ Your Voyage Records</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-2">🗺️</div>
              <div className="voyager-stat-number text-2xl">215</div>
              <div className="voyager-stat-label">Total Voyages</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">🏝️</div>
              <div className="voyager-stat-number text-2xl">32</div>
              <div className="voyager-stat-label">Lands Discovered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">⚓</div>
              <div className="voyager-stat-number text-2xl">94%</div>
              <div className="voyager-stat-label">Success Rate</div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="voyager-card mb-8">
          <h2 className="text-2xl font-bold mb-6 voyager-text-gradient">🏆 Achievements & Medals</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">🥇</div>
              <p className="text-sm font-semibold">First Voyage</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">🎖️</div>
              <p className="text-sm font-semibold">Explorer</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">⭐</div>
              <p className="text-sm font-semibold">Team Leader</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-2">💎</div>
              <p className="text-sm font-semibold">Treasure Hunter</p>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="voyager-card mb-8">
          <h2 className="text-2xl font-bold mb-6 voyager-text-gradient">⚙️ Ship Preferences</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Voyage Notifications</p>
                <p className="text-sm text-gray-600">Get alerts about expedition updates</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-voyager-crimson peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-voyager-crimson"></div>
              </label>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Weekly Fleet Report</p>
                <p className="text-sm text-gray-600">Receive summary of all voyages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-voyager-violet peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-voyager-violet"></div>
              </label>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold">Discovery Alerts</p>
                <p className="text-sm text-gray-600">Be notified of new opportunities</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-voyager-crimson peer-focus:ring-opacity-30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-voyager-crimson"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="voyager-alert-info">
          <h4 className="font-semibold mb-2">⚓ Security & Safe Harbor</h4>
          <p className="text-sm mb-2">
            Your captain's credentials are protected by Azure Entra External ID. We use military-grade
            encryption to safeguard your fleet data and never share information with pirates or third parties.
          </p>
          <p className="text-sm">
            To update your password or security settings, use the "Edit Profile" button above to
            access Azure's secure command center.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-4">
          <button onClick={editProfile} className="voyager-btn-primary flex-1">
            ✏️ Edit Profile in Azure
          </button>
          <button onClick={signOut} className="voyager-btn-secondary flex-1 border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
            🚪 Abandon Ship (Sign Out)
          </button>
        </div>
      </div>
    </div>
  );
}
