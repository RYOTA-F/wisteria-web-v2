import { BlogCard } from '@/app/components/BlogCard/BlogCard'

const blogs = [
  {
    title: 'devguil-2022-0625',
    image: '/images/devguil-2022-0625.webp',
  },
  {
    title: 'rds-proxy',
    image: '/images/rds-proxy.webp',
  },
  {
    title: 'react-type-guard',
    image: '/images/react-type-guard.webp',
  },
  {
    title: 'go-zip',
    image: '/images/go-zip.webp',
  },
  {
    title: 'tslab-regular-10',
    image: '/images/tslab-regular-10.webp',
  },
  {
    title: 'add-swagger',
    image: '/images/add-swagger.webp',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Blog</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            We offer a comprehensive range of web development and designservices
            to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
