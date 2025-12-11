/**
 * Home Page for Org Web App 1
 * Crimson Voyager Theme - Landing Page
 */

'use client';

import { useAuth } from '@/lib/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const { isAuthenticated, isLoading, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push('/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="voyager-spinner"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen voyager-gradient">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <Image
              src="/voyager-ship-full.svg"
              alt="Crimson Voyager Ship"
              width={180}
              height={180}
              priority
              className="drop-shadow-lg voyager-ship"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Crimson Voyager
          </h1>
          <p className="text-2xl text-white opacity-90 mb-8">
            Set Sail for Organizational Excellence
          </p>
          <p className="text-lg text-white opacity-80 max-w-2xl mx-auto mb-12">
            Navigate uncharted waters with confidence. Our platform empowers organizations to
            explore new horizons, discover opportunities, and reach their ultimate destination.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button onClick={signIn} className="voyager-btn-primary text-lg px-8 py-4">
              ⚓ Begin Voyage
            </button>
            <button className="voyager-btn-secondary bg-white bg-opacity-20 text-white border-white hover:bg-white hover:text-voyager-crimson text-lg px-8 py-4">
              🗺️ Explore Platform
            </button>
          </div>
        </header>

        {/* Features Section */}
        <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="voyager-feature-card">
            <div className="voyager-feature-icon">⛵</div>
            <h3 className="text-2xl font-bold mb-3 voyager-text-gradient">Smooth Sailing</h3>
            <p className="text-gray-600">
              Streamlined workflows and intuitive interfaces make organizational management effortless.
            </p>
          </div>

          <div className="voyager-feature-card">
            <div className="voyager-feature-icon">🧭</div>
            <h3 className="text-2xl font-bold mb-3 voyager-text-gradient">Clear Direction</h3>
            <p className="text-gray-600">
              Strategic insights and real-time analytics guide your organization toward success.
            </p>
          </div>

          <div className="voyager-feature-card">
            <div className="voyager-feature-icon">🏴‍☠️</div>
            <h3 className="text-2xl font-bold mb-3 voyager-text-gradient">Bold Adventures</h3>
            <p className="text-gray-600">
              Take calculated risks and explore new opportunities with enterprise-grade security.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="mt-16 text-center">
          <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 voyager-text-gradient">
              Why Join the Crimson Voyager?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-semibold voyager-text-crimson mb-3">🚢 Enterprise Fleet</h4>
                <p className="text-gray-700">
                  Comprehensive suite of tools designed for modern organizations of all sizes.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold voyager-text-violet mb-3">🌊 Navigate Challenges</h4>
                <p className="text-gray-700">
                  Advanced analytics and reporting help you overcome obstacles and stay on course.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold voyager-text-crimson mb-3">⚓ Secure Harbor</h4>
                <p className="text-gray-700">
                  Azure Entra ID authentication ensures your data remains protected in any waters.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold voyager-text-violet mb-3">🗺️ Charted Course</h4>
                <p className="text-gray-700">
                  Strategic planning tools help map your journey from vision to reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Set Sail? 🚢
            </h3>
            <p className="text-white text-lg opacity-90 mb-6">
              Join thousands of organizations already navigating success with Crimson Voyager.
              Your adventure begins with a single click.
            </p>
            <button onClick={signIn} className="voyager-btn-primary text-lg px-10 py-4">
              ⚓ Launch Your Voyage
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-white opacity-75">
          <p className="text-sm">
            Powered by Azure Entra External ID • Secured & Authenticated
          </p>
          <p className="text-xs mt-2">
            Org Web App 1 • Crimson Voyager Theme • Port 3003
          </p>
        </footer>
      </div>
    </main>
  );
}
