import AppRouter from "../../routes/AppRouter";

export default function MainLayout() {
  return (
    <div className="w-full pt-25 px-4 sm:px-4 md:px-8 lg:px-12 pb-12.5">
      <AppRouter /> 
    </div>
  );
}
