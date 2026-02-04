'use client'

import { useState } from 'react'
import { Check, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ContactSalesModal from '@/components/contact-sales-modal'

const PlansSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small restaurants starting their digital transformation',
      features: [
        'Reservation management',
        'Basic online ordering',
        'Staff scheduling (up to 10 team members)',
        'Inventory tracking',
        'Customer support via email',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Built for growing restaurants managing multiple locations',
      features: [
        'Everything in Starter, plus:',
        'Advanced analytics & reporting',
        'Multi-location management',
        'Staff scheduling (unlimited)',
        'POS system integration',
        'Priority phone support',
        'Custom branding',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large restaurants with advanced operational needs',
      features: [
        'Everything in Professional, plus:',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security & compliance',
        'API access',
        'Custom training & onboarding',
        '24/7 premium support',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white" id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <CreditCard className="w-12 h-12 text-red-500" strokeWidth={1.5} />
          </div>
          <p className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-balance">
            Plans for every stage
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2">
            Choose the plan that fits your restaurant. Scale up anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-lg border transition-all ${
                plan.highlighted
                  ? 'border-red-500 shadow-lg scale-105 md:scale-100 md:ring-2 md:ring-red-500'
                  : 'border-gray-200 shadow'
              } bg-white overflow-hidden`}
            >
              {/* Plan Header */}
              <div className={`p-6 sm:p-8 ${plan.highlighted ? 'bg-red-50' : 'bg-white'}`}>
                <h3 className="text-2xl sm:text-3xl font-serif mb-2">{plan.name}</h3>
                <div className="mb-3">
                  <span className="text-3xl sm:text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 text-sm ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="flex-grow px-6 sm:px-8 py-6 sm:py-8">
                <ul className="space-y-3 sm:space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex gap-3">
                      <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="p-6 sm:p-8 border-t border-gray-200">
                <Button
                  onClick={() => plan.cta === 'Contact Sales' && setIsContactModalOpen(true)}
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  } text-base sm:text-lg font-medium py-2.5 sm:py-3 rounded-lg transition-colors`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-600 text-sm sm:text-base">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>

      {/* Contact Sales Modal */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  )
}

export default PlansSection
