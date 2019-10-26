import Validator from '../includes/validator'
import Validations from '../includes/validations'

export default {
  beforeCreate: function() {
    this.$ckd = Object.assign({}, this.$ckd, { validator: new Validator() })
  },
  methods: {
    validate: function(value) {
      this.verify(value)
      this.errors = this.validations.invalid().map(v => v.message)
    },
    verify: function(value) {
      this.validations = this.$ckd.validator.validate(this.$el, value)
    }
  },
  data: function() {
    return {
      errors: [],
      validations: new Validations()
    }
  }
}
