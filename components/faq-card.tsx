import{ ChevronDown } from "lucide-react";

export default function FAQCard({ id, title, content }: { id: string;title: string;content: string }) {
  return (
    <details className="group border border-border/70 rounded-lg overflow-hidden hover:border-primary/60 transition-colors">
      <summary className="cursor-pointer px-6 py-4 bg-muted hover:bg-muted/85 transition-colors flex items-center justify-between">
        <div className="flex gap-6">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-5 w-5 rounded-md bg-primary/70 text-white">
              <span className="text-md font-semibold">{id}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {title}
          </h3>
        </div>
      </summary>
      <div className="px-6 py-4 bg-card/60 border-t border-border/70 space-y-4">
        <p className="text-foreground/75 leading-relaxed">{content}</p>
      </div>
    </details>
  )
}
