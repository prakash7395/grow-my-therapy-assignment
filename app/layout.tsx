import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Anxiety & Trauma Therapy for Adults in Santa Monica, CA | Dr. Maya Reynolds",
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica offering in-person and secure telehealth therapy for adults experiencing anxiety, trauma, burnout, and chronic stress.",
  keywords: [
    "anxiety therapy Santa Monica",
    "trauma therapy Santa Monica",
    "EMDR therapy Santa Monica",
    "burnout therapy Santa Monica",
    "chronic stress therapy Santa Monica",
    "adult therapy Santa Monica",
    "online therapy California",
    "licensed clinical psychologist Santa Monica",
    "Dr. Maya Reynolds",
  ],
  authors: [
    {
      name: "Dr. Maya Reynolds, PsyD",
    },
  ],
  creator: "Dr. Maya Reynolds, PsyD",
  publisher: "Dr. Maya Reynolds, PsyD",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title:
      "Anxiety & Trauma Therapy for Adults in Santa Monica, CA | Dr. Maya Reynolds",
    description:
      "In-person and online therapy for adults experiencing anxiety, trauma, burnout, and chronic stress in Santa Monica and throughout California.",
    type: "website",
    locale: "en_US",
    siteName: "Dr. Maya Reynolds, PsyD",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}