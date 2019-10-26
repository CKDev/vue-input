export default class {
  #validations

  constructor(validations) {
    this.#validations = validations || []
  }

  all() {
    return this.#validations
  }

  valid() {
    return this.all().filter(v => v.valid)
  }

  invalid() {
    return this.all().filter(v => !v.valid)
  }

  filter(func) {
    return this.all().filter(func)
  }

  [Symbol.iterator]() {
    let validations = this.all()
    let i = 0
    return {
      next() {
        return {
          value: validations[i++],
          done: i > validations.length
        }
      }
    }
  }
}
