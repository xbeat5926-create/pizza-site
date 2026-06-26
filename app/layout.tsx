import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { site } from '@/content/site';
import { RestaurantSchema } from '@/components/Schema';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: "Panino's Pizza & Pasta | Downtown Orlando NY-Style Pizza", template: "%s | Panino's Pizza & Pasta" },
  description: site.description,
  keywords: ['Downtown Orlando pizza', 'New York style pizza Downtown Orlando', 'pizza by the slice Orlando', 'lunch specials Downtown Orlando', 'late night pizza Orlando'],
  openGraph: { title: site.name, description: site.description, type: 'website', locale: 'en_US' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: import("react").ReactNode }) {
  return (
    <html lang="en">
      <body className="">
        <RestaurantSchema />
        {site.gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`}
          </Script>
        )}
        {site.gaId && (
          <>
            <Script async src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} />
            <Script id="ga">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}');`}</Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
