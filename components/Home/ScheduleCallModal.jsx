'use client'
import { useState, useEffect, useRef } from 'react'
import toast from 'react-hot-toast'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { scheduleCall } from '@/lib/scheduleCall'

const ScheduleCallModal = ({ isOpen, onClose }) => {
  const browserTimeZone =
    typeof Intl !== 'undefined'
      ? Intl.DateTimeFormat().resolvedOptions().timeZone
      : 'UTC'

  const initialFormData = {
    date: '',
    time: '',
    name: '',
    email: '',
    notes: '',
    timeZone: browserTimeZone, // auto-detected, hidden from user
  }

  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialFormData)
  const [showTransition, setShowTransition] = useState(true)
  const [loading, setLoading] = useState(false)
  const modalRef = useRef(null)

  // Trap focus + ESC close
  useEffect(() => {
    if (!isOpen) return
    const focusableElements = modalRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    )
    const firstEl = focusableElements?.[0]
    const lastEl = focusableElements?.[focusableElements.length - 1]

    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl?.focus()
        } else if (document.activeElement === lastEl) {
          e.preventDefault()
          firstEl?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstEl?.focus()
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Reset form after step 3 (confirmation shown)
  useEffect(() => {
    if (step === 3) {
      const t = setTimeout(() => {
        setFormData(initialFormData)
        setStep(1)
        onClose()
      }, 3000)
      return () => clearTimeout(t)
    }
  }, [step, onClose])

  const handleData = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const next = async () => {
    // Step 1 validation: date/time only (timezone is auto)
    if (step === 1 && (!formData.date || !formData.time)) {
      alert('Please select both date and time.')
      return
    }

    // Step 2 validation + schedule creation
    if (step === 2) {
      if (!formData.name || !formData.email) {
        alert('Please enter your name and email.')
        return
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(formData.email)) {
        alert('Invalid email address.')
        return
      }

      setLoading(true)
      try {
        // timeZone is included in formData
        await scheduleCall(formData)
        toast.success('Call scheduled successfully!')
        setShowTransition(false)
        setTimeout(() => {
          setStep(prev => prev + 1)
          setShowTransition(true)
        }, 150)
      } catch (err) {
        console.error('Schedule error:', err)
        toast.error(err.message || 'Failed to schedule the call. Try again later.')
      } finally {
        setLoading(false)
      }
      return
    }

    // default transition for other steps
    setShowTransition(false)
    setTimeout(() => {
      setStep(prev => prev + 1)
      setShowTransition(true)
    }, 150)
  }

  const back = () => {
    if (loading) return
    setShowTransition(false)
    setTimeout(() => {
      setStep(prev => prev - 1)
      setShowTransition(true)
    }, 150)
  }

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className='fixed inset-0 z-50 bg-black/40 flex justify-center items-center'
      onClick={handleOverlayClick}
      aria-modal='true'
      role='dialog'
      aria-labelledby='modal-title'
      ref={modalRef}
    >
      <div className='bg-white rounded-[12px]  w-[90%] md:w-[80%] xl:w-[40%] p-6 shadow-lg h-[90vh] xl:h-[60vh] overflow-y-auto transition-all duration-300'>
        <div
          key={step}
          className={`transition duration-300 ease-in-out transform ${
            showTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {step === 1 && (
            <Step1
              next={next}
              formData={formData}
              handleData={handleData}
              onClose={onClose}
            />
          )}
          {step === 2 && (
            <Step2
              next={next}
              back={back}
              formData={formData}
              handleData={handleData}
              loading={loading}
            />
          )}
          {step === 3 && <Step3 onClose={onClose} />}
        </div>
      </div>
    </div>
  )
}

export default ScheduleCallModal
