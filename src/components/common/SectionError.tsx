import { ShieldAlert } from 'lucide-react';

interface SectionErrorType {
  title: string;
  error: any;
}

export default function SectionError(props: SectionErrorType) {
  return (
    <section>
      <h2 className="text-white text-2xl font-bold">{props.title}</h2>
      <div className="w-full min-h-60 bg-gray-800 rounded-lg my-4 p-4 flex justify-center items-center">
        <div>
          <div className="flex justify-center mb-6">
            <ShieldAlert size={50} color="white" />
          </div>
          <h2 className="text-gray-300 font-bold text-center text-2xl">
            Error
          </h2>
          <p className="text-gray-500 text-center">
            Sorry, we're currently having trouble loading the data you
            requested. Please try again later.
          </p>
        </div>
      </div>
    </section>
  );
}
