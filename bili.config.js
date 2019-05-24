// import vue from "rollup-plugin-vue";

module.exports = {
    banner: true,
    output: {
        extractCSS: true,
    },
    plugins: {
        vue: {
            css: true
        },
    },
};
