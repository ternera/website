import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EXIF",
  description: "EXIF Data Information",
};

export default function Exif() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">EXIF Data</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        content will go here
        </p>
      </div>
    </section>
  );
}