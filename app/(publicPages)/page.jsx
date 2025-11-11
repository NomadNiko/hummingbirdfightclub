"use client"
import { useState } from "react";
import Image from "next/image";
import { Facebook, Instagram, Mail, ChevronLeft, ChevronRight } from "lucide-react";

export default function Page() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/assets/humming/display1.jpg',
        '/assets/humming/display2.jpg',
        '/assets/humming/display3.jpg',
        '/assets/humming/display4.jpg'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const products = Array.from({ length: 14 }, (_, i) => ({
        id: i + 1,
        image: `/assets/humming/products${i + 1}.jpg`,
        title: `Product ${i + 1}`
    }));

    // Structured Data for SEO
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Hummingbird Fight Club",
        "description": "Handcrafted jewelry and accessories from Rhode Island. From dainty and precious to gothic and sarcastic.",
        "url": "https://hummingbirdfightclub.com",
        "logo": "https://hummingbirdfightclub.com/assets/humming/hummingbirdfc_logo.jpg",
        "image": "https://hummingbirdfightclub.com/assets/humming/hummingbirdfc_logo.jpg",
        "address": {
            "@type": "PostalAddress",
            "addressRegion": "Rhode Island",
            "addressCountry": "US"
        },
        "email": "hummingbirdfightclub@gmail.com",
        "sameAs": [
            "https://www.facebook.com/hummingbirdfightclub",
            "https://www.instagram.com/hummingbirdfightclub"
        ],
        "priceRange": "$$",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "1"
        }
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            {/* Hero Section - Black background with leaves decoration */}
            <div className="relative flex flex-col items-center justify-center text-center px-4 py-20 pt-32 bg-black overflow-hidden">
                {/* Leaves decoration */}
                <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
                    <Image
                        src="/assets/humming/leaves.png"
                        alt=""
                        width={256}
                        height={256}
                        className="object-contain"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20 rotate-180">
                    <Image
                        src="/assets/humming/leaves.png"
                        alt=""
                        width={256}
                        height={256}
                        className="object-contain"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <div className="mb-8">
                        <Image
                            src="/assets/humming/hummingbirdfc_logo.jpg"
                            alt="Hummingbird Fight Club Logo"
                            width={400}
                            height={400}
                            className="mx-auto"
                        />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                        Handcrafted in Rhode Island.
                    </h1>

                    {/* Social Links */}
                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="https://www.instagram.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition text-white rounded-full px-6 py-3 border border-white/30"
                        >
                            <Instagram size={20} />
                            <span>Instagram</span>
                        </a>
                        <a
                            href="https://www.facebook.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition text-white rounded-full px-6 py-3 border border-white/30"
                        >
                            <Facebook size={20} />
                            <span>Facebook</span>
                        </a>
                    </div>

                    <button className="bg-white hover:bg-gray-100 transition text-black rounded px-8 py-3 text-base font-medium">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Carousel Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg">
                        {slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-500 ${
                                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                                }`}
                            >
                                <Image
                                    src={slide}
                                    alt={`Display ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition ${
                                        index === currentSlide ? 'bg-white' : 'bg-white/50'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Products Gallery */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white">
                        Our Collection
                    </h2>
                    <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                        Browse our full range of handcrafted jewelry and accessories
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                        {products.map((product) => (
                            <div key={product.id} className="group border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/10 transition cursor-pointer">
                                <div className="aspect-square relative bg-gray-900">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition duration-500"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Ad Image Banner */}
            <section className="py-8 px-4 bg-black">
                <div className="max-w-2xl mx-auto">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src="/assets/humming/ad_image.jpg"
                            alt="Special Offer"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6 text-white">
                        Sign up for news and updates.
                    </h2>
                    <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 px-4 py-3 rounded border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black hover:bg-gray-100 transition rounded px-8 py-3 font-medium"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </section>

            {/* Instagram CTA Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">
                        Follow Us on Instagram
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        See our latest creations and behind-the-scenes content
                    </p>
                    <a
                        href="https://www.instagram.com/hummingbirdfightclub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition text-white rounded-full px-8 py-4 border border-white/30 text-lg"
                    >
                        <Instagram size={24} />
                        <span>@hummingbirdfightclub</span>
                    </a>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4 text-white">
                        Have Questions? Get in Touch!
                    </h2>
                    <h4 className="text-lg text-center mb-8 text-gray-300">
                        Fill out the form below.
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Name*</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Email*</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-gray-300">Your Message*</label>
                            <textarea
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                className="w-full px-4 py-3 rounded border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-white"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-white hover:bg-gray-100 transition text-black rounded py-3 font-medium"
                        >
                            Send
                        </button>
                        <p className="text-xs text-gray-500 text-center">
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a> and{' '}
                            <a href="https://policies.google.com/terms" className="underline">Terms of Service</a> apply.
                        </p>
                    </form>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-12 text-white">
                        About Hummingbird Fight Club
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Brand Card */}
                        <div className="text-center">
                            <div className="mb-6 mx-auto w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/assets/humming/hummingbirdfc_logo.jpg"
                                    alt="Hummingbird Fight Club"
                                    width={192}
                                    height={192}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">
                                Hummingbird Fight Club
                            </h4>
                            <p className="text-gray-300">
                                Hummingbird Fight Club has an assortment of handcrafted jewelry and accessories that range from dainty and precious to gothic and sarcastic. It&apos;s all in the name! No one person can be put into a box, and neither can our brand! Browse our assortment of unique items and find what suits your personal style, or find a gift for a friend.
                            </p>
                        </div>

                        {/* Team Card - Jess */}
                        <div className="text-center">
                            <div className="mb-6 mx-auto w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/assets/humming/meet_jess.jpg"
                                    alt="Jess - Owner"
                                    width={192}
                                    height={192}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">
                                Meet the Team!
                            </h4>
                            <p className="text-gray-300">
                                This is our Owner, Jess! When she isn&apos;t creating kick ass jewelry, you can usually find her with a diet coke in her hand, quoting David from Schitt&apos;s Creek.
                            </p>
                        </div>

                        {/* Cat Card - Using meet_jess2 for variety */}
                        <div className="text-center">
                            <div className="mb-6 mx-auto w-48 h-48 bg-gray-900 rounded-full flex items-center justify-center overflow-hidden">
                                <Image
                                    src="/assets/humming/meet_jess2.jpg"
                                    alt="Jess creating jewelry"
                                    width={192}
                                    height={192}
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white">
                                Creating Magic
                            </h4>
                            <p className="text-gray-300">
                                Every piece is carefully handcrafted with attention to detail. From concept to creation, each item is made with love and passion for the craft.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-white py-12 px-4 border-t border-gray-900">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center gap-6 mb-6">
                        <a
                            href="https://www.facebook.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            <Facebook size={32} />
                        </a>
                        <a
                            href="https://www.instagram.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 transition"
                        >
                            <Instagram size={32} />
                        </a>
                        <a
                            href="mailto:hummingbirdfightclub@gmail.com"
                            className="hover:text-gray-300 transition"
                        >
                            <Mail size={32} />
                        </a>
                    </div>
                    <p className="text-center text-gray-400 mb-4">
                        Copyright © 2023 Hummingbird Fight Club - All Rights Reserved.
                    </p>
                    <div className="flex justify-center gap-6 text-sm text-gray-400">
                        <a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a>
                        <a href="/terms-and-conditions" className="hover:text-white transition">Terms and Conditions</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
