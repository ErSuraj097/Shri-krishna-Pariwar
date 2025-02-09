"use client"

import { useState, useEffect } from "react"
// import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Devotee Name",
      text: "The spiritual guidance from Shri Pragyanand Ji Maharaj has transformed my life completely.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Another Devotee",
      text: "The peace and wisdom I found here is beyond words. Truly a divine experience.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Grateful Devotee",
      text: "The teachings have helped me understand the deeper meaning of life and spirituality.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Devotee Experiences</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            {/* <Image
              src={testimonials[current].image || "/placeholder.svg"}
              alt={testimonials[current].name}
              width={100}
              height={100}
              className="mx-auto rounded-full mb-4"
            /> */}
            <p className="text-gray-700 text-lg mb-4 italic">"{testimonials[current].text}"</p>
            <p className="font-semibold text-orange-600">{testimonials[current].name}</p>
          </div>
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === current ? "bg-orange-600" : "bg-orange-200"}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

