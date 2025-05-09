'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Beranda() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const layanan = [
    { icon: '🕶️', title: 'Kacamata Fashion', desc: 'Desain modern dan stylish untuk menunjang penampilan sehari-hari.' },
    { icon: '👓', title: 'Kacamata Medis', desc: 'Lensa minus, plus, dan silinder dengan kualitas tinggi.' },
    { icon: '🧼', title: 'Aksesoris & Perawatan', desc: 'Pembersih lensa, kotak kacamata, dan aksesoris pendukung lainnya.' },
    { icon: '📦', title: 'Paket Bundling Spesial', desc: 'Paket hemat berisi kacamata favorit dan aksesoris pilihan.' },
  ];

  const testimoni = [
    { nama: 'Andi S.', komentar: 'Kacamata sangat nyaman dipakai, dan desainnya keren banget!', foto: '/images/p1.jpeg' },
    { nama: 'Lina M.', komentar: 'Pelayanan cepat dan produk original. Sangat puas dengan pembelian di sini.', foto: '/images/p3.jpeg' },
    { nama: 'Yoga T.', komentar: 'Paket bundling sangat worth it, kualitas top dan harga terjangkau.', foto: '/images/p4.jpeg' }
  ];

  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32 bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-purple-100 w-full fixed top-0 right-0 z-50 border-b border-purple-200 shadow-md">
        <div className="mr-10 ml-4">
          <Link href="/" className="block">
            <Image src="/images/logo.jpg" alt="Logo" width={80} height={10} priority />
          </Link>
        </div>

        <div className="lg:hidden pr-4" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-purple-700" /> : <Menu className="w-6 h-6 text-purple-700" />}
        </div>

        <nav className={`lg:flex space-x-6 ${isMenuOpen ? 'block mt-4' : 'hidden'} lg:block w-full ml-auto justify-end pr-5`}>
          <Link href="/" className="text-lg hover:text-purple-600 block py-2">Beranda</Link>
          <Link href="/Product" className="text-lg hover:text-purple-600 block py-2">Produk</Link>
          <Link href="/Kontak" className="text-lg hover:text-purple-600 block py-2">Kontak</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center space-y-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700">Toko Kacamata & Aksesoris Berkualitas</h1>
        <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto">
          Menyediakan berbagai jenis kacamata dengan desain terkini dan kualitas terbaik.
        </p>
        <Link href="/Kontak">
          <Button size="lg" className='mt-4 bg-purple-600 text-white hover:bg-purple-700'>Yuk Tanya!</Button>
        </Link>
      </section>

      {/* Tentang Kami */}
      <section id="tentang-kami" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-purple-700">Tentang Kami</h2>
          <p className="text-gray-700">
            OpticVision adalah perusahaan yang menjual kacamata dan aksesoris optik dengan kualitas premium serta pelayanan pelanggan terbaik.
          </p>
        </div>
        <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md">
          <Image src="/images/logo.jpg" alt="Tentang Kami" fill className="object-cover rounded-2xl" priority />
        </div>
      </section>

      {/* Layanan Kami */}
      <section id="layanan-kami">
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">Produk & Layanan</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {layanan.map((item, i) => (
            <Card key={i} className="text-center p-4 bg-purple-50">
              <CardContent>
                <div className="mb-2 text-purple-600 text-2xl">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1 text-purple-800">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimoni */}
      <section id="testimoni" className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6 text-purple-700">Testimoni Pelanggan</h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide px-2">
          {testimoni.map((t, i) => (
            <div key={i} className="min-w-[300px] bg-purple-50 rounded-xl shadow p-4 flex-shrink-0">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <Image src={t.foto} alt={t.nama} fill className="object-cover rounded-full" />
              </div>
              <p className="italic text-sm text-gray-700 mb-2">"{t.komentar}"</p>
              <p className="text-purple-800 font-semibold text-center">{t.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-100 border-t border-purple-200 mt-16 py-6 px-4 md:px-20 lg:px-32">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-700 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.jpg" alt="Logo" width={40} height={40} className="rounded-full" />
            <span className="font-semibold text-purple-800">DelOptik</span>
          </div>

          <div className="flex space-x-4">
            <Link href="/" className="hover:text-purple-600">Beranda</Link>
            <Link href="/Product" className="hover:text-purple-600">Produk</Link>
            <Link href="/Kontak" className="hover:text-purple-600">Kontak</Link>
          </div>

          <div className="text-center md:text-right text-xs text-gray-600">
            <p>Email: deloptik@gmail.com</p>
            <p>Telp: +62 812-3456-9876</p>
          </div>
        </div>

        <div className="mt-4 text-center text-purple-600 text-xs">
          <p>&copy; 2025 DelOptik. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
