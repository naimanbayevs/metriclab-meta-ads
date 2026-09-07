import type { Metadata } from 'next';
import { Manrope, Oswald } from 'next/font/google';
import './globals.css';

// Manrope — весь текст и интерфейс. Oswald — только заголовок в шапке.
// Обе гарнитуры с кириллицей: Impact, который стоял раньше, её не имеет
// и русский заголовок на нём не набрать.
const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-cases',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

const oswald = Oswald({
  subsets: ['cyrillic', 'latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
  fallback: ['Helvetica Neue', 'Arial', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanzhar-ads.sanzhar038.chatgpt.site'),
  title: 'Санжар Найманбаев — реклама, которая окупается',
  description:
    'Meta Ads, Google Ads и лендинги для бизнеса. Считаю не заявки, а деньги, которые они принесли.',
  openGraph: {
    title: 'Реклама с фокусом на продажи',
    description:
      'Санжар Найманбаев — таргетированная реклама для бизнеса с понятной связью между заявками и продажами.',
    url: 'https://sanzhar-ads.sanzhar038.chatgpt.site',
    images: [
      {
        url: 'https://sanzhar-ads.sanzhar038.chatgpt.site/og.jpg',
        width: 1729,
        height: 910,
        alt: 'Реклама с фокусом на продажи — Санжар Найманбаев',
      },
    ],
    locale: 'ru_KZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Реклама с фокусом на продажи',
    description:
      'Санжар Найманбаев — таргетированная реклама для бизнеса с понятной связью между заявками и продажами.',
    images: ['https://sanzhar-ads.sanzhar038.chatgpt.site/og.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
