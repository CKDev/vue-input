import Validations from './validations'

export default class {
  constructor() {
    this.rules = [
      {
        name: 'validate-required',
        message: 'This is a required field.',
        validation: function(value) {
          return value.trim() !== ''
        }
      },
      {
        name: 'validate-length',
        message: 'Must be at least {{length}} characters.',
        validation: function(value, data) {
          return value.trim().length >= parseInt(data.length)
        }
      }
    ]
  }

  addRule(name, message, validation) {
    this.rules.push({ name: name.toLowerCase(), validation: validation, message: message })
  }

  removeRule(name) {
    let index = this.rules.findIndex(r => r.name == name.toLowerCase())
    if(index > -1) {
      this.rules.splice(index, 1)
    }
  }

  findRule(name) {
    this.rules.find(r => r.name == name.toLowerCase())
  }

  getValidatableRules(classes) {
    return this.rules.filter(r => classes.includes(r.name))
  }

  validate(el, value) {
    const rules = this.getValidatableRules(el.className.split(/\s+/))
    const data = el.dataset

    return new Validations(
      rules.map(rule => {
        let { name, validation, message } = rule
        return {
          name: name,
          valid: validation(value, data) === true,
          message: message.replace(/\{\{(.*?)\}\}/, (key, prop) => {
            /**
             * Extract variables from the data and interpolate
             * Return the literal match if no data provided
             */
            if (data[prop]) {
              return data[prop]
            }
            return key
          })
        }
      })
    )
  }
}
