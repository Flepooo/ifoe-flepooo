import {
  Shirt,
  Monitor,
  Users,
  Wallet,
  GraduationCap,
  Coffee,
  Trash2,
  Baby,
  Cake,
  Car,
  Truck,
  Gift,
  Cpu,
  Heart,
  Building,
  Home,
  ClubIcon as Football,
  Plane,
  HomeIcon as House,
  Film
} from "lucide-react";

export const arServices = [
  // First circle
  {
    id: "fashion",

    name: "الملابس",
    icon: <Shirt className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "computer",

    name: "الكمبيوتر والتكنولوجيا",
    icon: <Monitor className='h-full w-full' />,
    color: "bg-blue-600 text-white"
  },
  {
    id: "consultants",

    name: "الاستشارات",
    icon: <Users className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "financial",

    name: "الخدمات المالية",
    icon: <Wallet className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "education",

    name: "التعليم والتدريب",
    icon: <GraduationCap className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "restaurants",

    name: "المطاعم والمقاهي",
    icon: <Coffee className='h-full w-full' />,
    color: "bg-gray-800 text-white"
  },
  {
    id: "cleaning",

    name: "خدمات التنظيف والصيانة",
    icon: <Trash2 className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "childcare",

    name: "رعاية الطفل وتنميته",
    icon: <Baby className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "bakery",

    name: "المخابز والايسكريم",
    icon: <Cake className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "automotive",

    name: "خدمات ومنتجات السيارات",
    icon: <Car className='h-full w-full' />,
    color: "bg-gray-400 text-white"
  },

  // Second circle
  {
    id: "shipping",

    name: "خدمات البريد والشحن",
    icon: <Truck className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "gifts",

    name: "الهدايا والتوزيعات",
    icon: <Gift className='h-full w-full' />,
    color: "bg-blue-600 text-white"
  },
  {
    id: "technology",

    name: "التقنية المتقدمة",
    icon: <Cpu className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "medical",

    name: "المنشآت الطبية والصحية",
    icon: <Heart className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "hospitality",

    name: "الفنادق والضيافة",
    icon: <Building className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "furnishings",

    name: "الأثاث المنزلي والمكتبي",
    icon: <Home className='h-full w-full' />,
    color: "bg-gray-800 text-white"
  },
  {
    id: "travel",

    name: "السفر والسياحة",
    icon: <Plane className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "sports",

    name: "الرياضة",
    icon: <Football className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "realestate",

    name: "العقار وإدارة الممتلكات",
    icon: <House className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "entertainment",

    name: "الترفيه",
    icon: <Film className='h-full w-full' />,
    color: "bg-gray-400 text-white"
  }
];

export const enServices = [
  {
    id: "fashion",
    name: "Clothes and Fashion",
    icon: <Shirt className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "computer",
    name: "Computer & IT",
    icon: <Monitor className='h-full w-full' />,
    color: "bg-blue-600 text-white"
  },
  {
    id: "consultants",
    name: "Consultants",
    icon: <Users className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "financial",
    name: "Financial Services",
    icon: <Wallet className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "education",
    name: "Education & Training",
    icon: <GraduationCap className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "restaurants",
    name: "Restaurants & Coffee shop",
    icon: <Coffee className='h-full w-full' />,
    color: "bg-gray-800 text-white"
  },
  {
    id: "cleaning",
    name: "Cleaning & Maintenance Services",
    icon: <Trash2 className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "childcare",
    name: "Child care & Development",
    icon: <Baby className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "bakery",
    name: "Bakery & Ice cream",
    icon: <Cake className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "automotive",
    name: "Automotive Products",
    icon: <Car className='h-full w-full' />,
    color: "bg-gray-400 text-white"
  },

  // Second circle
  {
    id: "shipping",
    name: "Mail & Shipping Services",
    icon: <Truck className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "gifts",
    name: "Gifts and Greetings",
    icon: <Gift className='h-full w-full' />,
    color: "bg-blue-600 text-white"
  },
  {
    id: "technology",
    name: "High Technology",
    icon: <Cpu className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "medical",
    name: "Health & Medical Facilities",
    icon: <Heart className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "hospitality",
    name: "Hotels & Hospitality",
    icon: <Building className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "furnishings",
    name: "Home & Office Furnishings",
    icon: <Home className='h-full w-full' />,
    color: "bg-gray-800 text-white"
  },
  {
    id: "travel",
    name: "Travel Agents",
    icon: <Plane className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "sports",
    name: "Sport",
    icon: <Football className='h-full w-full' />,
    color: "bg-cyan-500 text-white"
  },
  {
    id: "realestate",
    name: "Real Estate & Property Management",
    icon: <House className='h-full w-full' />,
    color: "bg-gray-200 text-gray-700"
  },
  {
    id: "entertainment",
    name: "Entertainment",
    icon: <Film className='h-full w-full' />,
    color: "bg-gray-400 text-white"
  }
];
