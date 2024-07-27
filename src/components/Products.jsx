import { useContext, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import { ContextData } from "../context/ContextProvider";
import Slider from "./Slider";

function Products() {
  // const [data, setData] = useState([]);
  const {data,setData} = useContext(ContextData)
  // console.log(data);
  const getData = async () => {
    try {
      let res = await axios({
        method: "get",
        url: `https://dummyjson.com/products`,
      });
      setData(res?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(import.meta.env.VITE_APP_api)
  return (
    <>
    <Slider/>
    <div className="grid grid-cols-1 w-[90%] mx-auto gap-4 my-[25vh] lg:my-[18vh] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/* <h1>Products Details</h1> */}
      {data?.map((ele) => (
        <Card {...ele} key={ele.id} />
      ))}
    </div>
    </>
  );
}

export default Products;
