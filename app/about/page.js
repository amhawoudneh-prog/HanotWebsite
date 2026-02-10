import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="bg-secondary min-h-screen text-white">
            <Navbar />
            <div className="container" style={{ paddingTop: '120px', paddingBottom: '5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h1 style={{ fontSize: '3.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Our Story</h1>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem', color: '#ccc' }}>
                            Founded in the heart of Addis Ababa, Hanot began with a simple vision: to celebrate the rich culinary heritage of Ethiopia while embracing modern sophistication.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '1.5rem', color: '#aaa' }}>
                            Our journey started in Piassa with <strong>Hanot Kitchen</strong>, where we focused on traditional flavors with a contemporary twist. The overwhelming support from our community led us to expand to Summit with <strong>Hanot Butchery</strong>, specializing in the finest cuts of meat and a premium grill experience.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#aaa' }}>
                            At Hanot, every dish tells a story of quality, passion, and hospitality. We invite you to be part of our story, one meal at a time.
                        </p>
                    </div>
                    <div style={{ position: 'relative', height: '500px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                        <Image
                            src="/images/kitchen_final_culture.jpg"
                            alt="Hanot Heritage"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>

                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', color: 'var(--color-accent)', marginBottom: '3rem' }}>Our Philosophy</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Quality First</h3>
                            <p style={{ color: '#888' }}>We source only the freshest ingredients and the finest cuts of meat for our customers.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Heritage</h3>
                            <p style={{ color: '#888' }}>Our recipes are rooted in tradition, honoring the flavors that define Ethiopian cuisine.</p>
                        </div>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>Hospitality</h3>
                            <p style={{ color: '#888' }}>At Hanot, you're not just a customer; you're an honored guest in our home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
