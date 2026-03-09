"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const locale = navigator.language.startsWith("sv") ? "sv" : "en";
    router.replace(`/${locale}`);
  }, []);

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "50vh" }}>
      <p>Choose your language / Välj språk:</p>
      <nav>
        <ul className="list-unstyled d-flex gap-3">
          <li>
            <a href="/cv/en">English</a>
          </li>
          <li>
            <a href="/cv/sv">Svenska</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
