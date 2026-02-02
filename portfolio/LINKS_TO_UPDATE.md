# Portfolio Links to Update from PDF

Please replace the placeholder links (#) with actual URLs from your vivek.pdf file:

## 🔗 Social Media Links (Hero Section)
**Location: Hero section social icons**
```html
<!-- Line ~65-75 in index.html -->
<div class="hero-social">
    <a href="mailto:vivekgupta5a58@gmail.com" class="social-link"> ✅ CORRECT
    <a href="#" class="social-link"> ❌ REPLACE WITH LINKEDIN URL
    <a href="#" class="social-link"> ❌ REPLACE WITH GITHUB URL
</div>
```

## 📋 Project Links
**Location: Projects section**
```html
<!-- HealthBase Project -->
<div class="project-links">
    <a href="#" class="project-link"> ❌ REPLACE WITH GITHUB REPO URL
    <a href="#" class="project-link"> ❌ REPLACE WITH LIVE DEMO URL
</div>

<!-- ShopSmart Project -->
<div class="project-links">
    <a href="#" class="project-link"> ❌ REPLACE WITH GITHUB REPO URL
    <a href="#" class="project-link"> ❌ REPLACE WITH LIVE DEMO URL
</div>
```

## 🏆 Certification Links
**Location: Skills section - Certifications**
```html
<!-- Web Development Certificate -->
<a href="#" class="cert-link">View Certificate</a> ❌ REPLACE WITH INFOSYS CERTIFICATE URL

<!-- JavaScript Certificate -->
<a href="#" class="cert-link">View Certificate</a> ❌ REPLACE WITH UDEMY CERTIFICATE URL

<!-- SQL Certificate -->
<a href="#" class="cert-link">View Certificate</a> ❌ REPLACE WITH HACKERRANK CERTIFICATE URL
```

## 💻 Coding Platform Links
**Location: Skills section - Achievements**
```html
<!-- GeeksforGeeks -->
<a href="#" class="achievement-link">View Profile</a> ❌ REPLACE WITH GFG PROFILE URL

<!-- LeetCode -->
<a href="#" class="achievement-link">View Profile</a> ❌ REPLACE WITH LEETCODE PROFILE URL

<!-- HackerRank -->
<a href="#" class="achievement-link">View Profile</a> ❌ REPLACE WITH HACKERRANK PROFILE URL
```

## 📞 Contact Section Links
**Location: Contact section**
```html
<div class="contact-item">
    <a href="#">LinkedIn Profile</a> ❌ REPLACE WITH LINKEDIN URL
</div>
<div class="contact-item">
    <a href="#">GitHub Profile</a> ❌ REPLACE WITH GITHUB URL
</div>
```

---

## 🔧 How to Update:

1. **Open your vivek.pdf file**
2. **Copy the actual URLs for:**
   - LinkedIn profile
   - GitHub profile
   - Project repositories
   - Certificate links
   - Coding platform profiles

3. **Replace in index.html:**
   - Find each `href="#"` 
   - Replace `#` with the actual URL
   - Keep the `target="_blank"` attribute for external links

4. **Example replacement:**
   ```html
   <!-- Before -->
   <a href="#" class="social-link">
   
   <!-- After -->
   <a href="https://linkedin.com/in/your-profile" class="social-link" target="_blank">
   ```

## 📝 Quick Find & Replace:
Use Ctrl+F in your editor to find these patterns and replace them:
- `href="#"` → `href="YOUR_ACTUAL_URL"`
- Add `target="_blank"` for external links