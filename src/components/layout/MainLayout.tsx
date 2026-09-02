import AppRouter from "../../routes/AppRouter";

export default function MainLayout() {
  return (
    <div className="w-full min-h-[100px] bg-amber-200 absolute top-[100px]">
      <AppRouter /> 
    </div>
  );
}
