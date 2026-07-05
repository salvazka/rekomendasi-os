import { Link, useLocation } from 'react-router-dom';
import { Monitor, Home, ClipboardList, History } from 'lucide-react';
import PixelBlast from '../PixelBlast';

export default function Layout({ children }) {
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Beranda', icon: Home },
    { to: '/konsultasi', label: 'Konsultasi', icon: ClipboardList },
    { to: '/riwayat', label: 'Riwayat', icon: History },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* PixelBlast background - reduced intensity */}
      <div className="fixed inset-0 z-0">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#B497CF"
          patternScale={2}
          patternDensity={0.5}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.08}
          rippleIntensityScale={0.8}
          liquid={false}
          liquidStrength={0.08}
          liquidRadius={1}
          liquidWobbleSpeed={3}
          speed={0.4}
          edgeFade={0.3}
          transparent
        />
      </div>

      {/* Strong gradient overlay - protect text readability */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(7,7,13,0.75) 0%, rgba(7,7,13,0.60) 40%, rgba(7,7,13,0.75) 100%)',
        }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center group-hover:bg-purple-500/25 transition-colors">
              <Monitor className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-white font-bold text-[15px] tracking-tight">
              SistemPakar<span className="text-purple-400">OS</span>
            </span>
          </Link>
          <div className="flex items-center gap-0.5">
            {navItems.map(item => {
              const active = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    active
                      ? 'bg-purple-500/20 text-purple-300 shadow-sm shadow-purple-500/10'
                      : 'text-white/50 hover:text-white/80 hover:bg-white/[0.04]'
                  }`}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="relative z-10">{children}</main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.04] py-6 text-center">
        <p className="text-white/25 text-xs">
          Sistem Pakar Rekomendasi OS &middot; Berbasis Forward Chaining
        </p>
      </footer>
    </div>
  );
}
