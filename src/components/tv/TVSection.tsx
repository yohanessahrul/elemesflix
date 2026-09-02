import type { TVShow } from "../../types/tvs";

interface RowSectionType {
  title: string,
  customTVHooks: any
}

export default function TVSection (props: RowSectionType) {
  const {data, isLoading, isError} = props.customTVHooks();

  if (isLoading) {
    return (
      <>
        <h2 className="text-white text-2xl">{props.title}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-full min-h-[300px] rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gray-700" />
            </div>
          ))}
        </div>
      </>
    )
  }

  if (isError) {
    return (
      <div className="w-full min-h-12.5 bg-red-200 my-4">
        Error !
      </div>
    )
  }

  return (
    <section aria-labelledby={props.title.toLowerCase()}>
      <h2 className="text-white text-2xl">{props.title}</h2>
      <div className="w-full h-77.5 my-4 overflow-hidden">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {data.results.length !== 0 && data.results.map((item: TVShow) => {
            return (
            <div key={item.id}>
              <div>
                <div className="w-full min-h-10 rounded-lg overflow-hidden">
                  <img src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w300${item.poster_path}`} alt={item.original_title}/>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}