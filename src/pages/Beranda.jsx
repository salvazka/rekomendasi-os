import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Zap, Users, Sparkles, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function Beranda() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const stats = JSON.parse(localStorage.getItem('konsultasi_history') || '[]');

  const features = [
    {
      icon: Cpu,
      title: 'Analisis Spesifikasi',
      desc: 'RAM, storage, dan processor dianalisis untuk menentukan OS yang optimal.',
    },
    {
      icon: Shield,
      title: 'Rekomendasi Legal',
      desc: 'Hanya OS resmi, gratis, atau berlisensi. Tanpa versi bajakan.',
    },
    {
      icon: Zap,
      title: 'Hasil Instan',
      desc: 'Jawab 8 pertanyaan, dapatkan rekomendasi dengan confidence score.',
    },
    {
      icon: Users,
      title: 'Berbasis Pakar',
      desc: 'Knowledge base dari wawancara langsung dengan teknisi komputer.',
    },
  ];

  const steps = [
    { num: '01', title: 'Isi Spesifikasi', desc: 'Masukkan info laptop Anda: RAM, storage, processor.' },
    { num: '02', title: 'Pilih Kebutuhan', desc: 'Tentukan kebutuhan, jurusan, dan prioritas Anda.' },
    { num: '03', title: 'Dapatkan Hasil', desc: 'Sistem merekomendasikan OS terbaik beserta alasannya.' },
  ];

  const faqs = [
    {
      q: 'Apa itu Sistem Pakar?',
      a: 'Sistem Pakar adalah aplikasi yang menggunakan pengetahuan dari para ahli untuk memberikan rekomendasi terbaik. Dalam hal ini, kami menggunakan pengetahuan teknisi berpengalaman untuk merekomendasikan OS yang sesuai dengan spesifikasi laptop Anda.',
    },
    {
      q: 'Bagaimana cara sistem menentukan OS terbaik?',
      a: 'Sistem menganalisis spesifikasi hardware laptop Anda (RAM, processor, storage), kebutuhan pengguna (gaming, desain, programming), dan prioritas Anda. Kemudian menggunakan mesin inferensi untuk mencocokkan dengan knowledge base yang telah dikurasi oleh para ahli.',
    },
    {
      q: 'Berapa lama proses konsultasi?',
      a: 'Konsultasi hanya membutuhkan waktu 2-3 menit. Anda hanya perlu menjawab 8 pertanyaan sederhana tentang spesifikasi dan kebutuhan laptop Anda.',
    },
    {
      q: 'OS apa saja yang bisa direkomendasikan?',
      a: 'Sistem merekomendasikan OS resmi dan legal seperti Windows, macOS, Linux (berbagai distro), dan ChromeOS. Semua rekomendasi 100% legal dan tidak ada versi bajakan.',
    },
    {
      q: 'Apakah hasil rekomendasi selalu akurat?',
      a: 'Tingkat akurasi tergantung pada informasi yang Anda berikan. Semakin detail dan akurat data spesifikasi laptop dan kebutuhan Anda, semakin akurat rekomendasi yang diberikan. Setiap rekomendasi dilengkapi dengan confidence score.',
    },
    {
      q: 'Dapatkah saya melihat riwayat konsultasi saya?',
      a: 'Ya, semua riwayat konsultasi disimpan di browser Anda. Anda bisa melihat riwayat kapan saja melalui menu "Lihat Riwayat" atau di halaman Riwayat.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-5 pt-24 pb-20 sm:pt-32 sm:pb-28 min-h-[85vh]">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full glass-light text-purple-300 text-sm font-medium tracking-wide">
            <Sparkles className="w-4 h-4" />
            Sistem Pakar Berbasis Web
          </div>
        </div>

        <h1 className="animate-fade-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] max-w-2xl tracking-tight">
          Temukan OS Terbaik
          <br />
          <span className="shimmer-text">untuk Laptop Anda</span>
        </h1>

        <p className="animate-fade-up delay-200 mt-6 text-lg sm:text-xl text-gray-200 max-w-lg leading-relaxed">
          Jawab 8 pertanyaan sederhana dan biarkan mesin inferensi kami
          merekomendasikan sistem operasi yang paling sesuai.
        </p>

        <div className="animate-fade-up delay-300 mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to="/konsultasi"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl shadow-purple-600/20 hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] text-lg"
          >
            Mulai Konsultasi
            <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          {stats.length > 0 && (
            <Link
              to="/riwayat"
              className="inline-flex items-center gap-2 px-6 py-3 glass-light rounded-xl text-gray-200 text-base font-medium hover:text-white transition-colors"
            >
              Lihat Riwayat ({stats.length})
            </Link>
          )}
        </div>

        {stats.length > 0 && (
          <p className="animate-fade-in delay-500 mt-6 text-gray-400 text-sm">
            {stats.length} konsultasi telah dilakukan
          </p>
        )}
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-20">
        <h2 className="text-center text-gray-300 text-sm font-semibold uppercase tracking-widest mb-12">
          Cara Kerja
        </h2>
        <div className="grid w-full max-w-4xl mx-auto sm:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="glass rounded-2xl p-6 text-center animate-fade-up" style={{ animationDelay: `${i * 0.1 + 0.1}s` }}>
              <span className="text-purple-400 text-5xl font-black">{s.num}</span>
              <h3 className="text-white font-semibold text-lg mt-4 mb-2">{s.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <h2 className="text-center text-gray-300 text-sm font-semibold uppercase tracking-widest mb-12">
          Fitur Utama
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="glass-light rounded-xl p-6 text-center hover:bg-white/[0.08] transition-colors duration-300 group animate-fade-up"
              style={{ animationDelay: `${i * 0.08 + 0.1}s` }}
            >
              <div className="w-11 h-11 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 flex items-center justify-center mx-auto mb-4 transition-colors">
                <f.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 pb-24">
        <h2 className="text-center text-gray-300 text-sm font-semibold uppercase tracking-widest mb-12">
          Pertanyaan Umum
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-xl overflow-hidden animate-fade-up transition-all duration-300"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/[0.06] transition-colors"
              >
                <h3 className="text-white font-semibold text-base text-left">{faq.q}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                    expandedFaq === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedFaq === i && (
                <div className="px-6 py-4 border-t border-white/[0.05] bg-white/[0.02]">
                  <p className="text-gray-300 text-base leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
