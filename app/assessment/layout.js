import { Inter } from "next/font/google";
import "../globals.css"; // Import global styles
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VJC Overseas - Nuthan & Study Abroad Experts",
  description:
    "Get expert guidance on PR Visa, Study Visa, Job Seeker Visa, and Work Permit Visa. Contact VJC Overseas for a free consultation today!",
  keywords:
    "PR Visa, Study Visa, Immigration Consultants, Work Permit, Job Seeker Visa",
  robots: "index, follow",
  openGraph: {
    title: "VJC Overseas - Your Trusted Immigration Partner",
    description:
      "Get expert assistance for PR Visa, Study Visa, and Work Permit. Start your journey abroad today!",
    url: "https://www.vjcoverseas.com",
    type: "website",
    siteName: "VJC Overseas",
    images: [
      {
        url: "https://www.vjcoverseas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VJC Overseas Immigration Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vjcoverseas",
    title: "VJC Overseas - nuthan & Study Visa Experts",
    description:
      "Get assistance for PR Visa, Study Visa, and Work Permits. Contact VJC Overseas for a free assessment today!",
    images: ["https://www.vjcoverseas.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <main>{children}</main> {/* This renders all child pages */}
      <Footer />
    </div>
  );
}
