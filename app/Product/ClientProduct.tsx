'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Product() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Tambahkan gambar spesifik di setiap produk
  const produk = [
    { nama: 'Lipstik Matte', gambar: '/images/p1.jpeg' },
    { nama: 'Foundation', gambar: '/images/p2.jpeg' },
    { nama: 'Skincare', gambar: '/images/p3.jpeg' },
    { nama: 'MakeUp', gambar: '/images/p4.jpeg' },
    { nama: 'Body Lotion', gambar: '/images/p5.jpeg' },
    { nama: 'Facial Wash', gambar: '/images/p6.jpeg' },
  ];

  return (
    <main className="space-y-16 px-4 py-10 md:px-20 lg:px-32 bg-white text-pink-800">
      {/* Navbar */}
      <header className="flex justify-between items-center py-1 bg-pink-100 w-full fixed top-0 right-0 z-50 border-b border-pink-200 shadow-md">
        <div className="mr-10 ml-4">
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

      {/* Judul Halaman */}
      <section className="text-center pt-20">
        <h1 className="text-4xl font-bold mb-4">Daftar Produk</h1>
        <p className="text-pink-600">Temukan produk kecantikan terbaik pilihan kami.</p>
      </section>

      {/* Daftar Produk */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {produk.map((item, i) => (
          <Card key={i} className="bg-pink-50 text-center p-4 shadow rounded-2xl">
            <CardContent>
              <div className="w-full h-40 relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={item.gambar} // Menggunakan gambar spesifik untuk produk
                  alt={item.nama}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.nama}</h3>
              <p className="text-sm text-pink-700 mt-1">Harga mulai dari Rp 50.000</p>
              <Button size="sm" className="mt-3 bg-pink-500 text-white hover:bg-pink-600">Lihat Detail</Button>
            </CardContent>
          </Card>
        ))}
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
