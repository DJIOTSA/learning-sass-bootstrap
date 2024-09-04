# Sass Maps

Sass maps are a powerful way to store and manipulate data in key-value pairs within your stylesheets. They are similar to other programming languages' dictionaries or objects, allowing you to create more complex and dynamic styles.

## Defining a Map

A map in Sass is defined using parentheses `()` with a series of key-value pairs separated by commas. The syntax looks like this:

```scss
$map-name: (
  key1: value1,
  key2: value2,
  key3: value3
);
```

### Example:

```scss
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  danger: #e74c3c
);
```

## Accessing Map Values

To access a value from a map, you can use the `map-get()` function. This function takes two arguments: the map and the key you want to retrieve.

### Example:

```scss
$primary-color: map-get($colors, primary);

.button {
  background-color: $primary-color;  // #3498db
}
```

## Adding/Updating Map Values

You can add or update values in a map using the `map-merge()` function. This function merges a new key-value pair into an existing map or updates an existing key with a new value.

### Example:

```scss
$updated-colors: map-merge($colors, (warning: #f1c40f));

.alert {
  background-color: map-get($updated-colors, warning);  // #f1c40f
}
```

## Removing Map Values

To remove a key-value pair from a map, you can use the `map-remove()` function. This function creates a new map without the specified key.

### Example:

```scss
$reduced-colors: map-remove($colors, danger);

.text-danger {
  color: map-get($reduced-colors, danger);  // Returns null, as danger has been removed
}
```

## Iterating Over Maps

You can iterate over a map using the `@each` directive. This allows you to loop through all key-value pairs in a map and apply styles dynamically.

### Example:

```scss
@each $name, $color in $colors {
  .#{$name} {
    background-color: $color;
  }
}
```

This will generate:

```css
.primary {
  background-color: #3498db;
}
.secondary {
  background-color: #2ecc71;
}
.danger {
  background-color: #e74c3c;
}
```

## Map Functions

Sass provides several useful functions for working with maps:

- **`map-get($map, $key)`**: Retrieves the value associated with the given key.
- **`map-merge($map1, $map2)`**: Merges two maps into one.
- **`map-remove($map, $key)`**: Removes the key-value pair from the map.
- **`map-keys($map)`**: Returns a list of all the keys in the map.
- **`map-values($map)`**: Returns a list of all the values in the map.
- **`map-has-key($map, $key)`**: Checks if the map contains the specified key.

### Example:

```scss
$keys: map-keys($colors);  // Returns: primary, secondary, danger
$values: map-values($colors);  // Returns: #3498db, #2ecc71, #e74c3c
```

## Conclusion

Sass maps are a versatile and efficient way to handle complex data in your stylesheets. They provide a powerful mechanism for storing, retrieving, and manipulating key-value pairs, making your CSS more dynamic and maintainable. 

For more details, you can refer to the official [Sass documentation](https://sass-lang.com/documentation/modules/map).

