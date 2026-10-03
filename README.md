<h1 align="center">
  <img src="public/icons/logo-128.png" alt="Letterboxd Tweaks Enhanced Logo"><br>
  Letterboxd Tweaks (Enhanced Edition)
</h1>

<p align="center">
  <strong>A personalized, enhanced version of the popular Letterboxd Tweaks extension.</strong>
</p>

## ✨ What's New in this Enhanced Edition?

This is a personal fork of the original Letterboxd Tweaks extension, adding several aesthetic improvements for a cleaner, sleeker experience:

1. **AMOLED Black Background Option** 🖤 
   - A toggleable option in the extension popup to force a true `#000000` black background across Letterboxd's wrapper, header, footer, and body. Saves battery and looks stunning on OLED displays.
2. **Removed Ambient Shadows** 🚫
   - Disabled the blurred clone images that created messy ambient glows behind film cards.
3. **Slimmer Film Cards** 📏
   - Removed the bulky, translucent background padding around film cards, restoring native Letterboxd poster sizes so they no longer push down or cut off movie titles.
4. **Minimalist Rating Badges** 🏷️
   - Reduced the size, padding, and minimum width of the injected green/colorful rating badges so they take up less space on the posters.

### Enhanced Edition Screenshots

#### Extension Popup (New Settings)
<img src="screenshots/options_panel.png" alt="Extension Options Panel" width="300" />

#### AMOLED Black Home Page
<img src="screenshots/home_page.png" alt="AMOLED Black Home Page" height="400" />

#### AMOLED Black Profile Page
<img src="screenshots/profile_page.png" alt="AMOLED Black Profile Page" height="400" />

#### Home Feed (Friend's Activity)
<img src="screenshots/home_feed.png" alt="Home Feed with Rating Badges" width="600" />

#### Film Detail Page
<img src="screenshots/film_detail.png" alt="Film Detail Page" width="600" />

#### Film Grid
<img src="screenshots/film_grid.png" alt="Film Grid with Green Badges" width="600" />

---

## 🛠️ Original Features (Letterboxd Tweaks)

This extension builds upon the excellent original [Letterboxd Tweaks](https://github.com/JSerwatka/letterboxd-tweaks) by JSerwatka. 

It enhances the Letterboxd website with cleaner movie cards, a more efficient search bar featuring instant movie suggestions, and an improved user interface that hides unnecessary filters, navbar items, and sort options, along with other quality of life improvements.

## 📥 How to Install (For Chrome / Brave / Edge)

Since this is a custom fork, it is not available on the Chrome Web Store. You can easily install it manually in a few seconds:

1. **Download the Release:** Go to the [Releases](https://github.com/shuvratobh/letterboxd-tweaks-enhanced/releases) page on the right side of this GitHub repository and download the `letterboxd-tweaks-enhanced-v1.0.0.zip` file.
2. **Extract the ZIP:** Extract the downloaded ZIP file to a folder on your computer (e.g., `Documents/Letterboxd-Tweaks`).
3. **Open Extensions Page:** Open your browser and go to `chrome://extensions/` (or `edge://extensions/`, `brave://extensions/`).
4. **Enable Developer Mode:** Turn on the **Developer mode** toggle in the top-right corner.
5. **Load the Extension:** Click the **Load unpacked** button in the top-left corner.
6. **Select the Folder:** Browse to the folder where you extracted the ZIP file (make sure you select the folder containing the `manifest.json` file) and click "Select Folder".
7. **Done!** The extension is now installed. You can open its settings by clicking the extension icon in your toolbar.

## 🚀 How to Use

After installing the extension, you can easily customize your Letterboxd experience:

1. Go to [letterboxd.com](https://letterboxd.com/).
2. Click the **Puzzle piece icon** (Extensions) in the top-right corner of your browser.
3. Click the **Pin icon** next to **Letterboxd Tweaks Enhanced** so it stays visible on your toolbar.
4. Click the newly pinned **Letterboxd Tweaks Enhanced icon** (the gear logo).
5. A settings popup will open! Here you can:
   - Toggle **"Enable AMOLED Black"** on or off (requires a page reload to apply).
   - Change movie card styles and data displayed.
   - Hide specific features like the "Service" section or annoying navbar links.
   - Force all new lists to be private by default.
6. **Reload the Letterboxd page** after changing any toggle to see the effects instantly!

---

### Getting Started (For Developers)
1. Check if your `Node.js` version is >= **14**
2. Clone this repo and `cd` into it
   ```shell
   git clone https://github.com/shuvratobh/letterboxd-tweaks-enhanced.git
   cd letterboxd-tweaks-enhanced
   ```
3. Install the dependencies
   ```shell
   npm i
   ```
4. Build the project in dev mode

   ```shell
   npm run dev
   ```

5. Enable `Developer mode` in your browser's `Manage Extensions` tab
6. Click `Load unpacked`, and select the `build` folder.
