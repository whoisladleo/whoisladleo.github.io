import { PageTitle } from "@/data/do";

export default function Title({
    data
}: {
    data: PageTitle
}) {
    return (
        <div className="title-with-background p-10">
        <h2 className="font-bold text-xl md:text-2xl">{data.title}</h2>
        <p className="font-bold text-4xl md:text-6xl">{data.subtitle}</p>
      </div>
    );
}