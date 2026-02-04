"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setEmail("");
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to join waitlist. Please try again.");
      console.error("Waitlist error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-3">
          <Sparkles className="w-8 h-8 text-gray-700" />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-balance">
          Be the first to know
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2">
          We&apos;re building this now. Join our waitlist for early access and
          founding-member offers.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
              className="flex-1 text-sm"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 text-sm sm:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <p className="text-green-600 text-lg font-medium">
              Thank you for joining!
            </p>
            <p className="text-gray-600 text-base mt-2">
              We&apos;ll update you soon with exclusive early access and
              founding-member offers.
            </p>
          </div>
        )}
        {error && <p className="text-red-600 text-base mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default WaitlistSection;
