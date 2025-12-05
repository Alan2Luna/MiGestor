import { Spinner } from "./ui/spinner";

export function PageFallback() {
  return(
    <div className="min-h-screen flex items-center justify-center bg-linear-150 from-white to-cyan-50">
      <Spinner className="size-20 text-primary"/>
    </div>
  );
}