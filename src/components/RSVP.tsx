import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Copy, QrCode } from 'lucide-react';
import { FloralTopLeft, FloralBottomRight, FloatingPetals } from './Ornaments';

interface Message {
  id: number;
  nama: string;
  pesan: string;
  tanggal: string;
}

const RSVP: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    pesan: ''
  });

  const [messages, setMessages] = useState<Message[]>([
    { id: 1, nama: "Budi & Keluarga", pesan: "Selamat menempuh hidup baru Putra & Ratu! Semoga samawa.", tanggal: "Baru saja" },
    { id: 2, nama: "Siti", pesan: "Lancar sampai hari H yaa, doa terbaik untuk kalian berdua.", tanggal: "2 jam yang lalu" }
  ]);

  const [isCopied, setIsCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.nama.trim() === '' || formData.pesan.trim() === '') return;

    const newMessage: Message = {
      id: Date.now(),
      nama: formData.nama,
      pesan: formData.pesan,
      tanggal: "Baru saja"
    };

    setMessages([newMessage, ...messages]);
    setFormData({ nama: '', pesan: '' });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("1234567890");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="rsvp" className="py-24 bg-background relative overflow-hidden">
      <FloatingPetals />
      <FloralTopLeft className="absolute top-0 left-0 p-2 md:p-4 opacity-40 pointer-events-none w-48 h-48 md:w-64 md:h-64" />
      <FloralBottomRight className="absolute bottom-0 right-0 p-2 md:p-4 opacity-40 pointer-events-none w-48 h-48 md:w-64 md:h-64" />

      {/* Toast Notification (Pop up berhasil disalin) */}
      <AnimatePresence>
        {isCopied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-heading/95 text-white px-6 py-3 rounded-full shadow-2xl z-[100] flex items-center gap-3 backdrop-blur-sm border border-primary/20"
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <span className="font-sans font-medium text-sm tracking-wide">Nomor Rekening Berhasil Disalin!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        
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

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Bank Transfer */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-pink-100 border border-secondary w-full max-w-sm hover:-translate-y-1 transition-transform">
              <h3 className="font-sans font-bold text-xl mb-2 text-textMain">Bank BCA</h3>
              <p className="font-mono text-2xl tracking-widest text-heading mb-2">1234 5678 90</p>
              <p className="font-sans text-sm text-textMain/80 mb-6">a.n Putra</p>
              <button 
                onClick={handleCopy}
                className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-heading rounded-xl font-sans text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <Copy className="w-4 h-4" />
                {isCopied ? "Berhasil Disalin!" : "Salin No. Rekening"}
              </button>
            </div>

            {/* QRIS Placeholder */}
            <div className="bg-white p-8 rounded-2xl shadow-lg shadow-pink-100 border border-secondary w-full max-w-sm flex flex-col items-center justify-center hover:-translate-y-1 transition-transform">
              <div className="w-36 h-36 bg-gray-50 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
                <QrCode className="w-16 h-16 text-gray-400" />
              </div>
              <p className="font-sans text-sm text-textMain/80 text-center font-medium">Scan QRIS<br/><span className="text-xs font-normal">(Akan ditambahkan nanti)</span></p>
            </div>
          </div>
        </motion.div>

        {/* Guestbook Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-pink-100 border border-secondary"
        >
          <div className="text-center mb-8">
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
                    value={formData.nama}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans text-textMain"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label htmlFor="pesan" className="block text-sm font-sans font-medium text-textMain mb-2">Pesan & Doa</label>
                  <textarea 
                    id="pesan" 
                    name="pesan" 
                    rows={5}
                    required
                    value={formData.pesan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-secondary bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-sans text-textMain resize-none"
                    placeholder="Berikan ucapan atau doa untuk kedua mempelai..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-heading text-white font-sans font-medium py-4 rounded-xl transition-colors shadow-md shadow-pink-200 mt-2 flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Kirim Ucapan
                </button>
              </form>
            </div>

            {/* Messages List (Scrollable) */}
            <div className="bg-background rounded-2xl p-6 h-[400px] overflow-y-auto border border-secondary shadow-inner">
              <h3 className="font-sans font-medium text-textMain mb-4 border-b border-secondary pb-2 sticky top-0 bg-background z-10 py-2">
                {messages.length} Pesan
              </h3>
              <div className="flex flex-col gap-4">
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
                {messages.length === 0 && (
                  <div className="text-center text-textMain/50 py-10 font-sans text-sm">
                    Belum ada ucapan. Jadilah yang pertama!
                  </div>
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
