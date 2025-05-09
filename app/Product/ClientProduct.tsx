'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Produk() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const produkList = [
    { nama: 'Kacamata Fashion Hitam', harga: 'Rp150.000', gambar: '/images/p1.jpeg' },
    { nama: 'Kacamata Medis Minus', harga: 'Rp200.000', gambar: '/images/p2.jpeg' },
    { nama: 'Paket Bundling Elegan', harga: 'Rp350.000', gambar: '/images/p3.jpeg' },
    { nama: 'Cleaner & Aksesoris', harga: 'Rp75.000', gambar: '/images/p4.jpeg' }
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

      {/* Produk Section */}
      <section className="pt-24">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-10">Daftar Produk</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {produkList.map((produk, i) => (
            <Card key={i} className="bg-purple-50">
              <CardContent className="p-4">
                <div className="relative w-full aspect-square mb-4">
                  <Image src={produk.gambar} alt={produk.nama} fill className="object-cover rounded-xl" />
                </div>
                <h2 className="text-lg font-semibold text-purple-800 mb-1">{produk.nama}</h2>
                <p className="text-sm text-gray-700 mb-3">{produk.harga}</p>
                <Button className="bg-purple-600 text-white hover:bg-purple-700 w-full">Beli Sekarang</Button>
              </CardContent>
            </Card>
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
