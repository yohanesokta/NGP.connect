import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/libs/SessionProviders"
import ReduxProvider from "@/redux/provider";

export const metadata = {
  title: "Connect",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          <ReduxProvider comps={children}>
          </ReduxProvider>
        </SessionProvider>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </body>
    </html>
  );
}
