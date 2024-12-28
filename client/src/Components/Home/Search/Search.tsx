import { IoSearch } from 'react-icons/io5'

export const Search = () => {
  return (
    <div className="w-full h-12 bg-bgLight rounded-md p-2 flex items-center">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Products Here...!"
        className="w-full h-8 focus:outline-none bg-inherit p-2 text-sm placeholder:text-gray-500"
      />

      <button className="hover:bg-black bg-primary flex items-center py-2 px-4 rounded-md text-white  transition-all">
        <span className='uppercase font-poppins'>Search</span>
        <IoSearch className="inline-block ml-2" />
      </button>
    </div>
  )
}
