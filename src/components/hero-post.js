import Link from "next/link";

// Components
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Date from "./date";

export default function HeroPost({
  title,
  coverImage,
  date,
  author,
  slug,
  excerpt,
}) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          responsiveImage={coverImage.responsiveImage}
          title={title}
          slug={slug}
        />
      </div>
      <div className="mb-20 md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 md:mb-24">
        <div>
          <h3 className="mb-4 text-4xl leading-tight lg:text-6xl">
            <Link href={`/posts/${slug}`}>
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
          <Avatar name={author.name} picture={author.avatar} />
        </div>
      </div>
    </section>
  );
}