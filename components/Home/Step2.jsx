import { Calendar, Clock } from 'lucide-react'
import logo from '../../public/assets/logo.png'
import Image from 'next/image'

const Step2 = ({ formData, handleData, next, back }) => {
  const formattedDate = (() => {
    if (!formData.date) return ''
    const [y, m, d] = formData.date.split('-').map(Number)
    const dateObj = new Date(y, m - 1, d) // avoid UTC shift
    return dateObj.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  })()

  const getEndTime = startTime => {
    if (!startTime) return ''

    const [time, modifier] = startTime.split(' ')
    let [hours, minutes] = time.split(':').map(Number)

    if (modifier.toLowerCase() === 'pm' && hours !== 12) hours += 12
    if (modifier.toLowerCase() === 'am' && hours === 12) hours = 0

    const date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes + 30)

    let endHours = date.getHours()
    const endMinutes = date.getMinutes()
    const endModifier = endHours >= 12 ? 'pm' : 'am'

    endHours = endHours % 12 || 12

    return `${endHours}:${String(endMinutes).padStart(2, '0')} ${endModifier}`
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl text-[#001A2E]'>Schedule a Call</h2>
        <div className='flex items-center gap-4'>
          <button onClick={back} className='text-gray-500 font-medium'>
            Back
          </button>
          <button
            onClick={next}
            className='bg-[#00C2FF] text-white px-6 py-2 rounded-full font-semibold'
          >
            Confirm
          </button>
        </div>
      </div>

      <hr className='border-t border-[#00C2FF]' />

      {/* Body */}
      <div className='flex flex-col md:flex-row gap-6 mt-4'>
        {/* Left: Meeting Info */}
        <div className='md:w-1/2 space-y-4 border-r pr-4'>
          <div className='flex flex-col justify-start items-start gap-2'>
            <div className='w-[110px]'>
              <Image
                src={logo}
                alt='CMED Logo'
                className='w-full h-full object-cover'
              />
            </div>
            <p className='font-medium text-base text-[#001A2E]'>
              Meeting with CMED <br /> Innovation Team
            </p>
          </div>

          <div className='flex items-center gap-2 text-[#00C2FF]'>
            <Calendar size={18} />
            <p className='text-[#001A2E]'>{formattedDate}</p>
          </div>

          <div className='flex flex-col gap-1 text-[#00C2FF]'>
            <div className='flex items-center gap-2'>
              <Clock size={18} />
              <p className='text-[#001A2E]'>
                {formData.time} – {getEndTime(formData.time)}
              </p>
            </div>
            <p className='text-xs text-[#001A2E]'>
              Timezone:{' '}
              <span className='font-semibold'>{formData.timeZone}</span>
            </p>
          </div>
        </div>

        {/* Right: Form Fields */}
        <div className='md:w-1/2 space-y-4'>
          <div>
            <label className='font-semibold text-[#001A2E]'>Full Name</label>
            <input
              type='text'
              placeholder='Your full name'
              className='w-full border border-[#D0D5DD] p-3 rounded text-sm'
              value={formData.name}
              autoFocus
              onChange={e => handleData('name', e.target.value)}
            />
          </div>

          <div>
            <label className='font-semibold text-[#001A2E]'>Email</label>
            <input
              type='email'
              placeholder='Your email address'
              className='w-full border border-[#D0D5DD] p-3 rounded text-sm'
              value={formData.email}
              onChange={e => handleData('email', e.target.value)}
            />
          </div>

          <div>
            <label className='font-semibold text-[#001A2E]'>Notes</label>
            <textarea
              placeholder='Write here'
              className='w-full border border-[#D0D5DD] p-3 rounded text-sm h-24 resize-none'
              value={formData.notes}
              onChange={e => handleData('notes', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step2
