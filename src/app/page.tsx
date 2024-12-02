import Card from "@/app/components/Card";
import FilterForm from "@/app/components/FilterForm";

export default function Home() {
  return (
    <div className="p-5">
      <FilterForm />
      <Card index={0} />
      <Card />
    </div>
  );
}
