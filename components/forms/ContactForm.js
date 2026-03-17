'use client'

import { useState } from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

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
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container-custom max-w-2xl">
        <h2 className="heading-lg font-bold mb-2 text-2xl md:text-3xl">LET&apos;S TALK SPECIFICS!</h2>
        <p className="body-text text-gray-600 mb-10 text-sm md:text-base">
          We don&apos;t know what you need until you tell us. Fill in what you need for pricing, availability, 
          and documentation details — within 48 hours.
        </p>

        {submitted && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            Thank you! Your inquiry has been received. We&apos;ll get back to you within 48 business hours.
          </div>
        )}

        {/* Contact Details */}
        <h2 className="heading-lg font-bold mb-5 text-2xl md:text-3xl">WE REPLY FASTEST VIA BELOW!</h2>
        <div className="space-y-2 text-xs md:text-sm text-gray-700 mb-6">
          <a href="mailto:destinnyglobal@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer">
            <MdEmail size={18} className="text-gray-700" />
            destinnyglobal@gmail.com
          </a>
          <a href="https://wa.me/919373719966" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-700 transition-colors cursor-pointer">
            <SiWhatsapp size={16} className="text-green-600" />
            Vishal Patil - +91 9373719966
          </a>
          <a href="https://wa.me/918208676512" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-green-700 transition-colors cursor-pointer">
            <SiWhatsapp size={16} className="text-green-600" />
            Harshali Patil - +91 8208676512
          </a>
        </div>

        {/* Form Section */}
        <h2 className="heading-lg font-bold mb-8 text-2xl md:text-3xl mt-20" style={{color: '#0f75bc'}}>HOW CAN WE SUPPORT YOU?</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name"
            placeholder="Your Name*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="company"
            placeholder="Company Name*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.company}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="country"
            placeholder="Which country your company is based in?*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.country}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="product"
            placeholder="Mention Product Requirement*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.product}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="quantity"
            placeholder="Quantity Needed*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.quantity}
            onChange={handleChange}
            required 
          />
          <input 
            type="text" 
            name="packaging"
            placeholder="Preferred Packaging*" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            value={formData.packaging}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message"
            placeholder="Anything Else We Should Know" 
            className="w-full px-4 py-3 border border-gray-300 rounded-sm text-sm md:text-base bg-white focus:outline-none focus:border-gray-400" 
            rows="4" 
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          
          <div className="flex flex-col md:flex-row md:items-start md:gap-4 pt-4">
            <button 
              type="submit" 
              disabled={loading}
              className="btn-primary py-3 md:py-4 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed px-8 whitespace-nowrap"
            >
              {loading ? 'SENDING...' : 'SEND INQUIRY'}
            </button>
            <p className="text-xs md:text-sm text-gray-600 mt-4 md:mt-1">
              We respond to every genuine enquiry within 48 business hours. If your requirement is urgent, mention it in the message and include your WhatsApp number — we&apos;ll reach out directly.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
