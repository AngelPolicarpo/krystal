import '../styles/globals.css'

export const metadata = {
  title: 'Krystal Festas',
  description: 'Site da Krystal Festas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
