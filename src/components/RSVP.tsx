import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, Loader2, X } from 'lucide-react';
import { FloralTopLeft, FloralBottomRight, FloatingPetals } from './Ornaments';
import { sql } from '../lib/neon';

interface Message {
  id: number | string;
  nama: string;
  kehadiran?: string;
  pesan: string;
  tanggal: string;
}

const RSVP: React.FC = () => {
  const [nama, setNama] = useState('');
  const [kehadiran, setKehadiran] = useState('hadir');
  const [pesan, setPesan] = useState('');

  const [messages, setMessages] = useState<Message[]>([]);
  const [copiedBank, setCopiedBank] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState<{ isOpen: boolean; title: string; message: string; isError?: boolean }>({
    isOpen: false,
    title: '',
    message: '',
    isError: false,
  });

  // Mengambil data ucapan dari Neon DB saat komponen dimuat
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const data = await sql`SELECT * FROM guestbook ORDER BY tanggal DESC;`;

      if (data) {
        const formattedData: Message[] = data.map((item: any) => ({
          id: item.id,
          nama: item.nama,
          kehadiran: item.kehadiran,
          pesan: item.pesan,
          tanggal: new Date(item.tanggal).toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }));
        setMessages(formattedData);
      }
    } catch (err) {
      console.error("Gagal mengambil data dari Neon DB:", err);
      // Fallback data statis jika DB gagal
      setMessages([
        { id: '1', nama: 'Budi & Keluarga', kehadiran: 'hadir', pesan: 'Selamat menempuh hidup baru Putra & Ratu! Semoga samawa selalu.', tanggal: '12 Sep 2026, 10:00' },
        { id: '2', nama: 'Siti Aminah', kehadiran: 'hadir', pesan: 'Happy wedding! Semoga menjadi keluarga yang bahagia.', tanggal: '12 Sep 2026, 10:05' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) return;

    setIsSubmitting(true);
    try {
      const result = await sql`
        INSERT INTO guestbook (nama, kehadiran, pesan)
        VALUES (${nama}, ${kehadiran}, ${pesan})
        RETURNING *;
      `;

      if (result && result.length > 0) {
        await fetchMessages();
        setNama('');
        setPesan('');
        setModal({
          isOpen: true,
          title: 'Terima Kasih',
          message: 'Ucapan & doa restu Anda telah berhasil dikirim dan tersimpan untuk Ratu & Putra.',
          isError: false,
        });
      }
    } catch (err) {
      console.error("Gagal mengirim pesan ke Neon DB:", err);
      setModal({
        isOpen: true,
        title: 'Mohon Maaf',
        message: 'Terjadi kesalahan saat mengirim pesan. Silakan coba beberapa saat lagi.',
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = (acc: string, bankName: string) => {
    navigator.clipboard.writeText(acc);
    setCopiedBank(bankName);
    setTimeout(() => setCopiedBank(null), 2000);
  };

  return (
    <section id="rsvp" className="py-24 bg-background relative overflow-hidden">
      <FloatingPetals />
      <FloralTopLeft className="absolute top-0 left-0 p-2 md:p-4 opacity-40 pointer-events-none w-48 h-48 md:w-64 md:h-64" />
      <FloralBottomRight className="absolute bottom-0 right-0 p-2 md:p-4 opacity-40 pointer-events-none w-48 h-48 md:w-64 md:h-64" />

      {/* Toast Notification (Pop up berhasil disalin) */}
      <AnimatePresence>
        {copiedBank && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-heading/95 text-white px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 backdrop-blur-sm border border-primary/20"
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-sans font-medium text-sm tracking-wide">Nomor Rekening {copiedBank} Berhasil Disalin!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop Up Modal untuk Notifikasi Ucapan & Doa */}
      <AnimatePresence>
        {modal.isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setModal({ ...modal, isOpen: false })}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-10 max-w-sm w-full text-center shadow-2xl border-2 border-primary/30 relative overflow-hidden"
            >
              {/* Tombol Close X */}
              <button
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="absolute top-4 right-4 p-2 text-textMain/60 hover:text-textMain rounded-full hover:bg-secondary transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Ornamen sudut halus pada modal */}
              <img
                src="/Group of 348 Objects.svg"
                alt="Ornamen Sudut"
                className="absolute -top-3 -left-3 w-16 h-16 pointer-events-none opacity-60"
              />
              <img
                src="/Group of 348 Objects.svg"
                alt="Ornamen Sudut"
                className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none opacity-60 -scale-x-100"
              />

              <div className="w-16 h-16 bg-secondary/60 rounded-full flex items-center justify-center mx-auto mb-5 border border-primary/20 shadow-inner">
                <Heart className={`w-8 h-8 ${modal.isError ? 'text-red-400 fill-red-400' : 'text-primary fill-primary'} animate-pulse`} />
              </div>

              <h3 className="font-display text-3xl md:text-4xl text-heading mb-3">
                {modal.title}
              </h3>
              <p className="font-sans text-textMain/90 text-sm md:text-base leading-relaxed mb-8">
                {modal.message}
              </p>

              <button
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="w-full py-3.5 px-6 bg-primary hover:bg-heading text-white font-sans font-medium text-sm md:text-base rounded-xl transition-all shadow-md shadow-pink-200 hover:shadow-lg cursor-pointer"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-4xl relative z-10" data-aos="fade-up" data-aos-duration="1000">
        
        {/* Amplop Digital Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display text-heading mb-6">Amplop Digital</h2>
          <p className="text-textMain font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika Bapak/Ibu/Saudara/i ingin memberikan tanda kasih untuk kami, dapat melalui:
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {/* Bank BCA */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-pink-100 border border-secondary w-full max-w-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <h3 className="font-sans font-bold text-xl mb-2 text-textMain">Bank BCA</h3>
                <p className="font-mono text-2xl md:text-3xl tracking-wider text-heading mb-2 font-semibold">2833518399</p>
                <p className="font-sans text-sm text-textMain/80 mb-6">a.n Ratu Nabila</p>
              </div>
              <button 
                onClick={() => handleCopy("2833518399", "BCA")}
                className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-heading rounded-xl font-sans text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                {copiedBank === "BCA" ? "Berhasil Disalin!" : "Salin No. Rekening BCA"}
              </button>
            </div>

            {/* SeaBank */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-pink-100 border border-secondary w-full max-w-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
              <div>
                <h3 className="font-sans font-bold text-xl mb-2 text-textMain">SeaBank</h3>
                <p className="font-mono text-2xl md:text-3xl tracking-wider text-heading mb-2 font-semibold">901892794399</p>
                <p className="font-sans text-sm text-textMain/80 mb-6">a.n Ratu Nabila</p>
              </div>
              <button 
                onClick={() => handleCopy("901892794399", "SeaBank")}
                className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-heading rounded-xl font-sans text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                {copiedBank === "SeaBank" ? "Berhasil Disalin!" : "Salin No. Rekening SeaBank"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Guestbook Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-pink-100 border border-secondary relative overflow-hidden"
        >
          {/* Sudut Dekoratif Kartu Buku Tamu */}
          <img src="/Group of 348 Objects.svg" alt="Sudut Kartu" className="absolute -top-3 -left-3 w-16 h-16 md:w-24 md:h-24 pointer-events-none opacity-80 z-20" />
          <img src="/Group of 348 Objects.svg" alt="Sudut Kartu" className="absolute -top-3 -right-3 w-16 h-16 md:w-24 md:h-24 pointer-events-none opacity-80 -scale-x-100 z-20" />
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-display text-heading mb-2">Ucapan & Doa</h2>
            <p className="text-textMain font-sans text-sm">Tinggalkan pesan untuk kedua mempelai</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form Input */}
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="nama" className="block text-sm font-sans font-medium text-textMain mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    id="nama" 
                    name="nama" 
                    required
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans text-textMain disabled:opacity-50"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="kehadiran" className="block text-sm font-sans font-medium text-textMain mb-2">Konfirmasi Kehadiran</label>
                  <select
                    id="kehadiran"
                    name="kehadiran"
                    value={kehadiran}
                    onChange={(e) => setKehadiran(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans text-textMain disabled:opacity-50"
                  >
                    <option value="hadir">Hadir</option>
                    <option value="tidak hadir">Tidak Hadir</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-sans font-medium text-textMain mb-2">Pesan & Doa</label>
                  <textarea 
                    id="pesan" 
                    name="pesan" 
                    rows={4}
                    required
                    value={pesan}
                    onChange={(e) => setPesan(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans text-textMain resize-none disabled:opacity-50"
                    placeholder="Berikan ucapan atau doa untuk kedua mempelai..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-heading text-white font-sans font-medium py-4 rounded-xl transition-colors shadow-md shadow-pink-200 mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      Kirim Ucapan
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Messages List (Scrollable) */}
            <div className="bg-background rounded-2xl p-6 h-[400px] overflow-y-auto border border-secondary shadow-inner">
              <h3 className="font-sans font-medium text-textMain mb-4 border-b border-secondary pb-2 sticky top-0 bg-background z-10 py-2">
                {messages.length} Pesan
              </h3>
              
              <div className="flex flex-col gap-4">
                {isLoading ? (
                  <div className="flex justify-center items-center py-10 text-primary">
                    <Loader2 className="w-8 h-8 animate-spin" />
                  </div>
                ) : (
                  <>
                    <AnimatePresence>
                      {messages.map((msg) => (
                        <motion.div 
                          key={msg.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-white p-4 rounded-xl shadow-sm border border-secondary/50"
                        >
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="font-sans font-bold text-heading text-sm">{msg.nama}</span>
                            <span className="text-xs text-textMain/50 bg-secondary px-2 py-1 rounded-full">{msg.tanggal}</span>
                          </div>
                          <p className="font-sans text-sm text-textMain leading-relaxed">{msg.pesan}</p>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                    
                    {messages.length === 0 && !isLoading && (
                      <div className="text-center text-textMain/70 py-14 px-4 font-sans flex flex-col items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center border border-primary/20 text-primary shadow-inner">
                          <Heart className="w-6 h-6 fill-primary/20 animate-pulse" />
                        </div>
                        <p className="font-semibold text-base text-heading">Belum ada ucapan & doa restu</p>
                        <p className="text-sm text-textMain/70 max-w-xs">
                          Jadilah yang pertama menuliskan ucapan dan doa untuk kedua mempelai!
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
