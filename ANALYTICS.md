# Analytics Setup (GoatCounter)

Privacy-friendly page view tracking for haplab.com. No cookies, no personal data, just which pages get views and when.

## What's installed

GoatCounter JS snippet is in every HTML page (index, posts, and template). It tracks:
- Page path (e.g. `/posts/ralph-loop.html`)
- Referrer (where traffic is coming from)
- Screen size
- No cookies. No user tracking. GDPR-friendly out of the box.

## One-time setup: create your GoatCounter account

**Takes ~2 minutes:**

1. Go to **https://www.goatcounter.com/**
2. Click **Sign up**
3. Choose a site code — e.g. `haplab` → your dashboard will be at `https://haplab.goatcounter.com`
4. Enter your email + password, domain: `haplab.com`
5. Confirm your email

Then **update the tracking snippet** in each HTML file:

Replace `HAPLAB_CODE` with your chosen site code (e.g. `haplab`):

```bash
# From the haplab-blog directory:
sed -i '' 's/HAPLAB_CODE/haplab/g' index.html posts/ralph-loop.html posts/correct-by-default.html posts/template.html
```

Then commit and push:

```bash
git add -A && git commit -m "chore: activate GoatCounter analytics" && git push
```

## Viewing stats

After setup, visit: **https://haplab.goatcounter.com** (or whatever code you chose)

You'll see:
- Page views by path (which articles are getting hits)
- Daily/weekly/monthly breakdown  
- Referrers (HN, Reddit, direct, etc.)
- A spike = something went viral 🎉

## Free tier

GoatCounter is free for personal/open source use (up to 100k pageviews/month). More than enough.

## For new blog posts

When creating a new post from `posts/template.html`, the GoatCounter snippet is already included in the template. Just don't forget to replace `HAPLAB_CODE` if you're starting fresh — or run the sed command above after setup.
