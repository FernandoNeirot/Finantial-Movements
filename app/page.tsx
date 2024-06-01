'use client'

import React from "react";

export default function Home() {
  React.useEffect(() => {
    window.location.assign("/financial-movements")
  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
