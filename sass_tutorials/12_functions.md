# Sass Functions

Sass functions are a powerful feature that allows you to create reusable code for performing operations and calculations within your stylesheets. Functions in Sass help you avoid code repetition and make your styles more dynamic. This document will cover the basics of Sass functions, including their syntax, usage, and advanced features.

## What is a Sass Function?

A Sass function is a block of code that performs a specific task and returns a value. You define a function using the `@function` directive and use it within your stylesheet to perform calculations or manipulate values.

### Basic Syntax

```scss
@function multiply($a, $b) {
  @return $a * $b;
}
```

To use the function:

```scss
.result {
  width: multiply(10px, 3); // Returns 30px
}
```

In this example, the `multiply` function takes two arguments and returns their product.

## Functions with Multiple Arguments

Sass functions can accept multiple arguments and perform complex operations.

### Example with Multiple Arguments

```scss
@function calculate-area($width, $height) {
  @return $width * $height;
}
```

Using the function:

```scss
.box {
  width: 10px;
  height: 20px;
  area: calculate-area(width, height); // Returns 200px²
}
```

Here, `calculate-area` computes the area of a rectangle using the width and height arguments.

## Default Values for Function Arguments

You can provide default values for function arguments, which will be used if no value is specified.

### Example with Default Values

```scss
@function get-font-size($base-size: 16px, $scale: 1) {
  @return $base-size * $scale;
}
```

Using the function with default values:

```scss
.small-text {
  font-size: get-font-size(14px, 0.75); // Returns 10.5px
}

.default-text {
  font-size: get-font-size(); // Returns 16px (default value)
}
```

## Built-in Sass Functions

Sass provides a range of built-in functions for common tasks, such as color manipulation, mathematical calculations, and string operations. Here are a few examples:

### Color Functions

```scss
$color: lighten(#333, 10%);
```

The `lighten` function lightens a color by a specified percentage.

### Mathematical Functions

```scss
$width: 100px;
$new-width: ceil($width / 3); // Returns 34px
```

The `ceil` function rounds a value up to the nearest integer.

### String Functions

```scss
$text: "Hello, world!";
$substring: str-slice($text, 1, 5); // Returns "Hello"
```

The `str-slice` function extracts a substring from a string.

## Using Functions in Mixins

You can also use functions within mixins to create more dynamic styles.

### Example with Functions in Mixins

```scss
@function border-width($size) {
  @return $size * 2px;
}

@mixin border-styles($size) {
  border-width: border-width($size);
  border-style: solid;
}

.box {
  @include border-styles(3); // Results in border-width: 6px;
}
```

In this example, the `border-width` function is used inside the `border-styles` mixin to calculate the border width dynamically.

## Conclusion

Sass functions offer a powerful way to create reusable code for calculations and manipulations within your stylesheets. By defining and using functions, you can make your styles more dynamic, maintainable, and flexible. Explore Sass's built-in functions and experiment with custom functions to enhance your styling capabilities.
