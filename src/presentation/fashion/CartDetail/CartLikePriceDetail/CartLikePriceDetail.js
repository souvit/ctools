import { useI18n } from 'vue-i18n';
import traslation from "./CartLikePriceDetail.json"
import BasePrice from 'presentation/components/BasePrice/BasePrice.vue';
import DiscountCodes from './DiscountCodes/DiscountCodes.vue';
import useCartTools from 'hooks/useCartTools';

export default {
  components: {
    DiscountCodes,
    BasePrice,
  },
  props: {
    cart: {
      type: Object,
      required: true,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useI18n({
      messages: traslation
    });
    return { t, ...useCartTools() };
  },
};
