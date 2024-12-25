interface SlideCardProps {
  title: string
  image: string
}

export function SlideCard({ title, image }: SlideCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform hover:scale-105">
      <div className={'relative aspect-[16/9] w-full overflow-hidden'}>
        {image && (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
          />
        )}
      </div>
    </div>
  )
}
