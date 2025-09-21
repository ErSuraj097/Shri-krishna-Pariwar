import { Heart, Calendar, Image, ShoppingBag, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="py-24 bg-gray-50 justify-item-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto justify-items-center">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
          variants={itemVariants}
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              className="group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={link.href}>
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform transform">
                  <div
                    className={`${link.color} p-3 rounded-full text-white mb-3`}
                  >
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600">
                    {link.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

