# CKD Vue Input

## Installation
```
yarn add @ckd/vue-input@latest
```

## Usage

This component is only meant to be extended for use in form input components. It is not designed to be used on it's own.

Sample usage in another component would look like:

```
import Vue from 'vue'
import Input from '@ckd/vue-input'

export default {
  name: 'FormComponent',
  extends: Input,
  methods: {
    // ...
  }
}
```