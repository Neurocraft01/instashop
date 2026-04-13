'use client';

import Link from 'next/link';
import { useState } from 'react';

// =====================================================
// VIBRANT CREATOR DESIGN SYSTEM COLORS (inline style)
// =====================================================
export const VC = {
  background: '#f9f6f3',
  surface: '#f9f6f3',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f3f0ed',
  surfaceContainer: '#eae8e4',
  surfaceContainerHigh: '#e4e2df',
  surfaceContainerHighest: '#dfdcd9',
  primary: '#745700',
  primaryContainer: '#f9cc61',
  onPrimary: '#fff1da',
  onPrimaryFixed: '#443100',
  onPrimaryContainer: '#5b4400',
  secondary: '#b31446',
  secondaryContainer: '#ffc2c9',
  onSecondary: '#ffeff0',
  onSecondaryContainer: '#920035',
  tertiary: '#66547a',
  tertiaryContainer: '#e8d1fe',
  onTertiary: '#faefff',
  onTertiaryContainer: '#57456a',
  onBackground: '#2f2f2d',
  onSurface: '#2f2f2d',
  onSurfaceVariant: '#5c5b59',
  outline: '#787774',
  outlineVariant: '#afadaa',
  brandDark: '#2B1B3D',
  brandYellow: '#FFD166',
};

// =====================================================
// SELLER DASHBOARD SIDEBAR
// =====================================================
interface SidebarItem {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
}

const defaultSellerNavItems: SidebarItem[] = [
  { icon: 'dashboard', label: 'Dashboard', href: '/dashboard' },
  { icon: 'inventory_2', label: 'Products', href: '/dashboard/products' },
  { icon: 'shopping_bag', label: 'Orders', href: '/dashboard/orders' },
  { icon: 'group', label: 'Customers', href: '/dashboard/customers' },
  { icon: 'leaderboard', label: 'Leads', href: '/dashboard/leads' },
  { icon: 'sell', label: 'Coupons', href: '/dashboard/coupons' },
  { icon: 'analytics', label: 'Analytics', href: '/dashboard/analytics' },
  { icon: 'settings', label: 'Settings', href: '/dashboard/settings' },
];

export function SellerSidebar({ activeItem = 'Dashboard' }: { activeItem?: string }) {
  return (
    <aside
      className="hidden md:flex flex-col h-screen w-64 sticky top-0 left-0 py-8 gap-2 z-40"
      style={{ background: VC.brandDark, fontFamily: 'Epilogue, sans-serif' }}
    >
      <div className="px-8 mb-6">
        <h1 className="text-2xl font-bold" style={{ color: VC.brandYellow }}>InstaShop</h1>
        <p className="text-slate-400 text-sm mt-1">Seller Portal</p>
      </div>
      <nav className="flex-1 space-y-1">
        {defaultSellerNavItems.map((item) => {
          const isActive = item.label === activeItem;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 mx-4 px-6 py-3 rounded-full font-bold transition-all ${
                isActive
                  ? 'text-yellow-400 bg-white/10 scale-95'
                  : 'text-slate-300 hover:text-yellow-400 hover:bg-white/10'
              }`}
              style={isActive ? { color: VC.brandYellow } : {}}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="px-6 pb-4">
        <Link
          href="/dashboard/products/new"
          className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg"
          style={{ background: VC.brandYellow, color: VC.brandDark }}
        >
          <span className="material-symbols-outlined">add_circle</span>
          Create New Listing
        </Link>
      </div>
      <div className="border-t border-slate-700/50 py-4">
        <Link href="/dashboard/settings" className="flex items-center gap-3 text-slate-300 mx-4 px-6 py-3 rounded-full hover:text-yellow-400 hover:bg-white/10 transition-all">
          <span className="material-symbols-outlined">contact_support</span>
          Help
        </Link>
      </div>
    </aside>
  );
}

// =====================================================
// SELLER DASHBOARD TOPBAR
// =====================================================
export function SellerTopbar({ title = 'InstaShop' }: { title?: string }) {
  return (
    <header
      className="flex items-center justify-between px-10 w-full h-20 sticky top-0 z-30 border-b"
      style={{
        background: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(16px)',
        borderColor: VC.surfaceContainerHigh,
      }}
    >
      <div className="flex items-center gap-6 flex-1">
        <div className="relative w-96 hidden md:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">search</span>
          <input
            className="w-full rounded-full py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 transition-all"
            style={{ background: VC.surfaceContainerLow, color: VC.onSurface }}
            placeholder="Search orders, products, or customers..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link
          href="/dashboard"
          className="text-sm font-bold flex items-center gap-2 px-4 py-2 rounded-full transition-all"
          style={{ color: VC.primary }}
        >
          View My Store
          <span className="material-symbols-outlined">open_in_new</span>
        </Link>
        <div className="flex items-center gap-2">
          <button className="rounded-full p-2 transition-all relative" style={{ color: VC.onSurfaceVariant }}>
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full" style={{ background: VC.secondary }}></span>
          </button>
        </div>
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 cursor-pointer" style={{ borderColor: VC.primaryContainer }}>
          <div className="w-full h-full flex items-center justify-center text-sm font-bold" style={{ background: VC.primaryContainer, color: VC.onPrimaryFixed }}>
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

// =====================================================
// ADMIN SIDEBAR
// =====================================================
const adminNavItems: SidebarItem[] = [
  { icon: 'dashboard', label: 'Overview', href: '/admin' },
  { icon: 'storefront', label: 'Stores', href: '/admin/stores' },
  { icon: 'group', label: 'Users', href: '/admin/users' },
  { icon: 'analytics', label: 'Analytics', href: '/admin/analytics' },
  { icon: 'sell', label: 'Plans', href: '/admin/plans' },
  { icon: 'campaign', label: 'Announcements', href: '/admin/announcements' },
  { icon: 'leaderboard', label: 'Leads', href: '/admin/leads' },
];

export function AdminSidebar({ activeItem = 'Overview' }: { activeItem?: string }) {
  return (
    <aside
      className="hidden md:flex flex-col h-screen w-64 sticky top-0 left-0 py-8 gap-2 z-40"
      style={{ background: VC.brandDark }}
    >
      <div className="px-8 mb-6">
        <h1 className="text-2xl font-black" style={{ color: VC.brandYellow, fontFamily: 'Epilogue, sans-serif' }}>InstaShop</h1>
        <p className="text-slate-400 text-sm mt-1">Admin Panel</p>
      </div>
      <nav className="flex-1 space-y-1">
        {adminNavItems.map((item) => {
          const isActive = item.label === activeItem;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-3 mx-4 px-6 py-3 rounded-full font-bold transition-all ${
                isActive ? 'bg-white/10' : 'text-slate-300 hover:bg-white/10 hover:text-yellow-400'
              }`}
              style={isActive ? { color: VC.brandYellow } : {}}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-slate-700/50 py-4 px-8">
        <p className="text-slate-500 text-xs">Super Admin</p>
      </div>
    </aside>
  );
}

// =====================================================
// FLOATING CREATOR BAR (Signature Component)
// =====================================================
export function CreatorFloatingBar() {
  return (
    <div
      className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 px-8 py-4 rounded-xl z-50"
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(255,209,102,0.2)',
      }}
    >
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full animate-pulse" style={{ background: VC.secondary }}></span>
        <span className="text-xs font-bold uppercase tracking-tighter" style={{ color: VC.onBackground }}>Live Creators: 1,402</span>
      </div>
      <div className="w-px h-6" style={{ background: VC.surfaceContainerHigh }}></div>
      <Link href="#" className="text-xs font-bold uppercase tracking-tighter transition-colors" style={{ color: VC.onSurfaceVariant }}>Support</Link>
      <Link href="#" className="text-xs font-bold uppercase tracking-tighter transition-colors" style={{ color: VC.onSurfaceVariant }}>Privacy</Link>
    </div>
  );
}

