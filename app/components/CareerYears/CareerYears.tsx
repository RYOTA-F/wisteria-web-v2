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
      {items.map((yearGroup, yearIndex) => (
        <div key={yearIndex}>
          <span className="font-bold ml-1 text-2xl">{yearGroup.YEAR}</span>
          <ul>
            <CareerItems yearItems={yearGroup.YEAR_ITEMS} />
          </ul>
        </div>
      ))}
    </>
  )
}
