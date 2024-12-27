import { CareerDescriptions } from '../CareerDescriptions/CareerDescriptions'
import { CareerIcons } from '../CareerIcons/CareerIcons'

interface YearItem {
  MONTH: string
  TITLE: string
  DESCRIPTIONS: string[]
  ICONS: string[]
}

interface CareerItemsProps {
  yearItems: YearItem[]
}

export function CareerItems({ yearItems }: CareerItemsProps) {
  return (
    <>
      {yearItems.map((item, itemIndex) => (
        <li
          key={itemIndex}
          /* eslint-disable react/no-unescaped-entities */
          className="relative flex items-center ml-[calc(18%-3.5px)] sm:ml-[calc(15%-3.5px)] [&:not('first-child')]:mt-6"
        >
          <div className="absolute top-2.5 h-2.5 w-2.5 rounded-full bg-[#427bbf]" />
          <div className="ml-8">
            <p className="font-semibold text-lg">{item.MONTH}</p>
            <p className="mt-1 ml-2.5 text-lg">{item.TITLE}</p>
            <CareerDescriptions descriptions={item.DESCRIPTIONS} />
            <CareerIcons icons={item.ICONS} />
          </div>
        </li>
      ))}
    </>
  )
}
