import Link from 'next/link'

interface SlideCardProps {
  title: string
  image: string
  url: string
}

export function SlideCard({ title, image, url }: SlideCardProps) {
  return (
    <Link href={url} target="brank">
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
    </Link>
  )
}
