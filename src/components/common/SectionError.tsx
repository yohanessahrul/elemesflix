interface SectionErrorType {
  title: string,
  error: any
}

export default function SectionError (props: SectionErrorType) {
    return (
      <section>
        <h2 className="text-white text-2xl font-bold">{props.title}</h2>
        <div className="w-full min-h-12.5 bg-gray-800 rounded-lg my-4 p-4">
          <h2 className="text-gray-300 font-bold">Error</h2>
          <p className="text-gray-500">Sorry, it looks like the data is currently unavailable due to a temporary issue.</p>
        </div>
      </section>
    )
}