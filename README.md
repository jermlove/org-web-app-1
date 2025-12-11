# Org Web App 1 - Crimson Voyager

A modern Next.js web application featuring the **Crimson Voyager** theme, secured with Azure Entra External ID (Azure AD B2C) authentication.

## ⚓ Overview

Org Web App 1 is part of a multi-tenant IaaS proof of concept, demonstrating enterprise-grade authentication with custom branding. This application runs on **port 3003** and features the bold Crimson Voyager theme with crimson-to-violet gradients and maritime/exploration-inspired design elements.

## 🎨 Crimson Voyager Theme

The Crimson Voyager theme embodies **adventure, exploration, and bold leadership**:

- **Primary Colors**: Crimson Red (#DC143C) to Voyager Violet (#8B00FF)
- **Design Language**: Maritime, exploration, and voyage elements
- **Visual Identity**: Bold crimson gradients transitioning to mystical violet
- **Brand Assets**: Ship logos, nautical icons, exploration imagery

### Color Palette

```css
--voyager-crimson: #DC143C
--voyager-ruby: #E74C3C
--voyager-violet: #8B00FF
--voyager-purple: #9B59B6
--voyager-dark: #1A1A2E
--voyager-charcoal: #2C2C54
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Azure AD B2C tenant configured
- Azure AD application registration

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Copy `.env.example` to `.env.local` and fill in your Azure AD B2C details:
   ```bash
   NEXT_PUBLIC_AZURE_AD_CLIENT_ID=your-client-id
   NEXT_PUBLIC_AZURE_AD_AUTHORITY=https://yourtenantname.b2clogin.com/yourtenantname.onmicrosoft.com/B2C_1_susi
   NEXT_PUBLIC_AZURE_AD_KNOWN_AUTHORITY=yourtenantname.b2clogin.com
   NEXT_PUBLIC_AZURE_AD_REDIRECT_URI=http://localhost:3003
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3003](http://localhost:3003)

## 🔐 Azure AD B2C Setup

### Create B2C Tenant

1. Go to [Azure Portal](https://portal.azure.com)
2. Create an Azure AD B2C tenant
3. Note your tenant name (e.g., `yourtenantname.onmicrosoft.com`)

### Register Application

1. In your B2C tenant, go to **App registrations**
2. Click **New registration**
3. Set **Redirect URI**: `http://localhost:3003` (for development)
4. After creation, copy the **Application (client) ID**

### Configure User Flows

Create these B2C user flows:

- **Sign up and sign in**: `B2C_1_susi`
- **Password reset**: `B2C_1_reset`
- **Profile editing**: `B2C_1_edit_profile`

## 📁 Project Structure

```
org-web-app-1/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Crimson Voyager theme
│   │   ├── page.tsx             # Home/landing page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Protected dashboard
│   │   └── profile/
│   │       └── page.tsx         # User profile management
│   ├── lib/
│   │   ├── authConfig.ts        # MSAL configuration
│   │   ├── AuthProvider.tsx    # Auth provider component
│   │   └── useAuth.ts           # Custom auth hook
│   └── styles/
│       └── crimson-voyager-theme.css  # Theme styles
├── public/
│   ├── voyager-ship-full.svg            # Full logo
│   ├── voyager-ship-icon.svg            # Icon logo
│   ├── favicon.png                      # Favicon
│   └── [other theme assets]
├── package.json
├── tsconfig.json
├── next.config.js
├── vercel.json
└── .env.example
```

## 🎯 Key Features

### Authentication
- **Azure AD B2C integration** via MSAL
- **Popup and redirect** sign-in flows
- **Protected routes** (dashboard, profile)
- **Password reset** and profile editing
- **Silent token refresh**

### Theme Implementation
- **Crimson Voyager custom CSS** with crimson-to-violet gradients
- **Maritime-themed UI components**
- **Responsive design** with Tailwind CSS
- **Nautical navigation elements** with ship iconography
- **Smooth animations** including ship floating effects

### Pages
- **Home**: Landing page with theme showcase and authentication
- **Dashboard**: Protected route with expedition tracking and fleet management
- **Profile**: User account management with Azure profile editing

## 🛠️ Available Scripts

```bash
npm run dev        # Start development server on port 3003
npm run build      # Build for production
npm run start      # Start production server on port 3003
npm run lint       # Run ESLint
npm run type-check # Run TypeScript type checking
```

## 🌐 Deployment

### Vercel Deployment

1. **Push to GitHub** (or GitLab, Bitbucket)

2. **Import to Vercel**:
   - Connect your repository
   - Vercel auto-detects Next.js

3. **Configure environment variables** in Vercel dashboard:
   - Add all `NEXT_PUBLIC_AZURE_AD_*` variables
   - Update `NEXT_PUBLIC_AZURE_AD_REDIRECT_URI` to your Vercel domain

4. **Update Azure AD B2C**:
   - Add Vercel domain to redirect URIs in app registration

### Environment Variables for Production

```bash
NEXT_PUBLIC_AZURE_AD_CLIENT_ID=your-production-client-id
NEXT_PUBLIC_AZURE_AD_AUTHORITY=https://yourtenantname.b2clogin.com/yourtenantname.onmicrosoft.com/B2C_1_susi
NEXT_PUBLIC_AZURE_AD_KNOWN_AUTHORITY=yourtenantname.b2clogin.com
NEXT_PUBLIC_AZURE_AD_REDIRECT_URI=https://your-vercel-domain.vercel.app
```

## 🎨 Customizing the Theme

The Crimson Voyager theme is defined in `styles/crimson-voyager-theme.css`. Key customization points:

### Colors
Modify CSS variables in `:root`:
```css
--voyager-crimson: #DC143C;
--voyager-violet: #8B00FF;
```

### Gradient Angle
Adjust gradient angles in `.voyager-gradient`:
```css
background: linear-gradient(135deg, var(--voyager-crimson), var(--voyager-violet));
```

### Component Styles
Theme provides these utility classes:
- `.voyager-btn-primary` - Primary action buttons
- `.voyager-card` - Content cards with border accents
- `.voyager-nav` - Navigation bars
- `.voyager-badge` - Status badges
- `.voyager-gradient` - Background gradients
- `.voyager-ship` - Floating ship animation

## 🔍 Differences from Other Apps

Org Web App 1 differs from other apps in the multi-tenant suite:

1. **Branding**: "Org" (organizational) vs "Reader" or "Client" terminology
2. **Theme**: Crimson Voyager (red/violet) vs Guardian MedKit (pink/blue), Emerald Ronin (green/mint), or Tangerine Navigator (orange/teal)
3. **Port**: 3003 vs 3000 (App 1), 3001 (App 2), or 3002 (App 3)
4. **Use Case**: Organizational/team management vs content reading or client navigation
5. **Iconography**: Ship/maritime vs shield, crest, or compass
6. **Terminology**: Voyage/expedition themed (Captain, Fleet, Expeditions, Discoveries)

All apps share the same authentication architecture but demonstrate multi-tenant capability through distinct branding.

## 📚 Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS + Custom CSS
- **Authentication**: MSAL React (@azure/msal-browser, @azure/msal-react)
- **Identity Provider**: Azure AD B2C (Entra External ID)
- **Deployment**: Vercel

## 🤝 Multi-Tenant Architecture

This application is part of a multi-tenant IaaS POC:

- **App 1** (Reader Web App 1): Guardian MedKit theme on port 3000
- **App 2** (Reader Web App 2): Emerald Ronin theme on port 3001
- **App 3** (Client Web App 1): Tangerine Navigator theme on port 3002
- **App 4** (Org Web App 1): Crimson Voyager theme on port 3003

Each app demonstrates:
- Independent branding with theme packs
- Shared authentication infrastructure
- Isolated runtime environments
- Scalable multi-tenant patterns

## 📄 License

This is a proof of concept application for demonstration purposes.

## 🆘 Support

For issues with:
- **Azure AD B2C**: Check Azure Portal → Azure AD B2C → User flows
- **MSAL errors**: Review browser console and `.env.local` configuration
- **Theme not loading**: Verify `layout.tsx` imports `crimson-voyager-theme.css`
- **Port conflicts**: Ensure port 3003 is available

## ⚓ Voyage Terminology

The Crimson Voyager theme uses maritime/exploration terminology:
- **Expeditions**: Projects or initiatives
- **Voyages**: Completed projects
- **Discoveries**: Achievements or milestones
- **Captain**: User/leader role
- **Fleet**: Organization or team
- **Harbor**: Secure state/safe zone
- **Charted Course**: Strategic plan

This creates a cohesive narrative around organizational exploration and bold leadership.

## 🌊 Theme Features

### Maritime Animations
- **Ship floating effect**: Gentle up-and-down animation on ship icons
- **Wave effects**: Subtle rocking animations on certain elements
- **Smooth sailing**: Fluid transitions throughout the interface

### Visual Metaphors
- 🚢 **Ship & Anchor**: Leadership and stability
- 🗺️ **Maps & Charts**: Planning and strategy
- ⛵ **Sails & Wind**: Progress and momentum
- 🏴‍☠️ **Adventure Flags**: Bold initiatives
- 💎 **Treasures**: Valuable outcomes

---

**Org Web App 1** • Crimson Voyager Theme • Azure Entra External ID • Port 3003
