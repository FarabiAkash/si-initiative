'use client'
import { useState, useEffect } from 'react'
import Nav from './Nav'
import ContactModal from './ContactModal'

const ClientWrapper = ({ children }) => {
  const [showContact, setShowContact] = useState(false)

  // Warm email service key on first load (login once, cache server-side)
  useEffect(() => {
    fetch('/api/email/init').catch(() => {})
  }, [])

  return (
    <>
      <Nav openContactModal={() => setShowContact(true)} />
      {children}
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
        source={'Contact Us: '}
      />
    </>
  )
}

export default ClientWrapper
