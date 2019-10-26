<script type="text/javascript">
import Vue from 'vue'
import Validation from './mixins/validation'

export default {
  name: 'VInput',
  mixins: [Validation],
  props: {
    label: {
      type: String
    }
  }
}
</script>
