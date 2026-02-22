'use client'
import { X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { sendEmailWithCaptcha } from '@/lib/emailClient'

const ContactModal = ({ isOpen, onClose, title, subtitle, source, templateSlug = 'get-in-touch' }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill out all fields')
      return
    }

    setLoading(true)
    try {
      await sendEmailWithCaptcha({
        templateSlug,
        replyTo: form.email,
        params: {
          name: form.name,
          email: form.email,
          message: source ? `From ${source} - ${form.message}` : form.message,
        },
      })

      toast.success('Message sent successfully!')
      setForm({ name: '', email: '', message: '' })
      onClose()
    } catch (error) {
      console.error('Contact modal email error:', error)
      toast.error(error?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
      <div className='bg-white w-[90%] max-w-md rounded-lg p-6 relative shadow-lg'>
        {/* Close Icon */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-black'
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className='text-[24px] font-bold mb-2 text-[#0B3641] leading-[32px] text-left'>
          {title ? title : 'Get in Touch'}
        </h2>
        <hr className='border-t-[1px] border-[#19BCE5] w-full mb-2' />
        <p className='text-[#0B3641] mb-6 text-[16px] leading-[20px] font-normal text-left'>
          {subtitle ? subtitle : 'If you need more information or have any queries, feel free to reach out.'}
        </p>

        {/* Form */}
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col items-start'>
            <label className='text-[16px] leading-[24px] font-semibold text-[#0B3641]'>
              Full Name
            </label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='Your full name'
              className='w-full mt-1 p-2 border border-[#C2D2D6] rounded outline-none focus:ring-2 focus:ring-blue-400 text-black'
            />
          </div>

          <div className='flex flex-col items-start'>
            <label className='text-[16px] leading-[24px] font-semibold text-[#0B3641]'>
              Email
            </label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Your email address'
              className='w-full mt-1 p-2 border border-[#C2D2D6] rounded outline-none focus:ring-2 focus:ring-blue-400 text-black'
            />
          </div>

          <div className='flex flex-col items-start'>
            <label className='text-[16px] leading-[24px] font-semibold text-[#0B3641]'>
              Message
            </label>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Write here'
              rows={4}
              className='w-full mt-1 p-2 border border-[#C2D2D6] rounded outline-none focus:ring-2 focus:ring-blue-400 resize-none text-black'
            />
          </div>

          <div className='flex items-start justify-start'>
            <button
            type='submit'
            disabled={loading}
            className='bg-[#19bce6] text-white font-medium text-sm px-6 py-2 rounded-full hover:bg-[#0ea5e9] cursor-pointer'
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactModal
