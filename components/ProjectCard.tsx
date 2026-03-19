type Props = {
  title: string;
  company: string;
  image: string;
  description: string;
};

export default function ProjectCard({
  title,
  company,
  image,
  description,
}: Props) {
  return (
    <div className="space-y-4">
      <img
        src={image}
        alt={title}
        className="rounded-lg shadow-md"
      />

      <h3 className="text-lg font-semibold">
        {title} ({company})
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}