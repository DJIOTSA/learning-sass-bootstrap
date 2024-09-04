# Sass Conditions

In Sass, you can use conditional statements to control the flow of your stylesheets. This allows you to apply styles based on certain conditions, making your stylesheets more dynamic and reusable. Sass provides several mechanisms for conditional logic, including `@if`, `@else`, and `@for` directives.

## `@if` Directive

The `@if` directive is used to apply styles based on a condition. It works similarly to if statements in other programming languages.

```scss
$theme: dark;

.button {
  @if $theme == dark {
    background-color: black;
    color: white;
  } @else {
    background-color: white;
    color: black;
  }
}
```

In this example, the background color and text color of the `.button` class depend on the value of the `$theme` variable.

## `@else` Directive

The `@else` directive can be used in conjunction with `@if` to define alternative styles if the condition is not met.

```scss
$theme: light;

.card {
  @if $theme == dark {
    background-color: #333;
    color: #fff;
  } @else {
    background-color: #fff;
    color: #000;
  }
}
```

Here, if the `$theme` is not `dark`, the styles inside the `@else` block will be applied.

## `@else if` Directive

You can also use `@else if` to check additional conditions if the initial `@if` condition is false.

```scss
$device: mobile;

.header {
  @if $device == desktop {
    font-size: 24px;
  } @else if $device == tablet {
    font-size: 18px;
  } @else {
    font-size: 14px;
  }
}
```

In this example, the font size of the `.header` class changes based on the value of the `$device` variable.

## Nesting and Complex Conditions

Sass also allows you to nest conditions and combine multiple conditions for more complex logic.

```scss
$theme: dark;
$isWide: true;

.container {
  @if $theme == dark {
    background-color: black;
    color: white;

    @if $isWide {
      padding: 20px;
    } @else {
      padding: 10px;
    }
  } @else {
    background-color: white;
    color: black;
  }
}
```

In this case, the `.container` class has different padding based on both the `$theme` and `$isWide` variables.

## Conclusion

Conditional statements in Sass provide a powerful way to control your stylesheets dynamically. By using `@if`, `@else`, and `@else if` directives, you can create flexible and maintainable styles that adapt to different conditions.
