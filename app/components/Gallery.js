"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Gallery() {
    const images = [
        { src: '/images/kitchen_final_interior.jpg', alt: 'Main Dining Area', size: 'large' },
        { src: '/images/kitchen_final_bar.jpg', alt: 'Cocktail Bar', size: 'small' },
        { src: '/images/kitchen_final_culture.jpg', alt: 'Cultural Corner', size: 'small' },
        { src: '/images/kitchen_final_side.jpg', alt: 'Relaxing Vibes', size: 'medium' },
    ];

    return (
        <section className="section-padding">
            <div className="container">
                <h2 className="text-center" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '3rem' }}>Culinary Excellence</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gridAutoRows: '250px',
                    gap: '1rem'
                }}>
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                gridColumn: img.size === 'large' ? 'span 2' : img.size === 'medium' ? 'span 2' : 'span 1',
                                gridRow: img.size === 'large' ? 'span 2' : 'span 1'
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                className="gallery-img"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '1.5rem',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                color: 'white',
                                opacity: 0,
                                transition: 'opacity 0.3s ease'
                            }} className="gallery-caption">
                                <p style={{ fontWeight: 'bold' }}>{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
        div:hover .gallery-img {
          transform: scale(1.1);
        }
        div:hover .gallery-caption {
          opacity: 1 !important;
        }
      `}</style>
        </section>
    );
}
