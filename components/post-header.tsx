import Image from 'next/image'
import DateFormatter from './date-formatter'

type Props = {
  title: string
  image: string
  date: string
}

const PostHeader = ({ title, image, date, }: Props) => {
  return (
    <div className='py-10'>
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="relative aspect-video content-center mb-8 md:mb-16 sm:mx-0">
        <Image src={image} alt={title} fill />
      </div>
    </div>
  )
}

export default PostHeader
