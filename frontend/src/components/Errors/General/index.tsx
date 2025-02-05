import { IoIosSad } from "react-icons/io";

export const General = () => {
  return (
    <section
    className="flex flex-1 justify-center items-center w-screen h-screen bg-white-800"
    >
        <div
        className="flex flex-col gap-5 items-center p-5 font-extrabold text-white bg-red-500 rounded text-xl"
        >
            <h1> !!Ups sucedio un problema </h1>
            <IoIosSad size={50}/>
        </div>
    </section>
  )
}
