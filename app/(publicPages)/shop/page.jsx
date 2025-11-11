import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <div className="relative flex flex-col items-center justify-center text-center px-4 py-32 pt-40" style={{backgroundColor: '#D4C5B0'}}>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                    Shop
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                    Handcrafted jewelry and accessories
                </p>
            </div>

            {/* Coming Soon Section */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-12">
                        <Image
                            src="/assets/humming/hummingbirdfc_logo.jpg"
                            alt="Hummingbird Fight Club"
                            width={250}
                            height={250}
                            className="mx-auto opacity-50"
                        />
                    </div>
                    {/* Under Construction Notice */}
                    <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-8 py-6 mb-8 max-w-2xl mx-auto">
                        <p className="text-yellow-200 font-medium text-lg mb-2">
                            🚧 Under Construction
                        </p>
                        <p className="text-yellow-100/80">
                            We recently recovered our domain and are rebuilding our shop! Check back soon.
                        </p>
                    </div>

                    <h2 className="text-4xl font-bold mb-6">Coming Soon</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        We&apos;re working hard to bring you our full collection of handcrafted jewelry and accessories.
                    </p>
                    <p className="text-lg text-gray-400 mb-12">
                        In the meantime, follow us on social media to see our latest creations!
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-12">
                        <a
                            href="https://www.instagram.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black hover:bg-gray-100 transition rounded-full px-8 py-3 font-medium"
                        >
                            Follow on Instagram
                        </a>
                        <a
                            href="https://www.facebook.com/hummingbirdfightclub"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-black hover:bg-gray-100 transition rounded-full px-8 py-3 font-medium"
                        >
                            Follow on Facebook
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="border-t border-gray-800 pt-8 mt-8">
                        <p className="text-gray-400 mb-4">
                            For inquiries about custom orders or wholesale:
                        </p>
                        <a
                            href="mailto:hummingbirdfightclub@gmail.com"
                            className="text-white hover:text-gray-300 text-lg underline"
                        >
                            hummingbirdfightclub@gmail.com
                        </a>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-12">
                        <Link
                            href="/"
                            className="inline-block bg-gray-900 hover:bg-gray-800 transition rounded px-8 py-3 font-medium border border-gray-700"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
