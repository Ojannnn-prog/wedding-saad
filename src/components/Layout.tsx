import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <main className="flex-grow">
        {children}
      </main>

      {/* Floating Bottom Navigation */}
      <Navigation />

      {/* Footer */}
      <footer className="bg-secondary py-12 text-center relative z-10 border-t border-primary/10 pb-28">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl text-heading mb-2">Terima Kasih</h2>
          <p className="text-sm text-textMain/80 font-sans">Atas kehadiran, doa dan restu yang telah diberikan.</p>
          <div className="mt-8">
            <h3 className="font-serif text-2xl text-heading">Putra & Ratu</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
