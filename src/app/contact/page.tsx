'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic (e.g., send to Wix Headless CMS)
    console.log('Form Submitted:', formData)
  }

  return (
    <div className="h-auto p-6 bg-black text-white flex flex-col">

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 text-white">
        <div className="max-w-6xl mx-auto text-white">
          <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 text-white ">
              <Card className="cards_black border-none">
                <CardHeader>
                  <CardTitle className='text-white'>Get in Touch</CardTitle>
                  <CardDescription className="text-gray-400">
                    We're here to help. Reach out to us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent  className="space-y-4 text-white">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-gray-400" />
                    <span>contact@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-gray-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-gray-400" />
                    <span>123 Business St, City, State 12345</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="cards_black border-none text-white">
                <CardHeader>
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="cards_black border-none text-white p-4">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white text-black"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white text-black"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="bg-white text-black"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-white text-black hover:bg-white hover:text-black p-4">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}