// =====================================================
// STATUS BADGE COMPONENT
// =====================================================
const statusColors: Record<string, { bg: string; text: string; dot: string }> = {
  delivered:   { bg: '#E8F5E9', text: '#2E7D32', dot: '#2E7D32' },
  shipped:     { bg: '#FFF3E0', text: '#E65100', dot: '#E65100' },
  processing:  { bg: '#FFF9C4', text: '#F57F17', dot: '#F57F17' },
  pending:     { bg: '#ffc2c9', text: '#920035', dot: '#b31446' },
  confirmed:   { bg: '#E3F2FD', text: '#1565C0', dot: '#1565C0' },
  cancelled:   { bg: '#FFEEE8', text: '#b02500', dot: '#b02500' },
  returned:    { bg: '#ffc2c9', text: '#920035', dot: '#b31446' },
  active:      { bg: '#E8F5E9', text: '#2E7D32', dot: '#4CAF50' },
  'low stock': { bg: '#FFF3E0', text: '#E65100', dot: '#F57C00' },
  draft:       { bg: '#E3F2FD', text: '#1565C0', dot: '#42A5F5' },
  'out of stock': { bg: '#ECEFF1', text: '#607D8B', dot: '#90A4AE' },
};

export function StatusBadge({ status, className = '' }: { status: string; className?: string }) {
  const key = status.toLowerCase();
  const colors = statusColors[key] || { bg: '#ECEFF1', text: '#607D8B', dot: '#90A4AE' };
  return (
    <span
      className={`inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full text-xs font-bold ${className}`}
      style={{ background: colors.bg, color: colors.text }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: colors.dot }}></span>
      {status}
    </span>
  );
}

// =====================================================
// STAT CARD
// =====================================================
interface StatCardProps {
  icon: string;
  label: string;
  value: string;
  badge?: string;
  badgeType?: 'positive' | 'warning' | 'action';
  borderColor?: string;
}

export function StatCard({ icon, label, value, badge, badgeType = 'positive', borderColor }: StatCardProps) {
  return (
    <div
      className="p-8 rounded-lg transition-all hover:-translate-y-1"
      style={{
        background: VC.surfaceContainerLowest,
        boxShadow: '0 8px 32px rgba(255,209,102,0.05)',
        borderLeft: borderColor ? `4px solid ${borderColor}` : undefined,
      }}
    >
      <div className="flex justify-between items-start">
        <div className="p-3 rounded-xl" style={{ background: `${VC.primaryContainer}33`, color: VC.primary }}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {badge && (
          <span
            className="font-bold text-sm px-2 py-1 rounded-md"
            style={{
              background: badgeType === 'positive' ? '#E8F5E9' : badgeType === 'warning' ? '#ffc2c9' : '#E3F2FD',
              color: badgeType === 'positive' ? '#2E7D32' : badgeType === 'warning' ? '#920035' : '#1565C0',
            }}
          >
            {badge}
          </span>
        )}
      </div>
      <p className="font-medium mt-6 text-sm uppercase tracking-wider" style={{ color: VC.onSurfaceVariant }}>{label}</p>
      <h3 className="text-3xl font-black mt-2" style={{ color: VC.onBackground, fontFamily: 'Epilogue, sans-serif' }}>{value}</h3>
    </div>
  );
}
