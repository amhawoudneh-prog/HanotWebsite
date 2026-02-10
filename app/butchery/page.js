import Navbar from '../components/Navbar';
import Image from 'next/image';
import Reservations from '../components/Reservations';

export default function ButcheryPage() {
    return (
        <div className="bg-secondary min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/images/butchery_real_1.jpg"
                    alt="Hanot Butchery"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 40%', filter: 'brightness(0.5)' }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Hanot Butchery</h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Summit, Addis Ababa</p>
                </div>
            </section>

            {/* About / Atmosphere */}
            <section className="container section-padding text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Premium Cuts & Grill</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Located in the upscale Summit area, Hanot Butchery offers the finest cuts of meat, expertly prepared.
                    From our display counter to your plate, experience the true taste of quality.
                    Perfect for family gatherings and meat lovers.
                </p>
                <div style={{ position: 'relative', height: '400px', maxWidth: '800px', margin: '0 auto', borderRadius: '12px', overflow: 'hidden' }}>
                    <Image src="/images/hanot_butchery_food_1.jpg" alt="Hanot Butchery Special" fill style={{ objectFit: 'cover' }} />
                </div>
            </section>

            {/* Hanot Butchery Menu */}
            <section id="menu" className="container section-padding">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary)', textAlign: 'center' }}>Hanot Butchery Menu</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                    {/* Main Dishes */}
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>🥩 Main Dishes</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Tibs</span> <span style={{ color: 'var(--color-primary)' }}>650 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Shekla Tibs</span> <span style={{ color: 'var(--color-primary)' }}>800 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Kitfo Leb Leb</span> <span style={{ color: 'var(--color-primary)' }}>700 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Kurt (Raw Beef)</span> <span style={{ color: 'var(--color-primary)' }}>750 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Dulet</span> <span style={{ color: 'var(--color-primary)' }}>600 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Minchet Abish</span> <span style={{ color: 'var(--color-primary)' }}>550 ETB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Grilled & Roasted */}
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>🔥 Grilled & Roasted</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Roasted Beef Cubes</span> <span style={{ color: 'var(--color-primary)' }}>700 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Lamb Meat</span> <span style={{ color: 'var(--color-primary)' }}>750 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Goat Meat</span> <span style={{ color: 'var(--color-primary)' }}>800 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Gomen Besiga</span> <span style={{ color: 'var(--color-primary)' }}>500 ETB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Sides & Extras */}
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>🍞 Sides & 🧂 Extras</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Injera</span> <span style={{ color: 'var(--color-primary)' }}>40 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Bread</span> <span style={{ color: 'var(--color-primary)' }}>50 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Gomen</span> <span style={{ color: 'var(--color-primary)' }}>150 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Salad</span> <span style={{ color: 'var(--color-primary)' }}>180 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Ayib Cheese</span> <span style={{ color: 'var(--color-primary)' }}>120 ETB</span>
                            </li>
                            <li style={{ marginTop: '1rem', borderTop: '1px solid #444', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Mitmita</span> <span style={{ color: 'var(--color-primary)' }}>30 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Awaze</span> <span style={{ color: 'var(--color-primary)' }}>30 ETB</span>
                            </li>
                        </ul>
                    </div>

                    {/* Drinks */}
                    <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid #333' }}>
                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-accent)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-primary)', paddingBottom: '0.5rem' }}>🍺 Drinks</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Draft Beer</span> <span style={{ color: 'var(--color-primary)' }}>120 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>St. George Beer</span> <span style={{ color: 'var(--color-primary)' }}>110 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Meta Beer</span> <span style={{ color: 'var(--color-primary)' }}>110 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Soft Drinks</span> <span style={{ color: 'var(--color-primary)' }}>60 ETB</span>
                            </li>
                            <li style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                                <span>Areki</span> <span style={{ color: 'var(--color-primary)' }}>90 ETB</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Info Grid */}
            <section className="container section-padding" style={{ borderTop: '1px solid #333' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Location</h3>
                        <p>Summit, Addis Ababa</p>
                        <div style={{ marginTop: '1rem', height: '200px', background: '#333', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=9.011028,38.850472&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Hours</h3>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}><span>Mon - Sun</span> <span>10:00 AM - 9:00 PM</span></li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>*Fresh cuts displayed daily.</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Contact</h3>
                        <p style={{ marginBottom: '0.5rem' }}>📞 +251 91 200 0000</p>
                        <p style={{ marginBottom: '1rem' }}>📧 butchery@hanot.com</p>
                        <a href="#reservations" className="btn btn-outline" style={{ width: '100%' }}>Order for Pickup</a>
                    </div>

                </div>
            </section>
            <Reservations />
        </div>
    );
}
