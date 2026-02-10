import Navbar from '../components/Navbar';

export default function ContactPage() {
    return (
        <div className="bg-secondary min-h-screen text-white">
            <Navbar />
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '4rem' }}>
                <h1 className="text-center" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '3rem' }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Form */}
                    <div className="glass" style={{ padding: '2rem', borderRadius: '8px' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Send us a message</h2>
                        <form style={{ display: 'grid', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name</label>
                                <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: '#222', color: 'white' }} placeholder="Your Name" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
                                <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: '#222', color: 'white' }} placeholder="your@email.com" />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message</label>
                                <textarea rows="4" style={{ width: '100%', padding: '0.75rem', borderRadius: '4px', border: '1px solid #333', background: '#222', color: 'white' }} placeholder="Tell us about your event or inquiry..."></textarea>
                            </div>
                            <button type="button" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    {/* Info */}
                    <div>
                        <div style={{ marginBottom: '3rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Hanot Kitchen (Piassa)</h3>
                            <p>📍 Piassa Main Road</p>
                            <p>📞 +251 91 100 0000</p>
                            <p>✉️ kitchen@hanot.com</p>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Hanot Butchery (Summit)</h3>
                            <p>📍 Summit Condominium Area</p>
                            <p>📞 +251 91 200 0000</p>
                            <p>✉️ butchery@hanot.com</p>
                        </div>

                        <div style={{ marginTop: '3rem' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Follow Us</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="#" style={{ padding: '0.5rem', background: '#333', borderRadius: '50%' }}>IG</a>
                                <a href="#" style={{ padding: '0.5rem', background: '#333', borderRadius: '50%' }}>FB</a>
                                <a href="#" style={{ padding: '0.5rem', background: '#333', borderRadius: '50%' }}>TT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
