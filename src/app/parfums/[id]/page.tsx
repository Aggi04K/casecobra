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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
  {params.id}
  {parfum?.name}
  <img src={parfum?.url} />
</div>
      </section>
    </div>

  );
}
