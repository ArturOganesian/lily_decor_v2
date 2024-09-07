import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';
import ReduxProvider from '@/app/globalRedux/provider';


export const metadata = {
  title: 'Lily Decor',
  description: 'Cake cover dough',
  icons: '/images/logo.png'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ReduxProvider>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
      </ReduxProvider>
    
    </html>
  )
}
