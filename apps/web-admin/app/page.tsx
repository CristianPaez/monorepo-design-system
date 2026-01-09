"use client"

import { Button } from "@repo/design-system/";
import { formatCurrency } from "@repo/shared";

export default function Page() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Web Admin</h1>
      <p>{formatCurrency(1200000)}</p>
      <Button onClick={() => alert("Admin!")}>Botón DS</Button>
    </main>
  );
}
