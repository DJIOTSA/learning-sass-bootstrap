# Override Bootstrap Accordion Icons

This guide explains how to override the default Bootstrap accordion icons with custom icons, such as `plus-circle` and `dash-circle` from Bootstrap Icons.

## Steps to Override Accordion Icons

### 1. Bootstrap Default Icons

Bootstrap uses SVG icons for the accordion by default. These are defined in the `$accordion-button-icon` and `$accordion-button-active-icon` variables. For example:

```scss
$accordion-button-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
$accordion-button-active-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
```

### 2. Embedding New Icons

To replace the default icons, you'll need the HTML embed code for the desired icons. Below are the codes for the `plus-circle` and `dash-circle` icons from Bootstrap Icons:

- **Plus-Circle Icon:**

    ```html
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
    </svg>
    ```

- **Dash-Circle Icon:**

    ```html
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
    </svg>
    ```

### 3. Modifying the Icons

Now, modify the Bootstrap default icons by embedding the desired icon paths. 

For example, to replace the default accordion icon with `plus-circle`:

- **Original:**

    ```scss
    $accordion-button-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
    ```

- **Modified with Plus-Circle Icon:**

    ```scss
    $accordion-button-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/><path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4'/></svg>");
    ```

### 4. Updating the Active Icon

Similarly, replace the active accordion icon with the `dash-circle` icon:

- **Original:**

    ```scss
    $accordion-button-active-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M2 5L8 11L14 5'/></svg>");
    ```

- **Modified with Dash-Circle Icon:**

    ```scss
    $accordion-button-active-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='#{$accordion-icon-active-color}' stroke-linecap='round' stroke-linejoin='round'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16'/><path d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/></svg>");
    ```

### Final Notes

- Ensure all double quotes (`"`) are replaced with single quotes (`'`) within the embedded SVG code.
- Test your accordion after making these changes to ensure the icons display correctly.

