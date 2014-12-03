# Base LESS Features

## Easing

All easing mixins use follow the following format:

```
.ease-in-out(@time) {
  transition: all @time ease-in-out;
}
```

We `ease`, `ease-in`, `ease-out`, `ease-in-out`

## Background Opacity

For adding an opacity layer after an image

```
.opacity-bg(@opacity) {
	&:after{
		content: "";
		opacity: @opacity;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		position: absolute;
		z-index: @z-basement;
	}
}