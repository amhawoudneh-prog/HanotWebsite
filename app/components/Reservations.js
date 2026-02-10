"use client";
import { motion } from 'framer-motion';

export default function Reservations() {
    return (
        <section id="reservations" className="section-padding" style={{ background: '#111' }}>
            <div className="container">
                <div className="glass" style={{ padding: '4rem', borderRadius: '12px', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>Reserve Your Table</h2>
                        <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                            Experience the finest dining in Addis Ababa. Book your table for a memorable meal with us.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ display: 'block', paddingBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Location</label>
                                <select style={{ width: '100%', padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px' }}>
                                    <option>Hanot Kitchen (Piassa)</option>
                                    <option>Hanot Butchery (Summit)</option>
                                </select>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ display: 'block', paddingBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Date</label>
                                <input type="date" style={{ width: '100%', padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <label style={{ display: 'block', paddingBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>Guests</label>
                                <select style={{ width: '100%', padding: '1rem', background: '#222', border: '1px solid #333', color: 'white', borderRadius: '4px' }}>
                                    <option>2 People</option>
                                    <option>4 People</option>
                                    <option>6 People</option>
                                    <option>Large Party (10+)</option>
                                </select>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <button className="btn btn-primary" style={{ width: '100%', padding: '1.1rem' }}>Find Table</button>
                            </div>
                        </div>

                        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#555' }}>
                            Or call us directly: <strong>+251 91 100 0000</strong>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
