import {getData} from "@/actions/todoActions";
import Todos from "./_components/Todos";

export default async function Home() {
  const data = await getData();
  return <Todos todos={data} />;
}