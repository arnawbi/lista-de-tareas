import "./globals.css";

export const metadata = {
  title: "Mi lista de tareas",
  description: "Mi primera app con Next.js, GitHub, Vercel y Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="bg-decor" aria-hidden="true">
          <span className="float-item i1">💰</span>
          <span className="float-item i2">🏎️</span>
          <span className="float-item i3">💎</span>
          <span className="float-item i4">👑</span>
          <span className="float-item i5">💵</span>
          <span className="float-item i6">🏎️</span>
          <span className="float-item i7">💰</span>
          <span className="float-item i8">💎</span>
        </div>
        {children}
      </body>
    </html>
  );
}
