import './globals.css'

export const metadata = {
  title: 'Portfolio - Shynggys',
  description: 'Personal portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
