import Counter from "../components/Counter";
import { supabase } from "./lib/supabaseClient";

export default async function Home() {
  try {
    const { data: user } = await supabase.from("users").select("*");
    console.log(user);
  } catch (error) {
    console.error(error);
  }
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">CI/CD 테스트</h1>
        <div className="max-w-md mx-auto">
          <Counter />
        </div>
      </main>
    </div>
  );
}
