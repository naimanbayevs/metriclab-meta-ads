import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanzhar-ads.sanzhar038.chatgpt.site'),
  title: 'Санжар Найманбаев — реклама с фокусом на продажи',
  description:
    'Таргетированная реклама для бизнеса: от стратегии и целевых обращений до понятной связи с продажами.',
  openGraph: {
    title: 'Реклама с фокусом на продажи',
    description:
      'Санжар Найманбаев — таргетированная реклама для бизнеса с понятной связью между заявками и продажами.',
    url: 'https://sanzhar-ads.sanzhar038.chatgpt.site',
    images: [
      {
        url: 'https://sanzhar-ads.sanzhar038.chatgpt.site/og.png',
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
    images: ['https://sanzhar-ads.sanzhar038.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
