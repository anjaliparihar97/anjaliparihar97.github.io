# Anjali Parihar – Portfolio

A simple, fast portfolio website with a blog. Plain HTML, CSS and JavaScript: no frameworks, no build step, free to host.

## What's in the folder

```
index.html          Home page (hero, about, experience, projects, skills, education, blog preview, contact)
styles.css          All design and colors
main.js             Menu on mobile + shows your blog list
posts.js            YOUR BLOG LIST (edit this when you add a post)
assets/profile.jpg  Your photo (replace any time, keep the same name)
blog/index.html     The page that lists all posts
blog/_template.html Copy this to write a new post
blog/welcome.html   Your first post
```

## 1. Check the content first

Open `index.html` in any text editor (VS Code is free) and read every line. Everything is based on your resume and our interview prep, but **you** must confirm it's accurate. In particular:

- **AI job-search agent:** update "Built with" with the real tools you used.
- **Heart disease project:** confirm it was TensorFlow/Keras.
- **Honeywell:** kept general on purpose. Check with Honeywell before adding more details.
- **Skills:** only add tools you have really used (for example Kubernetes or Terraform only after you've built something with them).
- **LinkedIn link:** check that `https://www.linkedin.com/in/anjali-parihar-` is your exact profile URL.
- **Welcome post:** rewrite it in your own words.

To preview: double-click `index.html` and it opens in your browser.

## 2. Put it online for free (GitHub Pages)

1. Log in to GitHub (github.com/anjaliparihar97).
2. Click **New repository**. Name it exactly: `anjaliparihar97.github.io`. Set it to **Public**, then **Create repository**.
3. Click **uploading an existing file**. Drag in **everything inside** the portfolio folder (not the folder itself): `index.html`, `styles.css`, `main.js`, `posts.js`, the `assets` folder and the `blog` folder. Click **Commit changes**.
4. Go to **Settings → Pages**. Under "Branch", choose `main` and `/ (root)`, then **Save**.
5. Wait 1–2 minutes. Your site is live at: **https://anjaliparihar97.github.io**

Every time you upload a changed file, the site updates automatically within a minute or two.

**Even easier alternative:** go to app.netlify.com/drop and drag the whole folder onto the page. You get a live link instantly (create a free account to keep it).

## 3. Optional: your own domain (about €10–15 per year)

1. Buy a domain like `anjaliparihar.com` at Namecheap, Cloudflare, Porkbun or a German provider like IONOS or Strato.
2. In GitHub: **Settings → Pages → Custom domain**, enter your domain, save.
3. At your domain provider, add the DNS records GitHub shows you (search "GitHub Pages custom domain" for the exact values; GitHub's own docs walk you through it).
4. Tick **Enforce HTTPS** once it's available.
5. In `index.html`, replace both `YOUR-DOMAIN` placeholders with your domain, so LinkedIn shows a nice preview card with your photo.

## 4. Adding a new blog post

Three small steps:

1. **Copy** `blog/_template.html` and rename it, for example `blog/building-my-job-agent.html` (lowercase, hyphens, no spaces).
2. **Edit** the new file: change the title (3 places), the date and the text inside `<div class="prose">`. The template shows how to write headings, paragraphs, lists, quotes, code and images.
3. **Add it to `posts.js`** at the top of the list:

```js
{
  title: "Building an AI agent that finds jobs for me",
  date: "2026-10-20",
  summary: "What worked, what broke and what I'd change.",
  file: "building-my-job-agent.html"
},
```

Upload the new post file and the updated `posts.js` to GitHub. The post appears on the home page ("Latest writing", newest 3) and on the Blog page automatically.

**Images in posts:** put the image in the `assets` folder and use `<img src="../assets/your-image.png" alt="What the image shows">`.

**Tip:** write your post in Google Docs or Word first, then paste each paragraph between `<p>` and `</p>`. Or ask Claude to convert your finished text into the template format.

## 5. A writing routine that works

- One post every 2–3 weeks is plenty. Consistency matters more than length.
- Good first topics: building your job-search agent, what you learned rebuilding a RAG app, explaining Isolation Forest vs. K-Means simply, starting with NVIDIA Isaac Lab.
- Share every post on LinkedIn with 2–3 lines about what you learned and the link.

## 6. Other small things

- **Add your resume:** put `Anjali_Parihar_Resume.pdf` in `assets`, then add a button in the hero section of `index.html`:
  `<a class="btn btn-ghost" href="assets/Anjali_Parihar_Resume.pdf">Download résumé</a>`
  (Use the corrected resume version.)
- **Change colors:** edit the variables at the top of `styles.css` (for example `--accent`).
- **Privacy:** your phone number is intentionally not on the site, since it's public.
