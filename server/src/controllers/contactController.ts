import { Request, Response } from 'express'
import { ContactFormData } from '../types/contact'
import { sendContactEmail } from '../middleware/emailService'

// Simple input validator
const validateContactForm = (data: Partial<ContactFormData>): string | null => {
  if (!data.name    || data.name.trim().length < 2)    return 'Please enter your full name.'
  if (!data.email   || !data.email.includes('@'))       return 'Please enter a valid email address.'
  if (!data.subject || data.subject.trim().length < 3)  return 'Please enter a subject.'
  if (!data.message || data.message.trim().length < 10) return 'Message must be at least 10 characters.'
  return null
}

export const handleContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone, subject, message } = req.body as Partial<ContactFormData>

    // Validate
    const error = validateContactForm({ name, email, subject, message })
    if (error) {
      res.status(400).json({ success: false, error })
      return
    }

    const formData: ContactFormData = {
      name:    name!.trim(),
      email:   email!.trim().toLowerCase(),
      phone:   phone?.trim() || '',
      subject: subject!.trim(),
      message: message!.trim(),
    }

    await sendContactEmail(formData)

    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
    })
  } catch (err) {
    console.error('Contact form error:', err)
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or email us directly at sentinel.grcadvisory@gmail.com',
    })
  }
}
