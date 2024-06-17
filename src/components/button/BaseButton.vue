<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'light'
  },
  rounded: {
    type: Boolean,
    required: false,
    default: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  outlined: {
    type: Boolean,
    required: false,
    default: false
  },
  size: {
    type: String,
    required: false,
    default: 'middle'
  }
});

const emit = defineEmits(['click'])

const clickOnButton = () => {
  emit('click');
}
</script>

<template>
  <button 
    :class="[
      'l_component', 
      'btn',
      `btn_${color}`, 
      {'btn_rounded': rounded},  
      {'btn_outlined': outlined}, 
      {'btn_big': size === 'big'}, {'btn_middle': size === 'middle'}, {'btn_small': size === 'small'}
      ]"
    :disabled="disabled"
    @click="clickOnButton"
  >
    <slot/>
  </button>
</template>

<style lang="scss">
.btn{
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  transition: 0.2s;

  &_light-light {
    background: var(--primary-light);
    border: 2px solid var(--primary-light);
    &:enabled:hover{
      background: var(--primary-light-light);
      border-color: var(--primary-light-light);
      color: black;
    }
  }
  &_light {
    background: var(--primary-default);
    border: 2px solid var(--primary-default);
    &:enabled:hover{
      background: var(--primary-light);
      border-color: var(--primary-light);
    }
  }
  &_default {
    background: var(--primary-dark);
    border: 2px solid var(--primary-dark);
    &:enabled:hover{
      background: var(--primary-default);
      border-color: var(--primary-default);
    }
  }
  &_dark {
    background: var(--primary-dark-dark);
    border: 2px solid var(--primary-dark-dark);
    &:enabled:hover{
      background: var(--primary-dark);
      border-color: var(--primary-dark);
    }
  }
  &_green {
    background: var(--green-default);
    border: 2px solid var(--green-default);
    &:enabled:hover{
      background: var(--green-light);
      border-color: var(--green-light);
    }
  }
  &_red {
    background: var(--red-default);
    border: 2px solid var(--red-default);
    &:enabled:hover{
      background: var(--red-light);
      border-color: var(--red-light);
    }
  }

  &_rounded{
    border-radius: 40px;
  }
  
  &:disabled{
    opacity: 0.6;
    cursor: default;
    &:hover{
      opacity: 0.6;
    }
  }

  &_outlined{
    background: var(--white);
    color: var(--black);
    &:hover{
      color: var(--white);
    }
  }

  &_small{
    padding: 0 14px;
    font-weight: 400;
    font-size: 14px;
    line-height: 29px;
    letter-spacing: 0.5px;
  }
  &_middle{
    padding: 0 22px;
    font-size: 16px;
    font-weight: 400;
    line-height: 38px;
    letter-spacing: 1px;
  }
  &_big{
    padding: 0 29px;
    font-size: 18px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1px;
  }
}
</style>
