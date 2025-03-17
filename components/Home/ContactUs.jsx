import { Mail, Phone, MapPin } from 'lucide-react'

const ContactUs = () => {
  return (
    <div className='bg-[#F5FDFF] py-16 px-6 xl:px-36 flex justify-center'>
      <div className='bg-white rounded-[16px] border border-[#F1F3F4] p-16 w-[80vw] lg:w-[60vw] flex flex-col justify-start items-start gap-2'>
        <h2 className='text-titleSubtitle text-[32px] font-[700] leading-[40px] '>
          Have More Questions? Let’s Connect!
        </h2>
        <div className='w-full flex justify-start items-center my-3'>
          <hr className='w-2/5 border-[1px] border-primary' />
          <hr className='w-3/5 border-[1px] border-[#F1F3F4]' />
        </div>

        <div className=' flex flex-col lg:flex-row '>
          {/* Left Section - Contact Details */}
          <div className='lg:w-1/2 pr-4 lg:pr-10'>
            <p className='text-titleSubtitle text-base'>
              If you need more information or have any queries, feel free to
              reach out.
            </p>

            <div className='mt-6 space-y-[25px]'>
              <div className='flex items-center gap-3 '>
                <div className='border-[1px] w-[44px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                  <Phone className='w-[24px] h-[24px] text-primary' />
                </div>
                <div>
                  <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>
                    Call Us
                  </p>
                  <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>
                    +02 965 8645
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <div className='border-[1px] w-[44px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                  <Mail className='w-[24px] h-[24px] text-primary' />
                </div>
                <div>
                  <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>
                    Email Us
                  </p>
                  <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>
                    info@hbb.com
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='border-[1px] w-[60px] h-[44px] border-[#F1F3F4] rounded-[8px] flex items-center justify-center'>
                  <MapPin className='w-[24px] h-[24px] text-primary' />
                </div>
                <div>
                  <p className='text-[16px] font-[700] text-titleSubtitle leading-[20px]'>
                    Visit Us
                  </p>
                  <p className='text-[#6D787B] text-[16px] leading-[20px] font-[400]'>
                    House 460, Road 31, New DOHS, Mohakhali, Dhaka - 1212
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className='lg:w-1/2 mt-6 md:mt-0  pt-8 lg:pt-0'>
            <form className='space-y-[24px]'>
              <div>
                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>
                  Full Name
                </label>
                <input
                  type='text'
                  placeholder='Your full name'
                  className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none'
                />
              </div>

              <div>
                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>
                  Email
                </label>
                <input
                  type='email'
                  placeholder='Your email address'
                  className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none'
                />
              </div>

              <div>
                <label className='text-[16px] font-[600] leading-[24px] text-titleSubtitle'>
                  Message
                </label>
                <textarea
                  rows='4'
                  placeholder='Write here'
                  className='w-full mt-1 px-4 py-2 border border-[#C2D2D6] rounded-[4px] focus:ring-2 focus:ring-primary outline-none'
                />
              </div>

              <button className='rounded-[28px] bg-primary text-white text-[14px] font-[500] leading-[24px] px-[49px] py-[8px] '>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
