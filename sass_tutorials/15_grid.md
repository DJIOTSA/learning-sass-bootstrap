# Sass Grid System with Gaps, Breakpoints, and Flexbox Justification

In this guide, we will create a responsive grid system using Sass that includes customizable gaps between grid items, breakpoints for different screen sizes, and flexible justification options for aligning grid content.

## Setup

We start by defining the number of grid columns, a map of gap values for spacing between grid items, and a list of possible `justify-content` values for alignment.

```scss
@use "sass:math";

$grid-columns: 12;

$grid-gaps: (
    "0": 0,
    "1": 10px,
    "2": 20px,
    "3": 30px,
    "4": 40px,
    "5": 50px,
);

// Justify-content values for flexbox alignment
$layout-values: flex-start, flex-end, center, space-between, space-around;
```

- **`$grid-columns`**: Sets the number of columns in the grid.
- **`$grid-gaps`**: Defines different gap sizes to create spacing between grid items.
- **`$layout-values`**: Specifies possible values for aligning items along the main axis in flexbox.

## Base Layout Classes

The container and row classes set up the basic structure for the grid system.

```scss
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
}

.row {
    display: flex;
    flex-flow: row wrap;
}
```

- **`.container`**: Centers content and defines a maximum width.
- **`.row`**: Establishes a flexbox container that allows items to wrap within the row.

## Grid Gaps

The `$grid-gaps` map allows you to create different gap sizes between grid items, which can be applied via CSS classes.

### Example:

```scss
@each $key, $val in $grid-gaps {
    .gap-#{$key} > * {
        padding: $val;
    }

    .gap-#{$key} {
        margin-left: -$val;
        margin-right: -$val;
    }
}
```

### Explanation:

- **`.gap-#{$key} > *`**: Adds padding to grid items based on the selected gap size.
- **`.gap-#{$key}`**: Adds negative margins to the row to remove padding on the left and right, ensuring consistent alignment.

You can use classes like `.gap-1`, `.gap-2`, etc., to apply different gap sizes between grid items.

## Flexbox Justification Classes

We also provide justification classes to control the alignment of grid items along the main axis using the `justify-content` property.

### Example:

```scss
@each $val in $layout-values {
    .justify-#{$val} {
        justify-content: $val;
    }
}
```

### Explanation:

- **`.justify-#{$val}`**: Adds the corresponding `justify-content` value, such as `flex-start`, `center`, or `space-between`, to align items in a row.

You can use classes like `.justify-center` or `.justify-space-between` to adjust the alignment of grid items.

## Responsive Grid Column Classes

Now let's define responsive column classes that adjust based on screen size. We use mixins for breakpoints and loops to generate column classes.

### Example:

```scss
@include xs {
    @for $i from 1 through $grid-columns {
        .col-#{$i}-xs {
            box-sizing: border-box;
            flex-grow: 0;
            width: math.div($i * 100%, $grid-columns);
        }
    }
}

@include sm {
    @for $i from 1 through $grid-columns {
        .col-#{$i}-sm {
            box-sizing: border-box;
            flex-grow: 0;
            width: math.div($i * 100%, $grid-columns);
        }
    }
}

@include md {
    @for $i from 1 through $grid-columns {
        .col-#{$i}-md {
            box-sizing: border-box;
            flex-grow: 0;
            width: math.div($i * 100%, $grid-columns);
        }
    }
}

@include lg {
    @for $i from 1 through $grid-columns {
        .col-#{$i}-lg {
            box-sizing: border-box;
            flex-grow: 0;
            width: math.div($i * 100%, $grid-columns);
        }
    }
}

@include xl {
    @for $i from 1 through $grid-columns {
        .col-#{$i}-xl {
            box-sizing: border-box;
            flex-grow: 0;
            width: math.div($i * 100%, $grid-columns);
        }
    }
}
```

### Explanation:

- **Breakpoints**: Use mixins like `xs`, `sm`, `md`, `lg`, and `xl` for different screen sizes.
- **Loop**: The `@for` loop generates classes like `.col-1-xs` to `.col-12-xs`, ensuring the appropriate width for each column.
- **Width Calculation**: The `math.div($i * 100%, $grid-columns)` function divides the grid into equal parts based on the number of columns.

## Using the Grid System

To use this grid system in your HTML, apply the appropriate column, gap, and justification classes based on your layout needs.

### Example:

```html
<div class="container">
    <div class="row gap-2 justify-center">
        <div class="col-6-sm col-4-md col-3-lg">Column 1</div>
        <div class="col-6-sm col-8-md col-9-lg">Column 2</div>
    </div>
</div>
```

In this example:
- The `.gap-2` class applies a 20px gap between grid items.
- The `.justify-center` class centers the grid items within the row.
- Column classes like `.col-6-sm`, `.col-4-md`, and `.col-3-lg` adjust the column width based on screen size.

## Conclusion

This Sass grid system provides flexibility for building responsive layouts with customizable gaps, breakpoints, and flexible alignment options. By using Sass maps, loops, and mixins, you can efficiently create and manage grid structures that adapt seamlessly to various screen sizes and layout needs.

