import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Form from "@/components/Form";

export default function Events() {
  return (
    <main>   
        <div className="w-full flex flex-col gap-y-10 pt-12 pb-20 px-12">
          <div>
            <h1 className="text-lg text-gray-900 font-bold">Events</h1>
          </div>
          <div>
            <Form />
          </div>
        </div>
    </main>
  )
}
