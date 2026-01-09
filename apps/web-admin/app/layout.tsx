import "@repo/design-system/theme.css";
import { ThemeProvider } from "@repo/design-system";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider theme="red">{children}</ThemeProvider>
      </body>
    </html>
  );
}
