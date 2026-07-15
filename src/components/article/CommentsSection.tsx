import { MessageCircle } from "lucide-react";

export function CommentsSection() {
  return (
    <section className="border-t border-ink-100 py-16 dark:border-ink-800">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-ink-950 dark:text-white">
        <MessageCircle className="h-5 w-5 text-court-500" />
        Discussion
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

      <p className="mt-8 text-sm text-ink-400">Be the first to comment on this article.</p>
    </section>
  );
}
