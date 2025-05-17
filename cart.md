
# 🛒 JavaScript Shopping Cart Explanation

This markdown explains how the product cart code works in JavaScript.

## 🧾 Product List

We start with a list of products stored in an array of objects:

```javascript
var products = [
    { name: "BMW", Price: 25 },
    { name: "AUDI", Price: 34 },
    { name: "Merceds", Price: 61 }
];
```

Each object has:
- `name`: The name of the product.
- `Price`: The price of that product.

---

## 💬 User Input

The user is asked to enter a product name using `prompt()`:

```javascript
var cart = prompt("Insert the product name (type EXIT to end):").trim();
```

- `.trim()` removes any spaces before or after the input.
- If the user types `EXIT`, the program ends.

---

## 🔁 While Loop

```javascript
while (cart !== "EXIT") {
    var product = products.find(p => p.name === cart);

    if (product) {
        total += product.Price;
    } else {
        console.log("Product not found!");
    }

    cart = prompt("Insert the next product name (type EXIT to end):").trim();
}
```

### What’s happening here:

1. **`products.find(...)`**:
   - This searches the array for a product where `p.name === cart`.
   - If a match is found, it returns the whole object.

2. **`if (product)`**:
   - If a product is found, it adds the price to the `total`.

3. **Loop continues** until the user types `"EXIT"`.

---

## 📊 Total Price Output

```javascript
console.log("SUM:", total);
```

This line prints the total cost of all valid products entered.

---

## ✅ Example Walkthrough

If the user enters:
```
BMW
AUDI
Merceds
EXIT
```

The process will:
- Match `"BMW"` → Add 25
- Match `"AUDI"` → Add 34
- Match `"Merceds"` → Add 61
- End loop on `"EXIT"`

### Final Output:
```
SUM: 120
```

---

## ⚠️ Note

- Input is case-sensitive. `"bmw"` is not the same as `"BMW"`.
- You can add `.toUpperCase()` or `.toLowerCase()` to make it case-insensitive if needed.
