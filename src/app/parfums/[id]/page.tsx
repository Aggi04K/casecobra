import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";
import { db } from '@/db'
import Image from "next/image";

export default async function Home({ params }: { params: { id: string } }) {
    const parfum = await db.parfums.findUnique({
        where: {
          id: Number(params.id),
        },
      });
    
  return (
     <div className="bg-slate-50 grainy-light">
      <section>
        <div className="flex justify-center items-start">
      <img src={parfum?.url} width={600}/>
      </div>
        <div className="mt-8 flex items-start justify-center text-4xl font-bold">
  {parfum?.name}
  
</div>
      </section>
    </div>

  );
}
