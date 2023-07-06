import { getCssText } from '@/styles'
import { globalStyles } from '@/styles/global';
import { Inter } from 'next/font/google'
import LogoImg from "../assets/logo.svg"
import { Container, Header } from "@/styles/page/app";
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{__html: getCssText()}}></style>
      </head>
      <body className={inter.className}>
        <Container>
          <Header>
            <Image src={LogoImg} alt="" />
          </Header>
          
          {children}
        </Container>
      </body>
    </html>
  )
}
