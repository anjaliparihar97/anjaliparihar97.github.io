/*
  YOUR BLOG POST LIST
  -------------------
  To add a new post:
  1. Copy blog/_template.html, rename it (e.g. blog/my-new-post.html) and write your post.
  2. Add a new entry at the TOP of this list (newest first), like this:

     {
       title: "My new post title",
       date: "2026-10-20",            // YYYY-MM-DD
       summary: "One or two sentences about the post.",
       file: "my-new-post.html"       // the file name inside the blog folder
     },

  Both the home page and the blog page read from this list automatically.
*/

window.POSTS = [
  {
    title: "Prompt, retrieve or fine tune? A practical guide to using LLMs efficiently",
    date: "2026-10-06",
    summary: "When to use prompting, RAG, LoRA fine tuning, small models or no LLM at all, and how to save money on low priority work.",
    file: "llm-efficiency-guide.html"
  },
  {
    title: "Data quality for agent memory: what happens when your AI remembers the wrong thing?",
    date: "2026-10-05",
    summary: "Agent memory is just data, and it fails the same way data always has. Why memory poisoning, stale facts and unchecked training data make agents unreliable, and how human checks fix it.",
    file: "agent-memory-data-quality.html"
  },
  {
    title: "Hello, and why I'm starting this blog",
    date: "2026-10-05",
    summary: "What I plan to write about here: industrial data, practical AI and what I learn by building things.",
    file: "welcome.html"
  }
];
