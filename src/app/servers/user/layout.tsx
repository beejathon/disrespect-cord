import React from "react";

export default async function InnerChannelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav>hello from profile dashboard</nav>
      {children}
    </section>
  );
}
