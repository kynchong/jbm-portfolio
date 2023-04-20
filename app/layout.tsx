import './globals.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

// Metadata
export const metadata = {
  title: 'Do the write thing',
  description: 'Creative portfolio of JBM',
}

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen">

        {/* Navigation Bar */}
        <nav className="absolute top-0 w-full">
          <Navbar />
        </nav>

        {/* Main Content */}
        <main className="h-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="absolute bottom-0 w-full">
          <Footer />
        </footer>

      </body>
    </html>
  )
}
