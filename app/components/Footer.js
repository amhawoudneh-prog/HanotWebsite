import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer style={{ background: '#0a0a0a', borderTop: '1px solid #222', padding: '5rem 0 2rem' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                    <div>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <Image src="/images/logo_2.png" alt="Hanot Logo" width={40} height={40} />
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>HANOT</span>
                        </Link>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Redefining dining specialty in Addis Ababa since 2020. Quality meets tradition.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'grid', gap: '0.5rem' }}>
                            <li><Link href="/kitchen" style={{ color: '#888' }}>Hanot Kitchen</Link></li>
                            <li><Link href="/butchery" style={{ color: '#888' }}>Hanot Butchery</Link></li>
                            <li><Link href="/menu" style={{ color: '#888' }}>Our Menu</Link></li>
                            <li><Link href="/about" style={{ color: '#888' }}>About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Contact</h4>
                        <p style={{ color: '#888', marginBottom: '0.5rem' }}>Piassa & Summit, Addis Ababa</p>
                        <p style={{ color: '#888', marginBottom: '0.5rem' }}>+251 91 100 0000</p>
                        <p style={{ color: '#888' }}>info@hanot.com</p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                            <a href="https://www.instagram.com/hanotkitchen?igsh=bnc4YWxudG5yd3pi" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>Instagram</a>
                            <a href="https://www.facebook.com/share/17y4irBFQG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>Facebook</a>
                            <a href="https://www.tiktok.com/@hanotkitchen?_r=1&_t=ZS-93mAg73pxnJ" target="_blank" rel="noopener noreferrer" style={{ color: '#888' }}>TikTok</a>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #222', color: '#444', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} Hanot Restaurant Group. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
