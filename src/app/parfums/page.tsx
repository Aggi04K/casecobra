import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import { db } from '@/db'

export default async function Home() {
  debugger
    const parfums = await db.parfums.findMany()
    console.log(parfums)
  return (
    <div className="bg-slate-50 grainy-light">
      <section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
  {parfums?.map((parfum, index) => (
    <Link key={index}  href={`/parfums/${parfum.id}`}>
        <div className="bg-slate-200 rounded-2xl flex">
          <img src={parfum.url} className="w-1/2 h-full max-h-96 object-contain" alt={parfum.name} />
          <div className="ml-4 flex flex-col justify-center p-5">
            <p>{parfum.name}</p>
            <p>Preis: {parfum.price}€</p>
          </div>
        </div>
        </Link>
      ))}
</div>
          
      </section>
    </div>
  );
}
