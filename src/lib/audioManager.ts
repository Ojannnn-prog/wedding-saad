export interface Track {
  title: string;
  src: string;
}

export const tracks: Track[] = [
  {
    title: "Terbuang Dalam Waktu (Barasuara)",
    src: "/Barasuara Instrumen - Terbuang dalam waktu.mpeg"
  },
  {
    title: "Beautiful In White",
    src: "/Beautiful In White - Saxserenade (Westlife - Saxophone Cover) - SaxSerenade.mp3"
  },
  {
    title: "Janji Suci",
    src: "/Janji Suci - Yovie & Nuno (Saxophone Cover by Dori Wirawan) - dori wirawan.mp3"
  }
];

// Inisialisasi audio secara global agar bisa dipanggil langsung di dalam event handler (mengatasi bug Autoplay browser)
export const globalAudio = new Audio();
globalAudio.src = tracks[0].src;
globalAudio.loop = false; // Atur false agar event 'ended' terpicu dan bersambung ke lagu berikutnya

let currentTrackIndex = 0;
const listeners: ((index: number) => void)[] = [];

export const getCurrentTrackIndex = () => currentTrackIndex;

export const subscribeTrackChange = (callback: (index: number) => void) => {
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx > -1) listeners.splice(idx, 1);
  };
};

export const playTrack = (index: number) => {
  currentTrackIndex = index % tracks.length;
  globalAudio.src = tracks[currentTrackIndex].src;
  globalAudio.play().catch(e => console.error("Audio play failed:", e));
  listeners.forEach(cb => cb(currentTrackIndex));
};

export const playNextTrack = () => {
  const nextIndex = (currentTrackIndex + 1) % tracks.length;
  playTrack(nextIndex);
};

// Event listener global: ketika lagu selesai, otomatis putar lagu berikutnya (bersambung & looping!)
globalAudio.addEventListener('ended', () => {
  playNextTrack();
});
