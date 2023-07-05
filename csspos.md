CSS positions: static, fixed, sticky, relative, and absolute.

```markdown
# CSS Positioning Examples

## Static
The `static` position is the default position for all elements. It follows the normal flow of the document and is not affected by other positioning properties.

Example:
```html
<div style="position: static;">
  This is a static positioned element.
</div>
```

## Fixed
The `fixed` position is positioned relative to the browser window. It stays in the same position even if the page is scrolled.

Example:
```html
<div style="position: fixed; top: 20px; left: 20px;">
  This is a fixed positioned element.
</div>
```

## Sticky
The `sticky` position is a hybrid between `relative` and `fixed`. It acts as `relative` within its parent element until a specified scroll threshold is reached, after which it becomes `fixed` and stays in that position.

Example:
```html
<div style="position: sticky; top: 50px;">
  This is a sticky positioned element.
</div>
```

## Relative
The `relative` position is positioned relative to its normal position. It can be moved using the `top`, `right`, `bottom`, and `left` properties.

Example:
```html
<div style="position: relative; top: 10px; left: 10px;">
  This is a relative positioned element.
</div>
```

## Absolute
The `absolute` position is positioned relative to the nearest positioned ancestor (or the initial containing block if none is found). It is taken out of the normal flow of the document.

Example:
```html
<div style="position: absolute; top: 100px; left: 100px;">
  This is an absolute positioned element.
</div>
```
```

Feel free to copy the above markdown code into a file with a `.md` extension to view it with proper formatting.