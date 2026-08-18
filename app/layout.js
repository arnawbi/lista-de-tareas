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
          <img
            className="float-item i1"
            alt=""
            src="https://loremflickr.com/240/160/lamborghini,supercar"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i2"
            alt=""
            src="https://loremflickr.com/240/160/money,cash"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i3"
            alt=""
            src="https://loremflickr.com/240/160/diamond,jewelry"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i4"
            alt=""
            src="https://loremflickr.com/240/160/gold,luxury"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i5"
            alt=""
            src="https://loremflickr.com/240/160/ferrari,sportscar"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i6"
            alt=""
            src="https://loremflickr.com/240/160/yacht,luxury"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i7"
            alt=""
            src="https://loremflickr.com/240/160/rolex,watch"
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <img
            className="float-item i8"
            alt=""
            src="https://loremflickr.com/240/160/mansion,luxury"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
