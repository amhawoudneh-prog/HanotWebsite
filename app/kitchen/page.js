import Navbar from '../components/Navbar';
import Image from 'next/image';
import Reservations from '../components/Reservations';

export default function KitchenPage() {
    return (
        <div className="bg-secondary min-h-screen text-white">
            <Navbar />

            {/* Hero Section */}
            <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    src="/images/kitchen_banner_new.jpg"
                    alt="Hanot Kitchen"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center 60%', filter: 'brightness(0.5)' }}
                />
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 style={{ fontSize: '4rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Hanot Kitchen</h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: '300' }}>Piassa, Addis Ababa</p>
                </div>
            </section>

            {/* About / Atmosphere */}
            <section className="container section-padding text-center">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>The Vibe</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '3rem' }}>
                    Located in the heart of Piassa, Hanot Kitchen brings a modern twist to traditional Ethiopian hospitality.
                    Our space is designed for comfort, conversation, and culinary delight. Whether you're here for a quick lunch
                    or a romantic dinner, the warm ambiance sets the perfect stage.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '3rem' }}>
                    <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/kitchen_final_culture.jpg" alt="Hanot Culture" fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/kitchen_final_bar.jpg" alt="Hanot Bar" fill style={{ objectFit: 'cover' }} />
                    </div>
                </div>
            </section>

            {/* Info Grid */}
            <section className="container section-padding" style={{ borderTop: '1px solid #333' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '4rem', marginBottom: '4rem' }}>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_1.jpg" alt="Hanot Dish 1" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_2.jpg" alt="Hanot Dish 2" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_3.jpg" alt="Hanot Dish 3" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_4.jpg" alt="Hanot Dish 4" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_5.jpg" alt="Hanot Dish 5" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_6.jpg" alt="Hanot Dish 6" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_7.jpg" alt="Hanot Dish 7" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_8.jpg" alt="Hanot Dish 8" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_9.jpg" alt="Hanot Dish 9" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_10.jpg" alt="Hanot Dish 10" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                    <div style={{ position: 'relative', height: '300px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image src="/images/hanot_kitchen_food_11.jpg" alt="Hanot Dish 11" fill style={{ objectFit: 'cover' }} quality={100} />
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Location */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Location</h3>
                        <p>Piassa, Addis Ababa</p>
                        <div style={{ marginTop: '1rem', height: '200px', background: '#333', borderRadius: '8px', overflow: 'hidden' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=9.019333,38.752722&z=15&output=embed"
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
                            <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}><span>Mon - Thu</span> <span>11:00 AM - 10:00 PM</span></li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}><span>Fri - Sat</span> <span>11:00 AM - 11:30 PM</span></li>
                            <li style={{ marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between' }}><span>Sunday</span> <span>12:00 PM - 10:00 PM</span></li>
                        </ul>
                        <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#888' }}>*Kitchen closes 30 mins before closing.</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>Contact</h3>
                        <p style={{ marginBottom: '0.5rem' }}>📞 +251 91 100 0000</p>
                        <p style={{ marginBottom: '1rem' }}>📧 kitchen@hanot.com</p>
                        <a href="#reservations" className="btn btn-outline" style={{ width: '100%' }}>Make Reservation</a>
                    </div>

                </div>
            </section>
            <Reservations />
        </div>
    );
}
