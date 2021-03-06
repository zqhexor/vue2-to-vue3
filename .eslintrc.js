module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly'
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-model-argument': 'off', // v-model后面不能接参数
    'vue/valid-template-root': 'off', // 支持vue不要根节点
    'vue/no-multiple-template-root': 'off', // vue3支持多个根节点
    'vue/no-v-for-template-key': 'off', // vue3 v-for的key需放在template上
    'import/first': 'off' // 解决多个script标签都有import
  }
}
