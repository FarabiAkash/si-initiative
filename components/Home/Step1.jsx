'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'

const times = [
  '9:00 am',
  '9:30 am',
  '10:00 am',
  '10:30 am',
  '11:00 am',
  '11:30 am',
  '12:00 pm',
  '12:30 pm',
  '1:00 pm',
  '1:30 pm',
  '2:00 pm',
  '2:30 pm',
  '3:00 pm',
  '3:30 pm',
  '4:00 pm',
  '4:30 pm'
]

const Step1 = ({ formData, handleData, next, onClose }) => {
  const today = new Date()
  const [currentMonth, setCurrentMonth] = useState(today.getMonth())
  const [currentYear, setCurrentYear] = useState(today.getFullYear())
  const [selectedDate, setSelectedDate] = useState(formData.date || '')
  const [selectedTime, setSelectedTime] = useState(formData.time || '')

  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1).getDay() // 0 (Sun) - 6 (Sat)
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = []

    const offset = (firstDay + 6) % 7 // convert to Mon=0...Sun=6
    for (let i = 0; i < offset; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }

    return days
  }

  const formatDate = date =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      '0'
    )}-${String(date.getDate()).padStart(2, '0')}`

  const handleDateClick = date => {
    const formatted = formatDate(date)
    setSelectedDate(formatted)
    handleData('date', formatted)
  }

  const handleTimeClick = time => {
    setSelectedTime(time)
    handleData('time', time)
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const prevMonth = () => {
    const isCurrentMonth =
      currentYear === today.getFullYear() && currentMonth === today.getMonth()
    if (!isCurrentMonth) {
      if (currentMonth === 0) {
        setCurrentMonth(11)
        setCurrentYear(currentYear - 1)
      } else {
        setCurrentMonth(currentMonth - 1)
      }
    }
  }

  const days = getDaysInMonth(currentMonth, currentYear)

  const canGoNext = selectedDate && selectedTime && formData.timeZone

  return (
    <div>
      <div className='flex justify-between items-center pb-4'>
        <h1 className='text-2xl font-bold text-gray-800'>Schedule a Call</h1>
        {/* buttons */}
        <div className='flex justify-between gap-4 items-center'>
          <button onClick={onClose} className='text-[#9DADB1] text-sm'>
            Cancel
          </button>
          <button
            onClick={next}
            disabled={!canGoNext}
            className={`px-6 py-2 rounded-full text-white ${
              canGoNext
                ? 'bg-[#00C2FF]'
                : 'bg-[#19BCE51A] cursor-not-allowed text-[#9DADB1]'
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <div className='border-b border-gray-300 mb-4'></div>

      <div className='flex flex-wrap justify-around items-start gap-6'>
        {/* Date Picker */}
        <div>
          <p className='font-medium text-base mb-2'>Select Date</p>
          <div className='flex justify-between items-center mb-2'>
            <button
              onClick={prevMonth}
              className='text-xl rounded-[8px] w-[32px] h-[32px] flex justify-center items-center border border-[#DDDDDD] text-gray-600 disabled:opacity-30'
              disabled={
                currentYear === today.getFullYear() &&
                currentMonth === today.getMonth()
              }
            >
              <ChevronLeft size={20} />
            </button>
            <p className='font-semibold'>
              {new Date(currentYear, currentMonth).toLocaleString('default', {
                month: 'long',
                year: 'numeric'
              })}
            </p>
            <button
              onClick={nextMonth}
              className='text-xl rounded-[8px] text-gray-600 w-[32px] h-[32px] flex justify-center items-center border border-[#DDDDDD]'
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className='grid grid-cols-7 gap-1 text-sm text-gray-500 mb-2'>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => (
              <div key={d} className='text-center'>
                {d}
              </div>
            ))}
          </div>

          <div className='grid grid-cols-7 gap-2 text-center'>
            {days.map((date, index) => {
              if (!date) return <div key={index}></div>

              const isPast =
                date <
                new Date(today.getFullYear(), today.getMonth(), today.getDate())
              const isSelected = formatDate(date) === selectedDate

              const isToday =
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()

              return (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateClick(date)}
                  disabled={isPast}
                  className={`p-2 w-[32px] h-[32px] rounded-[8px] flex justify-center items-center text-sm transition
                    ${
                      isPast
                        ? 'text-gray-300 cursor-not-allowed'
                        : isSelected
                        ? 'bg-[#00C2FF] text-white'
                        : 'hover:bg-gray-100'
                    }
                    ${isToday && !isSelected ? 'border-2 border-[#00C2FF]' : ''}
                  `}
                >
                  {date.getDate()}
                </button>
              )
            })}
          </div>
        </div>

        {/* Time + Timezone */}
        <div className='h-[300px] overflow-y-scroll pr-2 flex flex-col gap-4 w-full max-w-xs md:max-w-sm'>
          <div>
            <p className='font-medium text-base mb-2'>Your Timezone</p>
            <div className='text-sm'>
              <TimezoneSelect
                value={formData.timeZone}
                onChange={tz => {
                  // react-timezone-select returns an object with .value
                  const value = typeof tz === 'string' ? tz : tz.value
                  handleData('timeZone', value)
                }}
              />
            </div>
            <p className='text-xs text-gray-500 mt-1'>
              We’ll use this timezone to schedule your call accurately.
            </p>
          </div>
          <div>
            <p className='font-medium text-base mb-2'>Select Time</p>
            {times.map(time => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                className={`block w-full text-left border px-3 py-[6px] rounded mb-2 ${
                  selectedTime === time
                    ? 'bg-[#00C2FF] text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Step1
