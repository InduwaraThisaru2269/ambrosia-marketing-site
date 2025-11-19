'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const WaitlistSection = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle waitlist signup
    console.log('Email submitted:', email)
    setEmail('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="waitlist" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-balance">
          Be the first to know
        </h2>
        <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2">
          We&apos;re building this now. Join our waitlist for early access and founding-member offers.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 text-sm"
            />
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 text-sm sm:text-base whitespace-nowrap"
            >
              Join the Waitlist
            </Button>
          </form>
        ) : (
          <div className="max-w-md mx-auto">
            <p className="text-green-600 text-lg font-medium">
              Thank you for joining! 
            </p>
            <p className="text-gray-600 text-base mt-2">
              We&apos;ll update you soon with exclusive early access and founding-member offers.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default WaitlistSection
