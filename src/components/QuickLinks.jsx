import {  Heart, Calendar, Image, ShoppingBag, Youtube } from "lucide-react"
import { Link } from "react-router-dom"


export default function QuickLinks() {
  const links = [
    {
      title: "Live Katha",
      icon: <Youtube className="h-6 w-6" />,
      href: "/live-katha",
      color: "bg-red-500",
    },
    {
      title: "Donate",
      icon: <Heart className="h-6 w-6" />,
      href: "/donate",
      color: "bg-orange-500",
    },
    {
      title: "Events",
      icon: <Calendar className="h-6 w-6" />,
      href: "/events",
      color: "bg-green-500",
    },
    {
      title: "Gallery",
      icon: <Image className="h-6 w-6" />,
      href: "/gallery",
      color: "bg-blue-500",
    },
    {
      title: "Product",
      icon: <ShoppingBag className="h-6 w-6" />,
      href: "/product",
      color: "bg-blue-500",
    },
    
    
    
  ]

  return (
    <div className="py-24 bg-gray-50 justify-item-center">
      <div className="container mx-auto  justify-items-center ">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
          {links.map((link) => (
            <Link key={link.title} href={link.href} className="group">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform hover:-translate-y-1">
                <div className={`${link.color} p-3 rounded-full text-white mb-3`}>{link.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">{link.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

