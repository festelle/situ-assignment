import Throbber from "@/components/throbber";

export default function Loading() {
  return (
    <div className=" w-screen h-screen grid content-center">
      <div className="mx-auto"><Throbber /></div></div>
  )
}