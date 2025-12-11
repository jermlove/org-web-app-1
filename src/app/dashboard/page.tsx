/**
 * Dashboard Page for Org Web App 1
 * Crimson Voyager Theme - Protected Route
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { isAuthenticated, isLoading, account, signOut } = useAuth();
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

  const userName = account?.name || 'Voyager';
  const userEmail = account?.username || 'user@example.com';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <nav className="voyager-nav flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/voyager-ship-icon.svg" alt="Ship" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-white">Crimson Voyager</h1>
        </div>
        <div className="flex items-center gap-6">
          <a href="/dashboard" className="voyager-nav-item active">
            ⚓ Dashboard
          </a>
          <a href="/profile" className="voyager-nav-item">
            👤 Profile
          </a>
          <button onClick={signOut} className="voyager-nav-item hover:bg-red-500 hover:bg-opacity-30">
            🚪 Sign Out
          </button>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-2">
            Welcome aboard, <span className="voyager-text-gradient">{userName}</span> ⚓
          </h2>
          <p className="text-gray-600 text-lg">Your fleet is ready. Let's embark on today's journey.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="voyager-stat-card">
            <div className="text-4xl mb-3">⛵</div>
            <div className="voyager-stat-number">8</div>
            <div className="voyager-stat-label">Active Expeditions</div>
          </div>
          <div className="voyager-stat-card">
            <div className="text-4xl mb-3">🏴‍☠️</div>
            <div className="voyager-stat-number">94%</div>
            <div className="voyager-stat-label">Success Rate</div>
          </div>
          <div className="voyager-stat-card">
            <div className="text-4xl mb-3">🗺️</div>
            <div className="voyager-stat-number">32</div>
            <div className="voyager-stat-label">Discovered Lands</div>
          </div>
          <div className="voyager-stat-card">
            <div className="text-4xl mb-3">⚓</div>
            <div className="voyager-stat-number">215</div>
            <div className="voyager-stat-label">Safe Harbors</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Active Expeditions */}
          <div className="voyager-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold voyager-text-gradient">⛵ Active Expeditions</h3>
              <span className="voyager-badge">8 Voyages</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-voyager-crimson">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">New Market Discovery</h4>
                  <span className="voyager-badge-crimson">Critical</span>
                </div>
                <div className="voyager-progress mb-2">
                  <div className="voyager-progress-bar" style={{ width: '82%' }}></div>
                </div>
                <p className="text-sm text-gray-600">ETA: 5 days</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-voyager-violet">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Team Collaboration Initiative</h4>
                  <span className="voyager-badge-violet">On Track</span>
                </div>
                <div className="voyager-progress mb-2">
                  <div className="voyager-progress-bar" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600">ETA: 12 days</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-voyager-ruby">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-lg">Product Launch Voyage</h4>
                  <span className="voyager-badge-outline">Planning</span>
                </div>
                <div className="voyager-progress mb-2">
                  <div className="voyager-progress-bar" style={{ width: '25%' }}></div>
                </div>
                <p className="text-sm text-gray-600">ETA: 30 days</p>
              </div>
            </div>
          </div>

          {/* Voyage Insights */}
          <div className="voyager-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold voyager-text-gradient">🧭 Voyage Insights</h3>
            </div>
            <div className="space-y-4">
              <div className="voyager-alert-success">
                <h4 className="font-semibold mb-1">⛵ Smooth Sailing</h4>
                <p className="text-sm">6 expeditions are ahead of schedule with favorable conditions.</p>
              </div>
              <div className="voyager-alert-info">
                <h4 className="font-semibold mb-1">📊 Weekly Highlights</h4>
                <p className="text-sm">Discovered 3 new opportunities and charted 7 new territories this week.</p>
              </div>
              <div className="voyager-alert-warning">
                <h4 className="font-semibold mb-1">⚠️ Weather Advisory</h4>
                <p className="text-sm">2 expeditions may encounter challenges. Captain's attention required.</p>
              </div>
            </div>
            <hr className="voyager-divider" />
            <div>
              <h4 className="font-semibold mb-3 text-lg">📈 Fleet Performance</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Mission Success Rate</span>
                    <span className="text-sm font-semibold voyager-text-violet">94%</span>
                  </div>
                  <div className="voyager-progress">
                    <div className="voyager-progress-bar" style={{ width: '94%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Crew Morale</span>
                    <span className="text-sm font-semibold voyager-text-crimson">89%</span>
                  </div>
                  <div className="voyager-progress">
                    <div className="voyager-progress-bar" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">Resource Utilization</span>
                    <span className="text-sm font-semibold voyager-text-violet">76%</span>
                  </div>
                  <div className="voyager-progress">
                    <div className="voyager-progress-bar" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovered Territories */}
        <div className="mt-8 voyager-card">
          <h3 className="text-2xl font-bold mb-6 voyager-text-gradient">🗺️ Recently Discovered Territories</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏝️</div>
              <h4 className="font-semibold voyager-text-crimson mb-1">Market Island</h4>
              <p className="text-xs text-gray-600">Discovered 2 days ago</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🏰</div>
              <h4 className="font-semibold voyager-text-violet mb-1">Partner Fortress</h4>
              <p className="text-xs text-gray-600">Discovered 5 days ago</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">💎</div>
              <h4 className="font-semibold voyager-text-crimson mb-1">Value Mines</h4>
              <p className="text-xs text-gray-600">Discovered 1 week ago</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl mb-2">🌴</div>
              <h4 className="font-semibold voyager-text-violet mb-1">Innovation Cove</h4>
              <p className="text-xs text-gray-600">Discovered 2 weeks ago</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 voyager-text-gradient">⚡ Captain's Commands</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="voyager-btn-primary text-center py-6">
              ⛵ New Expedition
            </button>
            <button className="voyager-btn-violet text-center py-6">
              📊 View Charts
            </button>
            <button className="voyager-btn-secondary text-center py-6">
              👥 Crew Roster
            </button>
            <button className="voyager-btn-secondary text-center py-6">
              ⚙️ Ship Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
