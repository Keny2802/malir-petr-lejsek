import type {
  Metadata
} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Profi Malby Petr Lejska",
  description: "Profi Malby Petr Lejska | Malíř na správném místě",
  icons: {
    icon: [
      {
        url: "/Fotky/Clean Logo.png",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
