import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Varun Kumar H C | Premium Data Scientist & Machine Learning Engineer Portfolio",
  description: "Portfolio of Varun Kumar H C, B.E. Artificial Intelligence & Machine Learning graduate (2025) and Data Scientist Intern. Discover high-end machine learning, EDA, and generative AI research projects.",
  keywords: [
    "Data Scientist",
    "Machine Learning Engineer",
    "Generative AI Explorer",
    "Python",
    "SQL",
    "LangChain",
    "RAG",
    "Portfolio",
    "Varun Kumar H C"
  ],
  authors: [{ name: "Varun Kumar H C" }],
  creator: "Varun Kumar H C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/varun5812/Portfolio_",
    title: "Varun Kumar H C | Premium Data Scientist & ML Engineer Portfolio",
    description: "Sleek, high-performance portfolio featuring projects in Machine Learning, RAG Workflows, and Advanced Data Preprocessing.",
    siteName: "Varun Kumar H C Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Kumar H C | Data Scientist Portfolio",
    description: "Sleek, high-performance portfolio featuring projects in Machine Learning, RAG Workflows, and Advanced Data Preprocessing."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Varun Kumar H C",
    "jobTitle": "Data Scientist & Machine Learning Engineer",
    "url": "https://github.com/varun5812",
    "email": "varunkumar5812@gmail.com",
    "sameAs": [
      "https://github.com/varun5812",
      "https://linkedin.com/in/varun-kumar-n-79bb6329a"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "SEA College of Engineering, Bengaluru"
    },
    "knowsAbout": [
      "Data Science",
      "Machine Learning",
      "Generative AI",
      "Deep Learning",
      "Python",
      "SQL",
      "Natural Language Processing",
      "RAG Systems"
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-cream text-charcoal selection:bg-gold/30 selection:text-charcoal font-sans">
        {children}
      </body>
    </html>
  );
}
