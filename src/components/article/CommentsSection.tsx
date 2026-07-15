import { MessageCircle } from "lucide-react";

const SAMPLE_COMMENTS = [
  {
    name: "Trevor H.",
    date: "2 weeks ago",
    body: "This is the first breakdown of the recruiting timeline that didn't make me feel like I was already behind. Sharing this with our whole AAU team's parents.",
  },
  {
    name: "Aaliyah S.",
    date: "1 month ago",
    body: "Appreciate that this isn't trying to sell me a program. Just straight advice from someone who's actually been on the other side of the recruiting table.",
  },
];

export function CommentsSection() {
  return (
    <section className="border-t border-ink-100 py-16 dark:border-ink-800">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-ink-950 dark:text-white">
        <MessageCircle className="h-5 w-5 text-court-500" />
        Discussion ({SAMPLE_COMMENTS.length})
      </h2>

      <form className="mt-6 rounded-2xl border border-ink-100 bg-white p-5 dark:border-ink-800 dark:bg-ink-900">
        <label htmlFor="comment" className="sr-only">
          Add a comment
        </label>
        <textarea
          id="comment"
          rows={3}
          placeholder="Share your experience or ask a question..."
          className="w-full resize-none rounded-xl border border-ink-100 bg-ink-50/50 p-3 text-sm outline-none focus:ring-2 focus:ring-court-500 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="button"
            className="rounded-full bg-ink-900 px-5 py-2 text-sm font-semibold text-white hover:bg-ink-800 dark:bg-white dark:text-ink-950"
          >
            Post Comment
          </button>
        </div>
      </form>

      <ul className="mt-8 space-y-6">
        {SAMPLE_COMMENTS.map((comment) => (
          <li key={comment.name} className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-court-50 text-sm font-bold text-court-600 dark:bg-court-500/10 dark:text-court-400">
              {comment.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-ink-900 dark:text-white">
                {comment.name} <span className="ml-2 font-normal text-ink-400">{comment.date}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-400">{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
