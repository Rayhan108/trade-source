import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // 🔽 ei part-ta add koro
    linterOptions: {
      // "error" | "warn" | "off"
      reportUnusedDisableDirectives: "off",
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    // OPTIONAL: jodi chai, specific rule-tao off kora jayy
    // rules: {
    //   "@typescript-eslint/no-explicit-any": "off",
    // },
  },
];

export default eslintConfig;
