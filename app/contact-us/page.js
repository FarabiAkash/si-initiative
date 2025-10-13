'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import contactImg from '../../public/assets/contact.jpg'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'

const Page = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [loading, setLoading] = useState(false)

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
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    from_email: form.email,
                    message: form.message
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )

            toast.success('Message sent successfully!')
            setForm({ name: '', email: '', message: '' })
        } catch (err) {
            console.error(err)
            toast.error('Something went wrong.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='bg-[#0B3641]'>
            <div className='px-4 sm:px-12 xl:px-36 pt-24 pb-[35px] flex flex-col justify-center items-center gap-8 lg:gap-28 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
                {/* Breadcrumb */}
                <div className='w-full h-[56px] flex justify-between gap-4 border-t border-b border-t-[#ffffff33] border-b-[#ffffff33]'>
                    <p className='lg:w-1/5 py-[16px] leading-[24px] text-[16px] font-[500] flex justify-start items-center gap-[16px]'>
                        <Link href={'/'}>
                            <span className='text-[#ffffffcc]'>Home</span>
                        </Link>
                        <span className='text-[#F05232]'>/</span>
                        <span className='text-primary'>Contact Us</span>
                    </p>
                </div>

                <div className='bg-white rounded-[16px] border border-[#F1F3F4] p-4 sm:p-16 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 relative'>
                    {/* Left: Contact Form */}
                    <div className='lg:w-1/2 pr-4 lg:pr-10'>
                        <h2 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>Get in Touch</h2>
                        <div className='w-full flex justify-start items-center my-3'>
                            <hr className='w-full border-[1px] border-primary' />
                        </div>
                        <p className='text-titleSubtitle text-base'>
                            If you need more information or have any queries, feel free to reach out.
                        </p>
                        <form className='space-y-[24px] pt-6' onSubmit={handleSubmit}>
                            <div>
                                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>Full Name</label>
                                <input
                                    type='text'
                                    name='name'
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder='Your full name'
                                    className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none text-black'
                                />
                            </div>
                            <div>
                                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder='Your email address'
                                    className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none text-black'
                                />
                            </div>
                            <div>
                                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>Message</label>
                                <textarea
                                    name='message'
                                    value={form.message}
                                    onChange={handleChange}
                                    rows='4'
                                    placeholder='Write here'
                                    className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none text-black'
                                />
                            </div>
                            <button
                                type='submit'
                                disabled={loading}
                                className='rounded-[28px] bg-primary text-white text-[14px] font-[500] leading-[24px] px-[49px] py-[8px]'
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Right: Contact Info + Image */}
                    <div className='w-full lg:w-1/2 lg:relative flex flex-col items-end'>
                        <div className='w-full h-auto lg:h-[500px] rounded-[8px] lg:relative lg:mt-[-25%]'>
                            <Image src={contactImg} alt='Contact Us' className='rounded-[8px] object-cover w-full h-full' />
                        </div>
                        <div className='mt-6 space-y-[25px] w-full'>
                            <div className='flex flex-wrap gap-4 justify-between items-center'>
                                <div className='flex items-center gap-3'>
                                    <div className='border-[1px] w-[44px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                                        <Phone className='w-[24px] h-[24px] text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>Call Us</p>
                                        <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>+880 1701 663 986</p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <div className='border-[1px] w-[44px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                                        <Mail className='w-[24px] h-[24px] text-primary' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>Email Us</p>
                                        <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>innovation@cmedhealth.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start gap-3'>
                                <div className='border-[1px] w-[44px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                                    <MapPin className='w-[24px] h-[24px] text-primary' />
                                </div>
                                <div>
                                    <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>Visit Us</p>
                                    <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>
                                        House 460, Road 31, New DOHS, Mohakhali, Dhaka - 1212
                                    </p>
                                </div>
                            </div>
                            <p className='text-titleSubtitle text-[16px] font-[400] leading-[20px] border border-[#F1F3F4] rounded-[8px] p-[8px] text-center'>
                                Our office is open Sunday to Thursday, from 9 pm to 5 pm
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
