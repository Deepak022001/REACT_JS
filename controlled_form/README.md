## **1. Imports**

- The `useState` hook is imported from React to manage the state of the form.
- The `studies.css` file is imported for styling purposes.

## **2. State Management**

- **`formData` State:** Stores an object containing `name` and `email`, both initialized as empty strings.
- **`showText` State:** A boolean variable (default: `true`) that controls whether the text input values are visible or masked.

## **3. `handleChange` Function (Updating Form Data)**

- This function updates the `formData` state dynamically as the user types into the input fields.
- It uses the spread operator (`...formData`) to keep existing values while updating the changed field.
- The `name` attribute of the input field determines which field (name or email) to update.

## **4. Input Fields (Controlled Components)**

- The `<input>` elements are controlled components, meaning their values come from React state (`formData`).
- Each input field updates its value in real-time using the `handleChange` function.
- The `type` attribute is set to `'text'` when `showText` is `true`, and `'password'` when `false`, controlling visibility.

## **5. Live Preview Section**

- This section displays the current values of `name` and `email` in real time.
- If `showText` is `true`, it displays the actual text. Otherwise, it replaces it with masked characters (`••••••`).
- Default placeholders (`'N/A'`) are shown when no input is provided.

## **6. Toggle Button (`Show/Hide Text`)**

- Clicking this button toggles the `showText` state (`true ⇄ false`).
- When `true`, input values are visible; when `false`, they are masked.
- The button label changes dynamically between **'Hide Text'** and **'Show Text'** accordingly.
