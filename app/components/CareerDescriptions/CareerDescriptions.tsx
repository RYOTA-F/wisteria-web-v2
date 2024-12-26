interface CareerDescriptionsProps {
  descriptions: string[]
}

export function CareerDescriptions({ descriptions }: CareerDescriptionsProps) {
  return (
    <>
      {descriptions.map((description, descIndex) => (
        <p key={descIndex} className="mt-2 text-[#9b9b9b] ml-6 leading-tight">
          {description}
        </p>
      ))}
    </>
  )
}
