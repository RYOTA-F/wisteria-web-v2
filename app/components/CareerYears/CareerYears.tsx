import { CareerItems } from '../CareerItems/CareerItems'

interface YearItem {
  MONTH: string
  TITLE: string
  DESCRIPTIONS: string[]
  ICONS: string[]
}

interface CareerItem {
  YEAR: number
  YEAR_ITEMS: YearItem[]
}

interface CareerYearsProps {
  items: CareerItem[]
}

export function CareerYears({ items }: CareerYearsProps) {
  return (
    <>
      <div className="relative mx-auto max-w-2xl mt-24 w-full pb-[60px] pt-5 text-left px-0">
        <div className="absolute top-0 h-full w-[3px] bg-[#427bbf] left-[18%] sm:left-[15%]" />
        {items.map((yearGroup, yearIndex) => (
          <div key={yearIndex}>
            <span className="font-bold sm:ml-1 text-2xl">{yearGroup.YEAR}</span>
            <ul>
              <CareerItems yearItems={yearGroup.YEAR_ITEMS} />
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
