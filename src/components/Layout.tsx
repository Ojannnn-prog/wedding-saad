import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background">
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - Ditambahkan padding bawah yang panjang agar tulisan tidak tertutupi border bawah */}
      <footer className="bg-secondary pt-16 pb-56 md:pb-64 text-center relative z-10 border-t border-primary/10">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="font-display text-4xl md:text-5xl text-heading mb-3">Terima Kasih</h2>
          <p className="text-sm md:text-base text-textMain/90 font-sans leading-relaxed mb-8">
            Atas kehadiran, doa dan restu yang telah diberikan kepada kami.
          </p>
          <div className="mt-4 mb-16">
            <h3 className="font-serif text-3xl md:text-4xl text-heading font-bold tracking-wide">Ratu & Putra</h3>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
