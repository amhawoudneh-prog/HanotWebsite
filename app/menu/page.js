import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';

export default function MenuPage() {
    return (
        <div className="bg-secondary min-h-screen">
            <Navbar />

            <section className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Select Menu</h1>
                <p style={{ color: '#888', marginBottom: '3rem', fontSize: '1.2rem' }}>Choose a location to view its exclusive offerings.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%', maxWidth: '800px' }}>

                    <Link href="/kitchen#menu" className="glass" style={{ textDecoration: 'none', padding: '3rem', borderRadius: '16px', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Hanot Kitchen</h2>
                        <span className="btn btn-outline">View Kitchen Menu</span>
                    </Link>

                    <Link href="/butchery#menu" className="glass" style={{ textDecoration: 'none', padding: '3rem', borderRadius: '16px', transition: 'transform 0.3s ease', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h2 style={{ fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>Hanot Butchery</h2>
                        <span className="btn btn-outline">View Butchery Menu</span>
                    </Link>

                </div>
            </section>
        </div>
    );
}
