import { CiSearch } from "react-icons/ci";
import useCartStore from "../../../app/store/useCartStore";

export default function SearchIcon(){
    const { query, setQuery } = useCartStore();
    return(
    <div className="relative hidden lg:flex items-center border-b border-b-black">
        <CiSearch size={20} />
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
          className="outline-none pl-2 placeholder:text-[16px] placeholder:leading-[20px] placeholder:text-[#232323]"
          />
    </div>
    )
}