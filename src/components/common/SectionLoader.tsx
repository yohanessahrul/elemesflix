interface SectionLoaderType {
  title: string,
}

export default function SectionLoader (props: SectionLoaderType) {
    return (
      <section>
        <h2 className="text-white text-2xl font-bold">{props.title}</h2>
        <div className="grid gap-4 grid-cols-5 my-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="w-full xs:min-h-[100px] sm:min-h-37.5 md:min-h-87.5 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-700" />
            </div>
          ))}
        </div>
      </section>
    )
}