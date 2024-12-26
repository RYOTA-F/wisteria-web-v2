import Link from 'next/link'

interface BlogCardProps {
  title: string
  image: string
  url: string
}

export function BlogCard({ title, image, url }: BlogCardProps) {
  return (
    <Link href={url} target="brank">
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all hover:scale-105 hover:-translate-y-1">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  )
}
