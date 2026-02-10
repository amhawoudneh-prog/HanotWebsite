"use client";
import styles from './page.module.css';
import Navbar from './components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Reservations from './components/Reservations';
import Gallery from './components/Gallery';

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Split Hero Section */}
      <section className={styles.hero}>
        {/* Kitchen Side */}
        <Link href="/kitchen" className={styles.split}>
          <Image
            src="/images/home_kitchen_final.jpg"
            alt="Hanot Kitchen"
            fill
            className={styles.bgImage}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>Hanot Kitchen</h1>
            <p className={styles.subtitle}>The Heart of Piassa</p>
            <div className={styles.btn}>Discover Kitchen</div>
          </div>
        </Link>

        {/* Butchery Side */}
        <Link href="/butchery" className={styles.split}>
          <Image
            src="/images/home_butchery_final.jpg"
            alt="Hanot Butchery"
            fill
            className={styles.bgImage}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectPosition: 'center bottom' }}
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1 className={styles.title}>Hanot Butchery</h1>
            <p className={styles.subtitle}>Prime Cuts in Summit</p>
            <div className={styles.btn}>Visit Butchery</div>
          </div>
        </Link>
      </section>

      <Gallery />

      {/* Features Grid */}
      <section className="container section-padding">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Authentic Flavors</h3>
            <p style={{ color: '#666' }}>Recipes handed down through generations, prepared with modern techniques.</p>
          </div>
          <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Premium Sourcing</h3>
            <p style={{ color: '#666' }}>Only the highest quality ingredients make it to our kitchen and butchery counter.</p>
          </div>
          <div className="glass" style={{ padding: '3rem', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Elegant Atmosphere</h3>
            <p style={{ color: '#666' }}>Thoughtfully designed spaces that provide the perfect backdrop for your meal.</p>
          </div>
        </div>
      </section>

      <Reservations />
    </main>
  );
}
