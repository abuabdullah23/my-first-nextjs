import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '400', '500', '700'],
  variable: '--font-roboto',
});

export const metadata = {
  title: "My First Next Js",
  description: "My First Next Js",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
      </body>
    </html>
  );
}
export default RootLayout;
