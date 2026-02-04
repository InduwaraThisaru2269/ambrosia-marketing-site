'use client'

import { useState } from 'react'
import { X, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ContactSalesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [copied, setCopied] = useState(false)
  const contactEmail = 'ambrosiahq@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSendEmail = () => {
    window.location.href = `mailto:${contactEmail}?subject=Enterprise%20Plan%20Inquiry&body=Hi%20Ambrosia%20Team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20your%20Enterprise%20plan.%0A%0ABest%20regards`
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg">
                <Mail className="w-5 h-5 text-red-500" />
              </div>
              <h2 className="text-xl font-serif text-gray-900">Get in Touch</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              Interested in our Enterprise plan? We'd love to discuss how Ambrosia can help your restaurant business grow.
            </p>

            {/* Email Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
              <p className="text-sm text-gray-600 mb-2">Contact Email</p>
              <p className="text-lg font-semibold text-red-600">{contactEmail}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                onClick={handleSendEmail}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2.5 rounded-lg transition-colors"
              >
                Send Email
              </Button>
              <Button
                onClick={handleCopyEmail}
                className={`w-full transition-all ${
                  copied
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                } font-medium py-2.5 rounded-lg`}
              >
                {copied ? '✓ Email Copied' : 'Copy Email'}
              </Button>
            </div>

            {/* Footer Text */}
            <p className="text-xs text-gray-500 text-center mt-4">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactSalesModal
