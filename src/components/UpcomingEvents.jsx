

import { Button } from "@headlessui/react"
import { Calendar } from "lucide-react"

export default function UpcomingEvents() {
  const events = [
    {
      title: "Bhagavad Gita Discourse",
      date: "Today, 6:00 PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Join us for an enlightening discourse on Chapter 12 of the Bhagavad Gita",
    },
    {
      title: "Bhajan Sandhya",
      date: "Sunday, 5:00 PM",
      image: "/placeholder.svg?height=200&width=300",
      description: "Experience the divine through devotional music and bhajans",
    },
    {
      title: "Spiritual Retreat",
      date: "Next Week",
      image: "/placeholder.svg?height=200&width=300",
      description: "A three-day spiritual retreat with Shri Pragyanand Ji Maharaj",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <Button className="w-full">Register Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

