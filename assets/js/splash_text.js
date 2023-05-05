messages = [
    "Hey up!",
    "When life gives you melons, make melonade",
    "I tried to be normal once, worst two minutes of my life",
    "Hexagons are the bestagons",
    "Yee",
    "Umm... pancakes",
    "Blåhaj is love, Blåhaj is life.",
    "Please send all complaints to /dev/null.",
    "[Insert good joke here]",
    "Days since last error: 0",
    "Want to be trac... I mean want a cookie?",
    "From one carbon-based lifeform to another: Hi! :)",
    "What goes up... wait for it...   wait...   where the heck did it go!?",
    "Here's what I copied from Stac... I mean here's what I made earlier!",
    "What do the British call air conditioning? A window.",
    "May contain nuts (because I am nuts)",
    "As not seen on TV!",
    "No added sugar",
    "100% free range chaos",
    "Comes with a 0-day guarantee!",
    "No natural preservatives",
    "Wake me up when we have a new prime minister...",
    "This is a party political broadcast from the Numpty Party"
]
function update_splash_text() {
    let splash = document.getElementById("splash_text");
    splash.innerText = messages[Math.floor(Math.random()*messages.length)];
}
window.addEventListener("load", update_splash_text);