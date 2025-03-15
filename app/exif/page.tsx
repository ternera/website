import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EXIF Metadata Viewer - Find Hidden Information in Images | Free Browser Extension",
  description: "Reveal hidden EXIF data in photos directly from your browser. Camera settings, location data, timestamps, and more with our free extension.",
  keywords: ["EXIF viewer", "metadata viewer", "photo metadata", "image information", "EXIF browser extension", "photo EXIF data", "camera settings viewer"],
  openGraph: {
    title: "EXIF Metadata Viewer - Find Hidden Information in Images",
    description: "Reveal hidden details embedded within images directly from your browser",
    type: "website",
    url: "https://ternera.org/exif",
    images: [
      {
        url: "/exif-viewer-og.png", 
        width: 1200,
        height: 630,
        alt: "EXIF Metadata Viewer Chrome Extension"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EXIF Metadata Viewer - Find Hidden Information in Images",
    description: "Reveal hidden details embedded within images directly from your browser",
    images: ["/exif-viewer-twitter.png"],
  }
};

export default function Exif() {
  return (
    <>
      <Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "EXIF Metadata Viewer",
          "applicationCategory": "BrowserApplication",
          "operatingSystem": "Chrome, Firefox, Edge",
          "description": "Reveal hidden EXIF data in photos directly from your browser. Camera settings, location data, timestamps, and more.",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />

      <section>
        <h1 className="mb-6 text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EXIF Metadata Viewer - Find Information About Images</h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-8 text-lg leading-relaxed">
            <p className="mb-6">
              Ever wondered about the story behind a photo you see online? The <Link 
                href="https://chromewebstore.google.com/detail/exif-metadata-viewer/begcpebobbbopmlfomknjjcfcganemea"
                target="_blank"
                rel="noopener noreferrer" 
                className="font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >EXIF Metadata Viewer</Link> extension lets you instantly reveal the hidden details embedded within images, directly from the context menu in your browser.
            </p>
            
            <div className="my-8 flex justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-gray-200 dark:border-gray-700">
                <Image 
                  src="/screenshot1.png" 
                  alt="EXIF Metadata Viewer showing camera settings, location data, and timestamps from a landscape photo" 
                  width={700} 
                  height={400}
                  className="rounded-lg"
                  priority
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mt-10 mb-4">What Can You Discover?</h2>
            <p className="mb-4">All you need to do is right-click on an image to find out if the image has the following details stored:</p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 rounded-xl shadow-sm border border-blue-100 dark:border-blue-800">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M3.34 11.05a9 9 0 0 1 16.01-1.73"></path><path d="M18.5 15.84a9 9 0 0 1-14.53.61"></path></svg>
                  Camera Settings
                </h3>
                <p>Find the make and model of the camera used, along with settings like aperture, shutter speed, and ISO</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-5 rounded-xl shadow-sm border border-green-100 dark:border-green-800">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Location Data
                </h3>
                <p>See where the photo was taken (if GPS data is available)</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-red-50 dark:from-amber-900/20 dark:to-red-900/20 p-5 rounded-xl shadow-sm border border-amber-100 dark:border-amber-800">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  Date and Time
                </h3>
                <p>Know exactly when the image was captured</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-xl shadow-sm border border-purple-100 dark:border-purple-800">
                <h3 className="text-lg font-medium flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
                  And Much More
                </h3>
                <p>Discover other valuable metadata, such as software used, artist information, and more</p>
              </div>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <p className="mb-2 text-lg">It's easy to use: Simply right-click on any image and select "View EXIF Data."</p>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold mb-4">Why Use EXIF Metadata Viewer?</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Photographers</strong>: Learn techniques by seeing what settings were used in professional photos</li>
                <li><strong>Privacy-conscious users</strong>: Check if your photos contain location data before sharing</li>
                <li><strong>Digital forensics</strong>: Verify image authenticity and origin</li>
                <li><strong>Photo enthusiasts</strong>: Discover the story behind the images you find online</li>
              </ul>
            </div>

            <div className="my-8">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">Why can't I see EXIF data on some images?</h3>
                  <p>Not all images contain EXIF data. Many social media platforms and websites strip this metadata to protect user privacy.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Is this extension free?</h3>
                  <p>Yes, the EXIF Metadata Viewer extension is completely free to use.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-2">Which browsers support this extension?</h3>
                  <p>Currently available for Chrome and Chromium-based browsers.</p>
                </div>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">We respect your privacy and don't collect any personal data.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mt-10">
              <Link 
                href="https://chromewebstore.google.com/detail/exif-metadata-viewer/begcpebobbbopmlfomknjjcfcganemea"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium text-center flex items-center justify-center gap-2 transition-colors"
                aria-label="Install EXIF Metadata Viewer extension"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
                Install Extension
              </Link>
              <Link 
                href="https://github.com/ianare/exif-samples"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-800 dark:text-white py-3 px-6 rounded-lg font-medium text-center flex items-center justify-center gap-2 transition-colors"
                aria-label="Test with sample images containing EXIF data"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                Test with Sample Images
              </Link>
            </div>
            
            <div className="mt-4">
              <Link 
                href="https://github.com/ternera/exif-viewer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-medium text-center flex items-center justify-center gap-2 transition-colors"
                aria-label="View EXIF Metadata Viewer source code on GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                View Source Code
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}