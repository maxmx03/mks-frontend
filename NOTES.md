# Design

## Colors

```javascript
const colors = {
  blue: '#0f52ba',
  white: {
    50: '#eeeeee', // footer
    100: '#f9f9f9', // background
    200: '#bfbfbf', // product
    300: '#ffffff', // brand, cart, product
  },
  black: {
    50: '#373737',
    100: '#2c2c2c', // product
    200: '#000000', // close cart, product
  },
}
```

## Typography

```javascript
const typography = {
  topbar: {
    brand: '2.5rem',
    subtitle: '1.25rem',
    card: '1rem',
  },
  product: {
    title: '1rem',
    price: '0.938rem',
    description: '0.625rem',
    button: '0.875rem',
  },
  checkout: {
    brand: '1.688rem',
    product: {
      plus: '0.5rem',
      minus: '0.5rem',
      qt: '0.75rem',
      price: '0.875rem',
      description: '0.813rem',
    },
    total: {
      title: '1.75rem',
      price: '1.75rem',
    },
    button: '1.75rem',
  },
  footer: '0.75rem',
}
```

## Sizes

```javascript
const sizes = {
  menu: {
    width: '1440px',
    height: '101px',
    button: {
      width: '90px',
      height: '45px',
      icon: {
        width: '18px',
        height: '18px',
      },
    },
  },
  product: {
    width: '218px',
    height: '285px',
    image: {
      width: '111px',
      height: '136px',
    },
    price: {
      width: '64px',
      height: '26px',
    },
    button: {
      width: '218px',
      height: '32px',
      icon: {
        height: '12px',
        width: '12px',
      },
    },
  },
  checkout: {
    width: '468px',
    height: '1024px',
    product: {
      width: '385px',
      height: '101px',
    },
    close: {
      width: '38px',
      height: '38px',
    },
    button: {
      width: '486px',
      height: '97px',
    }
  },
}
```
