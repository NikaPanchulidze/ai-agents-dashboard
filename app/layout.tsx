import QueryProvider from "@/providers/query-provider";
import "../styles/globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Ai Activity Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>
      </body>
    </html>
  );
}
