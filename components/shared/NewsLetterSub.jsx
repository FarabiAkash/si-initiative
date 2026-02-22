'use client'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'
import { subscribeToNewsletter } from '@/lib/newsletter'
import { sendEmailWithCaptcha } from '@/lib/emailClient'

const NewsLetterSub = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubscribe = async () => {
    if (!email) {
      toast.error('Please enter your email')
      return
    }

    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)
    try {
      await subscribeToNewsletter(email)
      try {
        await sendEmailWithCaptcha({
          templateSlug: 'subscribe-to-newsletter',
          replyTo: email,
          params: { email },
        })
      } catch (emailErr) {
        console.error('Newsletter email error:', emailErr)
        toast.error('Subscribed but notification email failed.')
      }
      toast.success('Thank you for subscribing!')
      setEmail('')
    } catch (err) {
      if (err.message === 'You are already subscribed with this email.') {
        toast.error(err.message)
      } else {
        console.error('Subscription error:', err)
        toast.error(err?.message || 'Failed to subscribe. Please try again later.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='lg:w-1/3'>
      <h3 className='text-[20px] font-[500] leading-[32px] text-[#F05232]'>
        Subscribe to Our Newsletter!
      </h3>
      <p className='text-paragraph mt-3 text-base text-[400]'>
        Stay ahead in your journey, subscribe to our newsletter for the latest
        innovations, insights, and breakthroughs!
      </p>
      <div className='mt-4 flex flex-col gap-2'>
        <p className='text-[16px] font-[500] text-titleSubtitle leading-[20px]'>
          Email
        </p>
        <div className='flex justify-center items-center gap-1'>
          <input
            type='email'
            placeholder='Your email address'
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full border border-[#C2D2D6] focus:ring-2 focus:ring-primary outline-none px-[32px] py-[8px] rounded-[4px]'
          />
          <button
            disabled={loading}
            onClick={handleSubscribe}
            className='bg-primary text-white px-[20px] sm:px-[32px] py-[8px] rounded-[4px]'
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='flex gap-4 mt-4'>
        <a
          href='#'
          className='text-[#49A7DC] hover:text-[#008FCC]'
          target='_blank'
        >
          <Facebook size={20} />
        </a>
        <a
          href='#'
          className='text-[#49A7DC] hover:text-[#008FCC]'
          target='_blank'
        >
          <Linkedin size={20} />
        </a>
        <a
          href='#'
          className='text-[#49A7DC] hover:text-[#008FCC]'
          target='_blank'
        >
          <Twitter size={20} />
        </a>
        <a
          href='#'
          className='text-[#49A7DC] hover:text-[#008FCC]'
          target='_blank'
        >
          <Youtube size={20} />
        </a>
      </div>
    </div>
  )
}

export default NewsLetterSub
