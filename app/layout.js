import { Quicksand } from "next/font/google";
import "./globals.css";
import { ThemeContextProvider } from "@/context/ThemeContext";

const quicksand = Quicksand({
    variable: "--font-quicksand",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
    title: "Hummingbird Fight Club - Handcrafted Jewelry from Rhode Island",
    description: "Discover unique handcrafted jewelry and accessories from Rhode Island. From dainty and precious to gothic and sarcastic - every piece tells a story. Shop rings, necklaces, earrings, and more.",
    keywords: "handcrafted jewelry, Rhode Island jewelry, handmade accessories, artisan jewelry, gothic jewelry, custom jewelry, unique gifts, Hummingbird Fight Club",
    authors: [{ name: "Hummingbird Fight Club" }],
    creator: "Hummingbird Fight Club",
    publisher: "Hummingbird Fight Club",

    // Open Graph
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hummingbirdfightclub.com",
        siteName: "Hummingbird Fight Club",
        title: "Hummingbird Fight Club - Handcrafted Jewelry from Rhode Island",
        description: "Discover unique handcrafted jewelry and accessories from Rhode Island. From dainty and precious to gothic and sarcastic.",
        images: [
            {
                url: "/assets/humming/hummingbirdfc_logo.jpg",
                width: 960,
                height: 960,
                alt: "Hummingbird Fight Club Logo",
            },
        ],
    },

    // Twitter
    twitter: {
        card: "summary_large_image",
        title: "Hummingbird Fight Club - Handcrafted Jewelry",
        description: "Unique handcrafted jewelry and accessories from Rhode Island",
        images: ["/assets/humming/hummingbirdfc_logo.jpg"],
    },

    // Icons
    icons: {
        icon: "/assets/humming/favicon.ico",
        shortcut: "/assets/humming/favicon.ico",
        apple: "/assets/humming/favicon.ico",
    },

    // Additional
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    alternates: {
        canonical: "https://hummingbirdfightclub.com",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/x-icon" href="/assets/humming/favicon.ico" />
            </head>
            <body className={quicksand.className}>
                <ThemeContextProvider>
                    {children}
                </ThemeContextProvider>
            </body>
        </html>
    );
}