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
    {
      icon: '💄',
      title: 'Makeup & Kosmetik',
      desc: 'Berbagai produk makeup dari brand lokal dan internasional.'
    },
    {
      icon: '🧴',
      title: 'Perawatan Kulit',
      desc: 'Rangkaian skincare untuk semua jenis kulit dan kebutuhan.'
    },
    {
      icon: '💇‍♀️',
      title: 'Perawatan Rambut',
      desc: 'Shampo, masker, serum, dan alat styling untuk rambut sehat dan indah.'
    },
    {
      icon: '🛍️',
      title: 'Paket Bundling Hemat',
      desc: 'Paket hemat berisi produk favorit pilihan pelanggan.'
    },
  ];

  const testimoni = [
    {
      nama: 'Dina A.',
      komentar: 'Produk lengkap dan pengiriman cepat. Toko ini jadi langganan saya!',
      foto: '/images/p1.jpeg'
    },
    {
      nama: 'Rika M.',
      komentar: 'Pelayanan sangat ramah dan produk selalu original. Recommended!',
      foto: '/images/p3.jpeg'
    },
    {
      nama: 'Tasya N.',
      komentar: 'Suka banget sama bundling-nya, harganya hemat dan isinya komplit.',
      foto: '/images/p4.jpeg'
    }
  ];

  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32 bg-white text-pink-800">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-pink-100 w-full fixed top-0 right-0 z-50 border-b border-pink-200 shadow-md">
        <div className="mr-10 ml-4 ">
          <Link href="/" className="block">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              width={80}
              height={10}
              priority
            />
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

      {/* Hero Section */}
      <section className="text-center space-y-4 pt-20">
        <h1 className="text-4xl md:text-6xl font-bold">Toko Online Alat & Produk Kecantikan</h1>
        <p className="text-lg md:text-xl text-pink-600 max-w-2xl mx-auto">
          Menyediakan berbagai produk dan layanan kecantikan terbaik untuk Anda.
        </p>
        <Link href="/Kontak">
          <Button size="lg" className='mt-4 bg-pink-500 text-white hover:bg-pink-600'>Konsultasi</Button>
        </Link>
      </section>

      {/* Tentang Kami */}
      <section id="tentang-kami" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tentang Kami</h2>
          <p className="text-pink-700">
            BeautyStore adalah toko online yang menyediakan produk dan alat kecantikan berkualitas tinggi dengan pelayanan ramah dan pengiriman cepat.
          </p>
        </div>
        <div className="w-full aspect-[4/3] relative rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/logo.jpg"
            alt="Tentang Kami"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* Layanan Kami */}
      <section id="layanan-kami">
        <h2 className="text-2xl font-semibold text-center mb-6">Produk & Layanan</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {layanan.map((item, i) => (
            <Card key={i} className="text-center p-4 bg-pink-50">
              <CardContent>
                <div className="mb-2 text-pink-600 text-2xl">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-pink-700">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimoni Slider */}
      <section id="testimoni" className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Testimoni Pelanggan</h2>
        <div className="flex overflow-x-auto gap-6 scrollbar-hide px-2">
          {testimoni.map((t, i) => (
            <div key={i} className="min-w-[300px] bg-pink-50 rounded-xl shadow p-4 flex-shrink-0">
              <div className="w-16 h-16 mx-auto mb-2 relative">
                <Image src={t.foto} alt={t.nama} fill className="object-cover rounded-full" />
              </div>
              <p className="italic text-sm text-pink-700 mb-2">"{t.komentar}"</p>
              <p className="text-pink-800 font-semibold text-center">{t.nama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Penutup */}
      <section className="w-full text-center bg-pink-100 py-10 rounded-xl mt-16">
        <h2 className="text-2xl font-semibold mb-2">Cari Produk Kecantikan Terbaik?</h2>
        <p className="text-pink-700 mb-4">Temukan semua kebutuhan kecantikan Anda di BeautyStore.</p>
        <Link href="/Product">
          <Button size="lg" className='bg-pink-500 text-white hover:bg-pink-600'>Lihat Product</Button>
        </Link>
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