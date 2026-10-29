
🔁 Debounce kya hota hai?
-------------------------

👉 **Debounce ka matlab:**

> _Event tab chalao jab user ruk jaaye_

### 👉 Rule:

**User rukta hai → function chalta hai**

### 🧠 Scenario:

User continuously type kar raha hai


### 📌 Example:

Search box → typing band → API call


### 📌 Simple language:

Agar user **bar-bar koi kaam kar raha hai**, to function **tabhi chale jab user thodi der ke liye stop ho jaaye**.

### 🧠 Real life example:

🔍 **Search box**

*   User type karta ja raha hai: `h → he → hel → hell → hello`
*   Har key press pe API call karna **galat** hai
*   **Debounce:** user typing **band kare**, phir search call ho

### ⏱ Example:

User 2 second tak typing nahi karta → **tab function chalega**

### 💡 Use cases:

*   Search input
*   Resize window
*   Form validation

* * *

🚦 Throttling kya hota hai?
---------------------------

👉 **Throttling ka matlab:**

> _Fixed time ke baad hi function chalao_

### 📌 Simple language:

Chahe user **kitni bhi baar event trigger kare**, function **har fixed interval me sirf ek baar** chalega.

### 👉 Rule:

**Har fixed time me sirf ek baar function**

### 🧠 Scenario:

User fast scroll kar raha hai


### 📌 Example:

Scroll event → position update


### 🧠 Real life example:

🖱 **Scroll event**

*   User fast scroll kar raha hai
*   Har scroll pe function chalana heavy hai
*   **Throttling:** har **1 second me sirf ek baar** function chale

### 💡 Use cases:

*   Scroll
*   Button spam click
*   Mouse move

* * *

🆚 Debounce vs Throttling (Easy Table)
--------------------------------------

| Feature | Debounce | Throttling |
| --- | --- | --- |
| Kab chalega | Jab user ruk jaaye | Fixed time ke baad |
| Focus | Last event | Regular interval |
| Example | Search box | Scroll |
| API calls | Kam | Controlled |

* * *

🧠 Ek line me yaad rakhna:
--------------------------

*   **Debounce:** “Ruk ja bhai, phir chalayenge” 🛑
*   **Throttling:** “Itni jaldi nahi, thoda wait” ⏳

* * *

