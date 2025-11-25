'use client'
import { useState } from 'react'
import Nav from './Nav'
import ContactModal from './ContactModal'

const ClientWrapper = ({ children }) => {
  const [showContact, setShowContact] = useState(false)

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
