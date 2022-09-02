module.exports = {
    input  : ['src/styled/**/*.{js,ts,jsx,tsx}'],
    output : [
        { dir: 'dist/styled/esm', format: 'es' },
        { dir: 'dist/styled', format: 'cjs', exports: 'auto' },
    ],
    plugins: [commonjs(), multiInput.default({ relative: 'src/' })],
    external(id) {
        return [...exDepenedncies, 'react', 'react-dom'].filter((dep) => id.includes(dep)).length > 0;
    },
}
