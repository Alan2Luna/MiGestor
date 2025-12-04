import { Spinner } from "./ui/spinner";

export function ModalFallback() {
  return(
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <Spinner className="size-20 text-white"/>
    </div>
  );
}