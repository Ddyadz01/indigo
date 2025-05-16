import { Calendar, ChartLine, HandCoins } from 'lucide-react'

export const MENU = [
  {
    id: 1,
    title: 'Оплата',
    icon: HandCoins,
    links: [
      {
        id: 1,
        title: 'Квитанции',
      },
      {
        id: 2,
        title: 'Статистика',
      },
    ],
  },
  {
    id: 2,
    title: 'Посещаемость',
    icon: ChartLine,
    links: [
      {
        id: 1,
        title: 'Утренние фмльтры',
      },
    ],
  },
  {
    id: 3,
    title: 'Календарь событий',
    icon: Calendar,
    links: [
      {
        id: 1,
        title: 'События',
      },
    ],
  },
  {
    id: 4,
    title: 'Собрания',
    icon: Calendar,
    links: [
      {
        id: 1,
        title: 'Для родителей',
      },
    ],
  },
]
