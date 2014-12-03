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

For adding an opacity layer after a background image

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
```

## Border Bottom Gradient

This will create a 1px tall gradient below an element

```
.border-bottom-gradient(@color-mid) {
	background-size: 100% 1px;
	background-repeat: no-repeat;
	background-position: 0 100%;
	background-image: linear-gradient(left, @body-bg 0%, @color-mid 50%, @body-bg 100%);
}
```

## Calls to Action

Some will say these have too many hover effects on them…and they may be right

```
.cta-pop() {
  border-style: solid;
  border-width: 10px;
  .ease-in-out(0.3s);

  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    text-align: center;
    .ease-in-out(0.3s);
  }

  &:hover{
    text-decoration: none;
  }
}
```

and
```
.cta-primary{
	.cta-variant(@brand-primary);
}

.cta-success{
	.cta-variant(@brand-success);
}

.cta-info{
	.cta-variant(@brand-info);
}

.cta-warning{
	.cta-variant(@brand-warning);
}

.cta-danger{
	.cta-variant(@brand-danger);
}
```

Be sure to include a color variant for your call to action 