module.exports = {
  build: {
    extend(config, ctx) {}
  },
  css: [
    `~/assets/css/reset.css`,
    `~/assets/css/transitions.css`,
    `~/assets/css/variables.css`
  ],
  loading: { color: '#fff' },
  mode: 'universal'
};
