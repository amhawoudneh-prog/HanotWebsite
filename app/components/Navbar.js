"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={scrolled ? "glass scrolled" : "glass"}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '0.5rem 0' : '1rem 0'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Image
                        src="/images/logo_2.png"
                        alt="Hanot Logo"
                        width={50}
                        height={50}
                        style={{ borderRadius: '4px' }}
                    />
                    <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-serif)', fontWeight: 'bold', letterSpacing: '2px' }}>
                        HANOT
                    </span>
                </Link>
                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontSize: '0.9rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <Link href="/kitchen" className="nav-link">Kitchen</Link>
                    <Link href="/butchery" className="nav-link">Butchery</Link>
                    <Link href="/menu" className="nav-link">Menu</Link>
                    <Link href="/about" className="nav-link">About</Link>
                    <Link href="/contact" className="nav-link">Contact</Link>
                    <Link href="/#reservations" className="btn btn-primary" style={{ padding: '0.6rem 1.2rem' }}>
                        Book Now
                    </Link>
                </div>
            </div>

            <style jsx>{`
        .scrolled {
          background: rgba(23, 23, 23, 0.95) !important;
          box-shadow: 0 4px 20px rgba(0,0,0,0.5);
        }
        .nav-link {
          position: relative;
          color: white;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        .nav-link:hover {
          opacity: 1;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
        </motion.nav>
    );
}
