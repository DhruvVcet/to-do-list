"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function URLShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = async () => {
    if (!longUrl.trim()) return;
    try {
      const response = await fetch("https://api.shrtco.de/v2/shorten?url=" + longUrl);
      const data = await response.json();
      if (data.ok) {
        setShortUrl(data.result.full_short_link);
      } else {
        setShortUrl("Error shortening URL");
      }
    } catch (error) {
      setShortUrl("Failed to shorten URL");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
        <CardContent>
          <h2 className="text-xl font-bold mb-4">URL Shortener</h2>
          <div className="flex space-x-2 mb-4">
            <Input
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              placeholder="Enter long URL"
            />
            <Button onClick={shortenUrl}>Shorten</Button>
          </div>
          {shortUrl && (
            <p className="mt-4 text-blue-600 break-all">Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
