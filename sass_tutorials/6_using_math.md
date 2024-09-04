# Sass Math

Sass provides powerful math functions that allow you to perform calculations directly within your stylesheets. This can help you dynamically adjust properties such as sizes, spacing, and more without the need for manual calculations. Here’s a guide to using Sass math.

## Basic Arithmetic Operations

Sass supports basic arithmetic operations, which can be used directly within your styles:

- **Addition (`+`)**: Adds two values together.
- **Subtraction (`-`)**: Subtracts one value from another.
- **Multiplication (`*`)**: Multiplies two values.
- **Division (`/`)**: Divides one value by another.
- **Modulo (`%`)**: Returns the remainder of a division.

### Example:

```scss
$base-padding: 10px;
$double-padding: $base-padding * 2;
$half-padding: $base-padding / 2;

.container {
  padding: $double-padding;  // 20px
  margin: $half-padding;     // 5px
}
```

## Combining Units

When performing math operations with different units, Sass automatically handles unit conversions where appropriate. However, some operations may not make sense (e.g., adding `px` to `%`), and Sass will throw an error in such cases.

### Example:

```scss
$width: 100px;
$height: 2em;

.box {
  width: $width + 50px;  // 150px
  height: $height - 0.5em;  // 1.5em
}
```

## Math Functions

Sass also provides a set of built-in math functions:

- **`min()`**: Returns the smallest value from a list of arguments.
- **`max()`**: Returns the largest value from a list of arguments.
- **`random()`**: Returns a random number within a specified range.
- **`percentage()`**: Converts a unitless number to a percentage.
- **`round()`**: Rounds a number to the nearest whole number.
- **`ceil()`**: Rounds a number up to the nearest whole number.
- **`floor()`**: Rounds a number down to the nearest whole number.

### Example:

```scss
$base-width: 150px;
$min-width: min($base-width, 200px);  // 150px
$rounded-value: round(12.5);  // 13

.element {
  width: $min-width;
  font-size: percentage(0.5);  // 50%
}
```

## Using Math with Functions and Mixins

Math operations can be combined with Sass functions and mixins to create dynamic and reusable styles.

### Example:

```scss
@mixin proportional-padding($ratio) {
  padding: $base-padding * $ratio;
}

.container {
  @include proportional-padding(1.5);  // 15px
}
```

## Important Considerations

- **Order of Operations**: Sass follows the standard mathematical order of operations (PEMDAS). Use parentheses to ensure the correct order when necessary.
- **Division (`/`) Operator**: In modern Sass, to avoid ambiguity, use `math.div()` for division instead of the `/` operator unless you’re certain it’s safe to do so.

### Example:

```scss
@use 'sass:math';

$ratio: math.div(100, 3);

.element {
  width: $ratio + '%';  // 33.33%
}
```

## Conclusion

Sass’s math capabilities make it easier to create responsive and adaptive layouts without manual calculations. With arithmetic operations, built-in functions, and the ability to handle units seamlessly, Sass math is an essential tool for any developer working on complex stylesheets.

For more details, refer to the official [Sass documentation](https://sass-lang.com/documentation/modules/math).

