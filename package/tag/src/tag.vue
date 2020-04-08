<script>
  export default {
    name: 'MiTag',
    props: {
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String,
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      }
    },
    methods: {
      handleClose(event) {
        event.stopPropagation();
        this.$emit('close', event);
      },
      handleClick(event) {
        this.$emit('click', event);
      }
    },
    computed: {
      tagSize() {
        return this.size || (this.$ELEMENT || {}).size;
      }
    },
    render(h) {
      const { type, tagSize, hit, effect } = this;
      const classes = [
        'mi-tag',
        type ? `mi-tag--${type}` : '',
        tagSize ? `mi-tag--${tagSize}` : '',
        effect ? `mi-tag--${effect}` : '',
        hit && 'is-hit'
      ];
      const tagEl = (
        <span
          class={ classes }
          style={{ backgroundColor: this.color }}
          on-click={ this.handleClick }>
          { this.$slots.default }
          {
            this.closable && <i class="mi-tag__close mi-icon-close" on-click={ this.handleClose }></i>
          }
        </span>
      );

      return this.disableTransitions ? tagEl : <transition name="mi-zoom-in-center">{ tagEl }</transition>;
    }
  };
</script>
