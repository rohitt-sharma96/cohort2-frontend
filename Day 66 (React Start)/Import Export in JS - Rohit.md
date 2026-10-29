

* * *

🤔 Import–Export kya hota hai?
------------------------------

👉 JavaScript me **code ko alag-alag files me divide** karke use reuse karne ke liye use hota hai.

📦 **Export** = cheez bahar bhejna  
📥 **Import** = cheez andar mangwana

* * *

🧠 Real-Life Example
--------------------

Socho tumhare paas ek **tools box** hai 🧰

*   Ek file me tools rakhe → **export**
*   Dusri file me un tools ko use kiya → **import**

* * *

🔹 Export in JavaScript
-----------------------

### 1️⃣ Named Export

Jab tum multiple cheezein bhejna chahte ho 👇

**math.js**

```js
export const add = (a, b) => a + b;
export const sub = (a, b) => a - b;
```

📌 Yaha `add` aur `sub` dono export ho rahe hain

* * *

### 2️⃣ Default Export

Jab **sirf ek main cheez** bhejni ho ⭐

**user.js**

```js
export default function userName() {
  return "Rohit";
}
```

📌 Ek file = ek default export

* * *

🔹 Import in JavaScript
-----------------------

### 1️⃣ Named Import

Same naam use karna padta hai 🔁

**app.js**

```js
import { add, sub } from "./math.js";

console.log(add(2, 3)); // 5
```

* * *

### 2️⃣ Default Import

Naam tum kuch bhi rakh sakte ho 😎

```js
import myUser from "./user.js";

console.log(myUser());
```

* * *

🔹 Mix Import (Default + Named)
-------------------------------

```js
import userName, { age, city } from "./user.js";
```

* * *

⚠️ Important Rules yaad rakho
-----------------------------

✅ `type="module"` lagana padta hai (browser me)

```html
<script type="module" src="app.js"></script>
```

✅ Import/export **sirf top level** pe hota hai  
❌ function ya if ke andar nahi

* * *

🧠 Short Summary
----------------

| Term | Meaning |
| --- | --- |
| export | Cheez bahar bhejna |
| import | Cheez andar lana |
| named export | Multiple values |
| default export | Single main value |

* * *

