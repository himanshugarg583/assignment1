import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 720})
        
        try:
            await page.goto("http://localhost:3001", wait_until="networkidle")
            await page.wait_for_timeout(2000)
            
            # Screenshot at initial position
            await page.screenshot(path="hero_initial.png")
            print("OK Screenshot 1 saved: hero_initial.png")
            
            # Check for video
            video = await page.query_selector('video')
            print(f"OK Video element found: {video is not None}")
            
            # Check ELOMA text
            h1 = await page.text_content('h1')
            print(f"OK ELOMA text: {h1}")
            
            # Scroll and capture mid-point
            await page.evaluate("window.scrollBy(0, 400)")
            await page.wait_for_timeout(500)
            await page.screenshot(path="hero_scroll_mid.png")
            print("OK Screenshot 2 saved: hero_scroll_mid.png (mid-scroll)")
            
            # Scroll further to text overlay
            await page.evaluate("window.scrollBy(0, 400)")
            await page.wait_for_timeout(500)
            await page.screenshot(path="hero_scroll_far.png")
            print("OK Screenshot 3 saved: hero_scroll_far.png (far scroll)")

            # Scroll deep into timeline active phase (2200px offset)
            await page.evaluate("window.scrollTo(0, 2200)")
            await page.wait_for_timeout(800)
            await page.screenshot(path="hero_scroll_timeline.png")
            print("OK Screenshot 4 saved: hero_scroll_timeline.png (timeline scroll)")
            
            # Check SVG elements
            line = await page.query_selector('line')
            print(f"OK Timeline line exists: {line is not None}")
            
            circles = await page.query_selector_all('[data-circle]')
            print(f"OK Circle elements found: {len(circles)}")
            
        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

asyncio.run(main())
