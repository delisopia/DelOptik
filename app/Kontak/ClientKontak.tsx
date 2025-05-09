'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Kontak() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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

      {/* Kontak Section */}
      <section className="text-center space-y-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700">Hubungi Kami</h1>
        <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto">
          Kami siap membantu Anda dengan pertanyaan atau permintaan lebih lanjut. Silakan isi form di bawah atau hubungi kami langsung.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mt-16">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Pesan</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <Button type="submit" className="mt-4 bg-purple-600 text-white hover:bg-purple-700">
            Kirim Pesan
          </Button>
        </form>
      </section>

      {/* Google Maps Embed */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-purple-700 mb-6">Lokasi Kami</h2>
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.27140816857556!2d105.18301217070643!3d-5.364609604975524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40cf14f7ed7105%3A0x8400817aa29111aa!2sINSTITUT%20TEKNOLOGI%20DAN%20BISNIS%20DINIYYAH%20LAMPUNG!5e0!3m2!1sen!2sid!4v1746793178374!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
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
