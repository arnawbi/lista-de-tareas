import "./globals.css";

export const metadata = {
  title: "Mi lista de tareas",
  description: "Mi primera app con Next.js, GitHub, Vercel y Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
