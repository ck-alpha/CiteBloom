// @ts-check Let TS check this config file

import zotero from "@zotero-plugin/eslint-config";

export default zotero({
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        // We disable this rule here because the template
        // contains some unused examples and variables
        "@typescript-eslint/no-unused-vars": "off",
        // Control-character ranges are intentional in text sanitizers.
        "no-control-regex": "off",
      },
    },
    {
      files: [
        "src/hooks.ts",
        "src/modules/contextPanel/setupHandlers/controllers/menuActionController.ts",
      ],
      rules: {
        // These late imports avoid loading optional/circular shutdown and UI modules.
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
});
