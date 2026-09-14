<h1 align="center">
  <img src="public/icons/logo-128.png" alt="Letterboxd Tweaks Logo"><br>
  Letterboxd Tweaks (Enhanced Edition)
</h1>

<p align="center">
  <strong>A personalized, enhanced version of the popular Letterboxd Tweaks extension.</strong>
</p>

## ✨ What's New in this Enhanced Edition?

I have forked the original Letterboxd Tweaks repository and made several aesthetic improvements for a cleaner, sleeker experience:

1. **AMOLED Black Background** 🖤 
   - Forced a true `#000000` black background across Letterboxd's wrapper, header, footer, and body to save battery and look stunning on OLED displays.
2. **Removed Ambient Shadows** 🚫
   - Disabled the blurred clone images that created messy ambient glows behind film cards.
3. **Slimmer Film Cards** 📏
   - Removed the bulky, translucent background padding around film cards, restoring native Letterboxd poster sizes so they no longer push down or cut off movie titles.
4. **Minimalist Rating Badges** 🏷️
   - Reduced the size, padding, and minimum width of the injected green/colorful rating badges so they take up less space on the posters.

### Enhanced Edition Screenshots

#### Home Page
<img src="screenshots/home_page.png" alt="AMOLED Black Home Page" height="400" />

#### Profile Page
<img src="screenshots/profile_page.png" alt="AMOLED Black Profile Page" height="400" />

---

## 🛠️ Original Features (Letterboxd Tweaks)

<a href="https://www.buymeacoffee.com/jserwatka" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 50px !important;width: auto !important;" ></a>

# Letterboxd Tweaks
<a href="https://addons.mozilla.org/pl/firefox/addon/letterboxd-tweaks/" target="_blank"><img src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png" alt="Get Letterboxd Tweaks for Firefox"></a>
<a href="https://chromewebstore.google.com/detail/letterboxd-tweaks/hopfbphfhmjgdnedoldfpbhepohibfkj" target="_blank"><img src="https://user-images.githubusercontent.com/585534/107280622-91a8ea80-6a26-11eb-8d07-77c548b28665.png" alt="Get Letterboxd Tweaks for Chromium"></a>

## Description
This Chrome extension/Firefox add-on enhances the Letterboxd website with cleaner movie cards, a more efficient search bar featuring instant movie suggestions, and an improved user interface that hides unnecessary filters, navbar items, and sort options, along with other quality of life improvements.



- Hide useless filters, sort options and nav items
  ![image](https://github.com/JSerwatka/letterboxd-tweaks/assets/33938646/11f3eedd-c79c-4be6-bc63-970cb09237b2)

## Future Improvements
- Display the cast member's image when hovering over their name. (https://github.com/JSerwatka/letterboxd-tweaks/issues/25)
- Automatically add a movie to the diary after rating it. (https://github.com/JSerwatka/letterboxd-tweaks/issues/26)
- Show an indicator if a movie is already in the watchlist. (https://github.com/JSerwatka/letterboxd-tweaks/issues/27)
- Allow removing a movie from a list directly from the movie component. (https://github.com/JSerwatka/letterboxd-tweaks/issues/28)
- Add keyboard shortcuts for search and make it a command component. (https://github.com/JSerwatka/letterboxd-tweaks/issues/29)

If you have ideas for further improvements, please email them to jserwatka.dev@gmail.com or create an issue on this repository.

# Getting Started
1. Check if your `Node.js` version is >= **14**
2. Clone this repo and `cd` into it
   ```shell
   git clone https://github.com/JSerwatka/letterboxd-tweaks.git
   cd letterboxd-tweaks
   ```
3. Install the dependencies
   ```shell
   npm i
   ```
4. Build the project in dev mode

   ```shell
   npm run dev
   ```

5. Enable `Developer mode` in your `Manage Extensions` tab
6. Click `Load unpacked`, and select `letterboxd-tweaks/build` folder

  
# Build with

- Chrome Extension with Vite template from [create-chrome-ext](https://github.com/guocaoyi/create-chrome-ext)

- SolidJS


