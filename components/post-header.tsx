import Image from "next/image"
import DateFormatter from "./date-formatter"

type Props = {
  title: string
  image: string
  date: string
}

const PostHeader = ({ title, image, date }: Props) => {
  return (
    <div className="py-10">
      <div className="mb-6 text-lg">
        <DateFormatter dateString={date} />
      </div>
      <h1 className="mb-12 text-center text-5xl font-bold leading-tight tracking-tighter md:text-left md:text-7xl md:leading-none lg:text-5xl">
        {title}
      </h1>
      <div className="relative mb-8 aspect-video content-center sm:mx-0 md:mb-16">
        <Image src={image} alt={title} fill />
      </div>
    </div>
  )
}

export default PostHeader
