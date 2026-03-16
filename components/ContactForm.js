'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    packaging: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Send email via API (you can integrate Nodemailer, SendGrid, etc.)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          name: '',
          company: '',
          country: '',
          product: '',
          quantity: '',
          packaging: '',
          message: ''
        })
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        alert('Error sending inquiry. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Error sending inquiry. Please contact us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom max-w-2xl px-4 md:px-8">
        <h2 className="heading-lg font-bold mb-2 text-2xl md:text-3xl">LET'S TALK SPECIFICS!</h2>
        <p className="body-text text-gray-600 mb-8 text-sm md:text-base">
          We don't know what you need until you tell us. Fill in what you need for pricing, availability, 
          and documentation details — which we'll respond with actual offers and requirements.
        </p>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Thank you! Your inquiry has been received. We'll get back to you within 48 business hours.
          </div>
        )}

        {/* Contact Details */}
        <h3 className="heading-sm text-primary mb-6 font-bold text-lg md:text-xl">WE REPLY FASTEST VIA BELOW</h3>
        <div className="space-y-3 text-sm md:text-base text-gray-700 mb-8">
          <p>📧 <a href="mailto:destinygllobal@gmail.com" className="text-primary hover:underline">destinygllobal@gmail.com</a></p>
          <p>📱 Local: <a href="tel:+919372731656" className="text-primary hover:underline">+91 (9372) 731656</a></p>
          <p>📱 Diaspora: <a href="tel:+919306306012" className="text-primary hover:underline">+91 (9306) 306012</a></p>
        </div>

        {/* Form Section */}
        <h3 className="heading-sm text-primary mb-6 font-bold text-lg md:text-xl">HOW CAN WE SUPPORT YOU?</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="company"
            placeholder="Company Name*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.company}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="country"
            placeholder="Country*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.country}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="product"
            placeholder="Mention Product Requirement*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.product}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="quantity"
            placeholder="Quantity Needed*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.quantity}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="packaging"
            placeholder="Preferred Packaging*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            value={formData.packaging}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Anything Else We Should Know*" 
            className="input-field w-full px-4 py-3 border-b border-gray-300 text-sm md:text-base" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          <p className="text-xs md:text-sm text-gray-600 mt-4 py-4 border-t border-gray-200">
            We respond to every genuine enquiry within 48 business hours. If your requirement is urgent, mention it in the message and we'll mark it as urgent priority.
          </p>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full btn-primary mt-8 py-3 md:py-4 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'SENDING...' : 'SEND INQUIRY'}
          </button>
        </form>
      </div>
    </section>
  )
}
