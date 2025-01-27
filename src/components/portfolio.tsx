import { PortfolioItem } from "@/data/do";

interface PortfolioProps {
    items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
    return (
    <div className="h-screen pt-20" id="portfolio">
        <div className="title-with-background">
          <h2 className="font-bold text-2xl">Portfolio</h2>
          <p className="font-bold text-6xl">Real world practice.</p>
        </div>
        <div className="grid grid-cols-1 p-12 ml-12">
            { items.map((item) => (
                <div key={item.title} className="p-4 mb-10">
                    <h3 className="tracking-wide text-2xl underline underline-offset-8">{item.title}</h3>
                    <p className="text-xs mt-3 mb-2">{item.date}</p>
                    <p>{item.brief}</p>
                    <p className="mt-3">Responsibilities:</p>
                    <ul className="list-inside list-disc mt-2 ml-4">
                        {item.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
      );
}