import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Санжар Найманбаев — реклама с фокусом на продажи',
  description:
    'Таргетированная реклама для бизнеса: от стратегии и целевых обращений до понятной связи с продажами.',
  openGraph: {
    title: 'Реклама с фокусом на продажи',
    description:
      'Санжар Найманбаев — таргетированная реклама для бизнеса с понятной связью между заявками и продажами.',
    locale: 'ru_KZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Реклама с фокусом на продажи',
    description:
      'Санжар Найманбаев — таргетированная реклама для бизнеса с понятной связью между заявками и продажами.',
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
