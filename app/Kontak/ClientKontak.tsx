'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Kontak() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32 bg-white text-pink-800">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-pink-100 w-full fixed top-0 right-0 z-50 border-b border-pink-200 shadow-md">
        <div className="mr-10 ml-4">
          <Link href="/" className="block">
            <div className="w-20 h-12 rounded-lg overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={80}
                height={48}
                priority
              />
            </div>
          </Link>
        </div>

        <div className="lg:hidden pr-4" onClick={toggleMenu}>
          {isMenuOpen ? <X className="w-6 h-6 text-pink-800" /> : <Menu className="w-6 h-6 text-pink-800" />}
        </div>

        <nav className={`lg:flex space-x-6 ${isMenuOpen ? 'block mt-4' : 'hidden'} lg:block w-full ml-auto justify-end pr-5`}>
          <Link href="/" className="text-lg hover:text-pink-500 block py-2">Beranda</Link>
          <Link href="/Product" className="text-lg hover:text-pink-500 block py-2">Product</Link>
          <Link href="/Kontak" className="text-lg hover:text-pink-500 block py-2">Kontak</Link>
        </nav>
      </header>

      {/* Formulir Kontak */}
      <section className="pt-28 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-pink-700 mb-6">
          Kami siap membantu menjawab pertanyaan Anda mengenai produk dan layanan kami.
        </p>

        {/* Formulir Kontak */}
        <form className="space-y-6 bg-pink-50 p-6 rounded-md shadow-md text-left">
          <div>
            <label htmlFor="name" className="block text-lg font-semibold">Nama</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama Anda"
              className="w-full p-3 mt-2 border border-pink-200 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              className="w-full p-3 mt-2 border border-pink-200 rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-semibold">Pesan</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tulis pesan Anda"
              className="w-full p-3 mt-2 border border-pink-200 rounded-md"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <Button type="submit" className="bg-pink-700 text-white hover:bg-pink-800">Kirim Pesan</Button>
          </div>
        </form>
      </section>

      {/* Google Maps */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center text-pink-800 mb-4">Lokasi Kami</h2>
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d248.2716513067324!2d105.18600533486752!3d-5.364012038843092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1746745549888!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Konten Kontak */}
      <section className="max-w-3xl mx-auto text-center mt-12">
        <Card className="bg-pink-50 p-6">
          <CardContent className="space-y-4 text-left">
            <div>
              <p className="font-semibold">Email:</p>
              <p>beautystore@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold">WhatsApp / Telepon:</p>
              <p>+62 812-3456-7890</p>
            </div>
            <div>
              <p className="font-semibold">Alamat Toko:</p>
              <p>Jl. Ganjaran, Negeri Sakti, Kec. Gedong Tataan, Kabupaten Pesawaran, Lampung 35366</p>
            </div>
            <div>
              <p className="font-semibold">Jam Operasional:</p>
              <p>Senin - Sabtu, 09:00 - 18:00 WIB</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-pink-100 border-t border-pink-200 mt-16 pt-10 pb-6 px-4 md:px-20 lg:px-32">
        <div className="grid md:grid-cols-4 gap-8 text-sm text-pink-700">
          <div>
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Tentang Kami</h3>
            <p>Toko online alat dan produk kecantikan terpercaya dengan layanan ramah.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Kategori</h3>
            <ul className="space-y-1">
              <li><Link href="/#layanan-kami" className="hover:text-pink-500">Makeup</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-pink-500">Skincare</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-pink-500">Haircare</Link></li>
              <li><Link href="/#layanan-kami" className="hover:text-pink-500">Bundling</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Navigasi</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-pink-500">Beranda</Link></li>
              <li><Link href="/Product" className="hover:text-pink-500">Product</Link></li>
              <li><Link href="/Kontak" className="hover:text-pink-500">Kontak</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-pink-800 mb-2">Kontak</h3>
            <p>Email: beautystore@gmail.com<br />Phone: +62 812-3456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center text-pink-600 text-sm">
          <p>&copy; 2025 BeautyStore. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
