import Image from 'next/image'

interface CareerIconsProps {
  icons: string[]
}

export function CareerIcons({ icons }: CareerIconsProps) {
  return (
    <>
      {icons.length > 0 && (
        <div className="mt-2 flex items-center ml-8 flex-wrap">
          {icons.map((icon) => (
            <div key={icon} className="ml-2 w-[30px]">
              <Image
                src={`/icons/${icon}.svg`}
                alt={icon}
                width={30}
                height={30}
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
    </>
  )
}
