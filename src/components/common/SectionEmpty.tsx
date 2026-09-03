import { Ghost } from 'lucide-react';

export default function SectionEmpty() {
  return (
    <section aria-labelledby="Watchlist Empty">
      <h2 className="text-white text-2xl font-bold">Watchlist</h2>
      <div className="w-full min-h-60 bg-gray-800 rounded-lg my-4 p-4 flex justify-center items-center">
        <div>
          <div className="flex justify-center mb-6">
            <Ghost size={50} color='white'/>
          </div>
          <h2 className="text-gray-300 font-bold text-center text-2xl">Empty</h2>
          <p className="text-gray-500 text-center">
            Your watchlist is empty.
          </p>
        </div>
      </div>
    </section>
  );
}
