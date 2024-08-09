export default [
    {
        ignores: ["node_modules", ".git", "firebase-debug.log", "firebase-debug.*.log", "*.local"]
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: "module",
            globals: {
                browser: true,
                es2021: true,
                node: true
            }
        },
        plugins: {
            "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin")).default
        },
        rules: {
            "no-undef": "off",
            "no-unused-vars": "off",
            "no-fallthrough": "off",
            "no-constant-condition": "off"
        }
    }
];
