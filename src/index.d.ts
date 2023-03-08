declare module "src/utils" {
    /**
     * Get all of the available layer names
     *
     * @function getLayerNames
     * @returns {string[]} A Stack containing the requested layers
     */
    export function getLayerNames(): string[];
    /**
     * A function to get a stack from a list of layer names
     *
     * @function getStack
     * @param {string[]} list - A list of layers to stack
     * @returns {Stack} A Stack containing the requested layers
     */
    export function getStack(list: string[]): Stack;
    /**
     * Get one layer
     *
     * @function getLayer
     * @param {string} name - The name of the layer to get
     * @returns {Layer} The requested layer
     */
    export function getLayer(name: string): Layer;
}
declare module "src/legacy" {
    export const common: Stack;
    export const node: Stack;
    export const mocha: Stack;
    export const chai: Stack;
    export const react: Stack;
    export const babel: Stack;
    export const console: Stack;
    export const jsdoc: Stack;
}
declare module "src/meta" {
    export {};
}
declare module "src/recommended" {
    export const library: Stack;
    export const plannedStacks: {
        [x: string]: Stack;
    };
}
declare module "src/main" {
    /**
     * - an eslint ConfigObject
     */
    export type Layer = {
        [x: string]: any;
    };
    /**
     * - an eslint ConfigObject
     */
    export type Stack = Layer[];
    /**
     * - A hash of rules and associated settings
     */
    export type RuleSet = {
        [x: string]: any;
    };
    import recommended = require("src/recommended");
    import utils = require("src/utils");
    import meta = require("src/meta");
    /**
     * @module main
     * @type {object}
     * @property {Object<string, Stack>} recommended Recommended Stacks
     * @property {Object<string, Stack>} legacy Legacy compatible Stacks
     * @property {Object<string, Function>} utils Utilities
     * @property {Object<string, (Function | string[] | Object<string, RuleSet>)>} meta Rule Metadata
     */
    export const legacy: object;
    import { version } from "package.json";
    export { recommended, utils, meta, version };
}
declare module "src/legacy/common-base" {
    export namespace languageOptions {
        const ecmaVersion: number;
        const sourceType: string;
    }
}
declare module "src/legacy/common-plugin-eslint-comments" {
    export const plugins: {
        'eslint-comments': any;
    };
    export const rules: {
        'eslint-comments/disable-enable-pair': string;
        'eslint-comments/no-aggregating-enable': string;
        'eslint-comments/no-duplicate-disable': string;
        'eslint-comments/no-unused-disable': string;
        'eslint-comments/no-unused-enable': string;
        'eslint-comments/no-unlimited-disable': string;
        'eslint-comments/no-restricted-disable': string;
        'eslint-comments/no-use': (string | {
            allow: string[];
        })[];
        'eslint-comments/require-description': string;
    };
}
declare module "src/legacy/common-plugin-filenames" {
    export namespace plugins {
        export { filenames };
    }
    export const rules: {
        'filenames/match-regex': (string | boolean)[];
        'filenames/match-exported': string;
        'filenames/no-index': string;
    };
}
declare module "src/legacy/common-plugin-import" {
    export namespace plugins {
        export { imp0rt as import };
    }
    export const rules: {
        'import/no-unresolved': string;
        'import/named': string;
        'import/default': string;
        'import/namespace': string;
        'import/no-restricted-paths': string;
        'import/no-absolute-path': string;
        'import/no-dynamic-require': string;
        'import/no-internal-modules': string;
        'import/no-webpack-loader-syntax': string;
        'import/no-self-import': string;
        'import/no-cycle': string;
        'import/no-useless-path-segments': string;
        'import/no-relative-parent-imports': string;
        'import/no-unused-modules': string;
        'import/export': string;
        'import/no-named-as-default': string;
        'import/no-named-as-default-member': string;
        'import/no-deprecated': string;
        'import/no-extraneous-dependencies': string;
        'import/no-mutable-exports': string;
        'import/unambiguous': string;
        'import/no-commonjs': string;
        'import/no-amd': string;
        'import/no-nodejs-modules': string;
        'import/first': string;
        'import/exports-last': string;
        'import/no-duplicates': string;
        'import/no-namespace': string;
        'import/extensions': (string | {
            js: string;
            json: string;
        })[];
        'import/order': (string | {
            groups: (string | string[])[];
            'newlines-between': string;
            alphabetize: {
                order: string;
            };
        })[];
        'import/newline-after-import': string;
        'import/prefer-default-export': string;
        'import/max-dependencies': string;
        'import/no-unassigned-import': string;
        'import/no-named-default': string;
        'import/no-default-export': string;
        'import/no-named-export': string;
        'import/no-anonymous-default-export': string;
        'import/group-exports': string;
        'import/dynamic-import-chunkname': string;
    };
}
declare module "src/legacy/common-plugin-jsdoc" {
    export namespace plugins {
        export { jsdoc };
    }
    export const rules: {
        'jsdoc/check-examples': string;
        'jsdoc/check-types': string;
    };
}
declare module "src/legacy/common-plugin-promise" {
    export namespace plugins {
        export { promise };
    }
    export const rules: {
        'promise/always-return': string;
        'promise/avoid-new': string;
        'promise/catch-or-return': string;
        'promise/no-callback-in-promise': string;
        'promise/no-native': string;
        'promise/no-nesting': string;
        'promise/no-new-statics': string;
        'promise/no-promise-in-callback': string;
        'promise/no-return-in-finally': string;
        'promise/no-return-wrap': string;
        'promise/param-names': string;
        'promise/valid-params': string;
    };
}
declare module "src/legacy/common-plugin-security" {
    export namespace plugins {
        export { security };
    }
    export const rules: {
        'security/detect-bidi-characters': string;
        'security/detect-buffer-noassert': string;
        'security/detect-child-process': string;
        'security/detect-disable-mustache-escape': string;
        'security/detect-eval-with-expression': string;
        'security/detect-new-buffer': string;
        'security/detect-no-csrf-before-method-override': string;
        'security/detect-non-literal-fs-filename': string;
        'security/detect-non-literal-regexp': string;
        'security/detect-non-literal-require': string;
        'security/detect-object-injection': string;
        'security/detect-possible-timing-attacks': string;
        'security/detect-pseudoRandomBytes': string;
        'security/detect-unsafe-regex': string;
    };
}
declare module "src/legacy/common-plugin-unicorn" {
    export namespace plugins {
        export { unicorn };
    }
    export const rules: {
        'unicorn/better-regex': string;
        'unicorn/catch-error-name': string;
        'unicorn/consistent-function-scoping': string;
        'unicorn/custom-error-definition': string;
        'unicorn/error-message': string;
        'unicorn/escape-case': string;
        'unicorn/expiring-todo-comments': string;
        'unicorn/explicit-length-check': string;
        'unicorn/filename-case': string;
        'unicorn/import-index': string;
        'unicorn/new-for-builtins': string;
        'unicorn/no-abusive-eslint-disable': string;
        'unicorn/no-array-instanceof': string;
        'unicorn/no-console-spaces': string;
        'unicorn/no-fn-reference-in-iterator': string;
        'unicorn/no-for-loop': string;
        'unicorn/no-hex-escape': string;
        'unicorn/no-keyword-prefix': string;
        'unicorn/no-nested-ternary': string;
        'unicorn/no-new-buffer': string;
        'unicorn/no-null': string;
        'unicorn/no-process-exit': string;
        'unicorn/no-reduce': string;
        'unicorn/no-unreadable-array-destructuring': string;
        'unicorn/no-unsafe-regex': string;
        'unicorn/no-unused-properties': string;
        'unicorn/no-useless-undefined': string;
        'unicorn/no-zero-fractions': string;
        'unicorn/number-literal-case': string;
        'unicorn/prefer-add-event-listener': string;
        'unicorn/prefer-dataset': string;
        'unicorn/prefer-event-key': string;
        'unicorn/prefer-flat-map': string;
        'unicorn/prefer-includes': string;
        'unicorn/prefer-modern-dom-apis': string;
        'unicorn/prefer-negative-index': string;
        'unicorn/prefer-node-append': string;
        'unicorn/prefer-node-remove': string;
        'unicorn/prefer-number-properties': string;
        'unicorn/prefer-optional-catch-binding': string;
        'unicorn/prefer-query-selector': string;
        'unicorn/prefer-reflect-apply': string;
        'unicorn/prefer-replace-all': string;
        'unicorn/prefer-set-has': string;
        'unicorn/prefer-spread': string;
        'unicorn/prefer-starts-ends-with': string;
        'unicorn/prefer-trim-start-end': string;
        'unicorn/prefer-string-slice': string;
        'unicorn/prefer-text-content': string;
        'unicorn/prefer-type-error': string;
        'unicorn/prevent-abbreviations': string;
        'unicorn/string-content': string;
        'unicorn/throw-new-error': string;
    };
}
declare module "src/legacy/common-ruleset-best-practices" {
    export const rules: {
        'accessor-pairs': string;
        'array-callback-return': (string | {
            allowImplicit: boolean;
        })[];
        'block-scoped-var': string;
        'class-methods-use-this': string;
        complexity: string;
        'consistent-return': string;
        curly: string;
        'default-case': string;
        'default-case-last': string;
        'default-param-last': string;
        'dot-location': string[];
        'dot-notation': (string | {
            allowPattern: string;
        })[];
        eqeqeq: string;
        'grouped-accessor-pairs': string;
        'function-call-argument-newline': string[];
        'guard-for-in': string;
        'no-alert': string;
        'no-caller': string;
        'no-case-declarations': string;
        'no-constructor-return': string;
        'no-div-regex': string;
        'no-else-return': string;
        'no-empty-function': string;
        'no-empty-pattern': string;
        'no-eq-null': string;
        'no-eval': string;
        'no-extend-native': string;
        'no-extra-bind': string;
        'no-extra-label': string;
        'no-fallthrough': string;
        'no-floating-decimal': string;
        'no-global-assign': string;
        'no-implicit-coercion': string;
        'no-implicit-globals': string;
        'no-implied-eval': string;
        'no-invalid-this': string;
        'no-iterator': string;
        'no-labels': (string | {
            allowLoop: boolean;
            allowSwitch: boolean;
        })[];
        'no-lone-blocks': string;
        'no-loop-func': string;
        'no-magic-numbers': string;
        'no-multi-spaces': string;
        'no-multi-str': string;
        'no-misleading-character-class': string;
        'no-new': string;
        'no-new-func': string;
        'no-new-wrappers': string;
        'no-octal': string;
        'no-octal-escape': string;
        'no-param-reassign': (string | {
            props: boolean;
        })[];
        'no-proto': string;
        'no-redeclare': string;
        'no-restricted-properties': (string | {
            object: string;
            message: string;
        })[];
        'no-return-assign': string;
        'no-return-await': string;
        'no-script-url': string;
        'no-self-assign': string;
        'no-self-compare': string;
        'no-sequences': string;
        'no-throw-literal': string;
        'no-unmodified-loop-condition': string;
        'no-unused-expressions': string;
        'no-unused-labels': string;
        'no-useless-call': string;
        'no-useless-catch': string;
        'no-useless-concat': string;
        'no-useless-escape': string;
        'no-useless-return': string;
        'no-void': string;
        'no-with': string;
        'prefer-promise-reject-errors': string;
        'prefer-regex-literals': string;
        'prefer-named-capture-group': string;
        radix: string;
        'require-await': string;
        'require-unicode-regexp': string;
        'vars-on-top': string;
        'wrap-iife': string;
        yoda: string;
    };
}
declare module "src/legacy/common-ruleset-ecmascript-2015" {
    export const rules: {
        'arrow-body-style': string;
        'arrow-parens': string;
        'arrow-spacing': string;
        'constructor-super': string;
        'generator-star-spacing': string;
        'no-class-assign': string;
        'no-confusing-arrow': string;
        'no-const-assign': string;
        'no-dupe-class-members': string;
        'no-duplicate-imports': string;
        'no-new-symbol': string;
        'no-restricted-exports': string;
        'no-restricted-imports': string;
        'no-this-before-super': string;
        'no-useless-computed-key': string;
        'no-useless-constructor': string;
        'no-useless-rename': string;
        'no-var': string;
        'object-shorthand': string;
        'prefer-arrow-callback': string;
        'prefer-const': string;
        'prefer-destructuring': string;
        'prefer-numeric-literals': string;
        'prefer-rest-params': string;
        'prefer-spread': string;
        'prefer-template': string;
        'require-yield': string;
        'rest-spread-spacing': string;
        'sort-imports': string;
        'symbol-description': string;
        'template-curly-spacing': string;
        'yield-star-spacing': string;
    };
}
declare module "src/legacy/common-ruleset-ecmascript-2017" {
    export const rules: {
        'promise/prefer-await-to-then': string;
        'promise/prefer-await-to-callbacks': string;
    };
}
declare module "src/legacy/common-ruleset-ecmascript-2018" {
    export const rules: {
        'prefer-object-spread': string;
    };
}
declare module "src/legacy/common-ruleset-ecmascript-2022" {
    export const rules: {
        'logical-assignment-operators': string;
        'arrow-parens': string;
    };
}
declare module "src/legacy/common-ruleset-possible-errors" {
    export const rules: {
        'no-async-promise-executor': string;
        'for-direction': string;
        'getter-return': (string | {
            allowImplicit: boolean;
        })[];
        'no-await-in-loop': string;
        'no-compare-neg-zero': string;
        'no-cond-assign': string;
        'no-console': string;
        'no-constant-condition': string;
        'no-control-regex': string;
        'no-debugger': string;
        'no-dupe-args': string;
        'no-dupe-else-if': string;
        'no-dupe-keys': string;
        'no-duplicate-case': string;
        'no-empty': string;
        'no-empty-character-class': string;
        'no-ex-assign': string;
        'no-extra-boolean-cast': string;
        'no-extra-parens': (string | {
            nestedBinaryExpressions: boolean;
            ignoreJSX: string;
        })[];
        'no-extra-semi': string;
        'no-func-assign': string;
        'no-import-assign': string;
        'no-inner-declarations': string;
        'no-invalid-regexp': string;
        'no-irregular-whitespace': string;
        'no-loss-of-precision': string;
        'no-obj-calls': string;
        'no-promise-executor-return': string;
        'no-prototype-builtins': string;
        'no-regex-spaces': string;
        'no-setter-return': string;
        'no-sparse-arrays': string;
        'no-template-curly-in-string': string;
        'no-unexpected-multiline': string;
        'no-unreachable': string;
        'no-unreachable-loop': string;
        'no-unsafe-finally': string;
        'no-unsafe-negation': string;
        'no-useless-backreference': string;
        'require-atomic-updates': string;
        'use-isnan': string;
        'valid-typeof': string;
    };
}
declare module "src/legacy/common-ruleset-strict" {
    export namespace rules {
        const strict: string;
    }
}
declare module "src/legacy/common-ruleset-stylistic-issues" {
    export const rules: {
        'array-bracket-newline': string[];
        'array-bracket-spacing': (string | {
            singleValue: boolean;
        })[];
        'array-element-newline': string;
        'block-spacing': string;
        'brace-style': (string | {
            allowSingleLine: boolean;
        })[];
        camelcase: (string | {
            properties: string;
        })[];
        'capitalized-comments': string;
        'comma-dangle': (string | {
            arrays: string;
            objects: string;
            imports: string;
            exports: string;
            functions: string;
        })[];
        'comma-spacing': string;
        'comma-style': string;
        'computed-property-spacing': string;
        'consistent-this': string[];
        'eol-last': string;
        'func-call-spacing': string;
        'func-name-matching': string;
        'func-names': string;
        'func-style': string;
        'function-paren-newline': string;
        'id-length': string;
        'id-match': string;
        'implicit-arrow-linebreak': string;
        indent: (string | {
            SwitchCase: number;
        })[];
        'jsx-quotes': string[];
        'key-spacing': string;
        'keyword-spacing': (string | {
            before: boolean;
            after: boolean;
        })[];
        'line-comment-position': string;
        'linebreak-style': string;
        'lines-around-comment': string;
        'lines-between-class-members': (string | {
            exceptAfterSingleLine: boolean;
        })[];
        'max-depth': string;
        'max-len': (string | {
            code: number;
            ignoreTrailingComments: boolean;
            ignoreUrls: boolean;
        })[];
        'max-lines': string;
        'max-nested-callbacks': string;
        'max-params': string;
        'max-classes-per-file': string;
        'max-statements': string;
        'max-statements-per-line': string;
        'max-lines-per-function': string;
        'multiline-comment-style': string;
        'multiline-ternary': string;
        'new-cap': string;
        'new-parens': string;
        'newline-per-chained-call': (string | {
            ignoreChainWithDepth: number;
        })[];
        'no-array-constructor': string;
        'no-bitwise': string;
        'no-continue': string;
        'no-inline-comments': string;
        'no-lonely-if': string;
        'no-mixed-operators': string;
        'no-mixed-spaces-and-tabs': string[];
        'no-multi-assign': string;
        'no-multiple-empty-lines': (string | {
            max: number;
            maxEOF: number;
            maxBOF: number;
        })[];
        'no-negated-condition': string;
        'no-nested-ternary': string;
        'no-new-object': string;
        'no-plusplus': string;
        'no-restricted-syntax': string;
        'no-tabs': string;
        'no-ternary': string;
        'no-trailing-spaces': string[];
        'no-underscore-dangle': string;
        'no-unneeded-ternary': string;
        'no-whitespace-before-property': string;
        'nonblock-statement-body-position': string;
        'object-curly-newline': string;
        'object-curly-spacing': string;
        'object-property-newline': (string | {
            allowMultiplePropertiesPerLine: boolean;
        })[];
        'one-var': string[];
        'one-var-declaration-per-line': string;
        'operator-assignment': string;
        'operator-linebreak': string[];
        'padded-blocks': string[];
        'padding-line-between-statements': (string | {
            blankLine: string;
            prev: string;
            next: string;
        })[];
        'prefer-exponentiation-operator': string;
        'quote-props': string[];
        quotes: (string | {
            avoidEscape: boolean;
        })[];
        semi: string;
        'semi-spacing': string;
        'semi-style': string;
        'sort-keys': string;
        'sort-imports': string;
        'sort-vars': string;
        'space-before-blocks': string;
        'space-before-function-paren': (string | {
            anonymous: string;
            named: string;
        })[];
        'space-in-parens': string;
        'space-infix-ops': string;
        'space-unary-ops': string;
        'spaced-comment': string;
        'switch-colon-spacing': string;
        'template-tag-spacing': string;
        'unicode-bom': string;
        'wrap-regex': string;
    };
}
declare module "src/legacy/common-ruleset-variables" {
    export const rules: {
        'init-declarations': string;
        'no-delete-var': string;
        'no-label-var': string;
        'no-restricted-globals': string;
        'no-shadow': (string | {
            allow: string[];
        })[];
        'no-shadow-restricted-names': string;
        'no-undef': string;
        'no-undef-init': string;
        'no-undefined': string;
        'no-unused-vars': (string | {
            ignoreRestSiblings: boolean;
            argsIgnorePattern: string;
        })[];
        'no-use-before-define': string;
    };
}
declare module "src/legacy/console-base" {
    export const rules: {
        'no-console': string;
    };
}
declare module "src/legacy/console-plugin-node" {
    import { env } from "node/process";
    export namespace plugins {
        export { node };
    }
    export const rules: {
        'node/no-process-env': string;
    };
    export namespace settings {
        export { env };
    }
}
declare module "src/legacy/console-plugin-security" {
    export namespace plugins {
        export { security };
    }
    export const rules: {
        'security/detect-child-process': string;
        'security/detect-non-literal-fs-filename': string;
        'security/detect-unsafe-regex': string;
    };
}
declare module "src/legacy/frontend-base" {
    export const files: string[];
    export namespace languageOptions {
        const ecmaVersion: number;
        const sourceType: string;
        namespace parserOptions {
            namespace ecmaFeatures {
                const globalReturn: boolean;
                const implicitStrict: boolean;
                const jsx: boolean;
            }
        }
        const globals: {
            addEventListener: boolean;
            applicationCache: boolean;
            atob: boolean;
            Blob: boolean;
            BroadcastChannel: boolean;
            btoa: boolean;
            Cache: boolean;
            caches: boolean;
            CacheStorage: boolean;
            clearInterval: boolean;
            clearTimeout: boolean;
            Client: boolean;
            clients: boolean;
            Clients: boolean;
            close: boolean;
            console: boolean;
            CustomEvent: boolean;
            ErrorEvent: boolean;
            Event: boolean;
            ExtendableEvent: boolean;
            ExtendableMessageEvent: boolean;
            fetch: boolean;
            FetchEvent: boolean;
            FileReaderSync: boolean;
            FormData: boolean;
            Headers: boolean;
            IDBCursor: boolean;
            IDBCursorWithValue: boolean;
            IDBDatabase: boolean;
            IDBFactory: boolean;
            IDBIndex: boolean;
            IDBKeyRange: boolean;
            IDBObjectStore: boolean;
            IDBOpenDBRequest: boolean;
            IDBRequest: boolean;
            IDBTransaction: boolean;
            IDBVersionChangeEvent: boolean;
            ImageData: boolean;
            importScripts: boolean;
            indexedDB: boolean;
            location: boolean;
            MessageChannel: boolean;
            MessageEvent: boolean;
            MessagePort: boolean;
            name: boolean;
            navigator: boolean;
            Notification: boolean;
            onclose: boolean;
            onconnect: boolean;
            onerror: boolean;
            onfetch: boolean;
            oninstall: boolean;
            onlanguagechange: boolean;
            onmessage: boolean;
            onmessageerror: boolean;
            onnotificationclick: boolean;
            onnotificationclose: boolean;
            onoffline: boolean;
            ononline: boolean;
            onpush: boolean;
            onpushsubscriptionchange: boolean;
            onrejectionhandled: boolean;
            onsync: boolean;
            onunhandledrejection: boolean;
            performance: boolean;
            Performance: boolean;
            PerformanceEntry: boolean;
            PerformanceMark: boolean;
            PerformanceMeasure: boolean;
            PerformanceNavigation: boolean;
            PerformanceResourceTiming: boolean;
            PerformanceTiming: boolean;
            postMessage: boolean;
            Promise: boolean;
            queueMicrotask: boolean;
            registration: boolean;
            removeEventListener: boolean;
            Request: boolean;
            Response: boolean;
            self: boolean;
            ServiceWorker: boolean;
            ServiceWorkerContainer: boolean;
            ServiceWorkerGlobalScope: boolean;
            ServiceWorkerMessageEvent: boolean;
            ServiceWorkerRegistration: boolean;
            setInterval: boolean;
            setTimeout: boolean;
            skipWaiting: boolean;
            TextDecoder: boolean;
            TextEncoder: boolean;
            URL: boolean;
            URLSearchParams: boolean;
            WebSocket: boolean;
            WindowClient: boolean;
            Worker: boolean;
            WorkerGlobalScope: boolean;
            XMLHttpRequest: boolean;
        };
    }
    export const rules: {
        'class-methods-use-this': (string | {
            exceptMethods: string[];
        })[];
        'no-invalid-this': string;
    };
}
declare module "src/legacy/frontend-plugin-babel" {
    export const files: string[];
    export namespace plugins {
        export { babel };
    }
    export const rules: {
        'babel/camelcase': string;
        'babel/new-cap': string;
        'babel/no-invalid-this': string;
        'babel/no-unused-expressions': string;
        'babel/object-curly-spacing': string;
        'babel/quotes': (string | {
            avoidEscape: boolean;
        })[];
        'babel/semi': string;
        'babel/valid-typeof': string;
    };
}
declare module "src/legacy/frontend-plugin-filenames" {
    export namespace plugins {
        export { filenames };
    }
    export const rules: {
        'filenames/match-regex': string;
        'filenames/match-exported': string;
    };
}
declare module "src/legacy/frontend-plugin-jsx-a11y" {
    export const files: string[];
    export const plugins: {
        'jsx-a11y': any;
    };
    export const rules: {
        'jsx-a11y/alt-text': string;
        'jsx-a11y/anchor-has-content': string;
        'jsx-a11y/anchor-is-valid': string;
        'jsx-a11y/aria-activedescendant-has-tabindex': string;
        'jsx-a11y/aria-props': string;
        'jsx-a11y/aria-proptypes': string;
        'jsx-a11y/aria-role': string;
        'jsx-a11y/aria-unsupported-elements': string;
        'jsx-a11y/autocomplete-valid': string;
        'jsx-a11y/click-events-have-key-events': string;
        'jsx-a11y/control-has-associated-label': (string | {
            ignoreElements: string[];
            ignoreRoles: string[];
            includeRoles: string[];
        })[];
        'jsx-a11y/heading-has-content': string;
        'jsx-a11y/html-has-lang': string;
        'jsx-a11y/iframe-has-title': string;
        'jsx-a11y/img-redundant-alt': string;
        'jsx-a11y/interactive-supports-focus': (string | {
            tabbable: string[];
        })[];
        'jsx-a11y/label-has-associated-control': string;
        'jsx-a11y/lang': string;
        'jsx-a11y/media-has-caption': string;
        'jsx-a11y/mouse-events-have-key-events': string;
        'jsx-a11y/no-access-key': string;
        'jsx-a11y/no-autofocus': string;
        'jsx-a11y/no-distracting-elements': string;
        'jsx-a11y/no-interactive-element-to-noninteractive-role': string;
        'jsx-a11y/no-noninteractive-element-interactions': (string | {
            body: string[];
            iframe: string[];
            img: string[];
        })[];
        'jsx-a11y/no-noninteractive-element-to-interactive-role': string;
        'jsx-a11y/no-noninteractive-tabindex': string;
        'jsx-a11y/no-redundant-roles': string;
        'jsx-a11y/no-static-element-interactions': string;
        'jsx-a11y/role-has-required-aria-props': string;
        'jsx-a11y/role-supports-aria-props': string;
        'jsx-a11y/scope': string;
        'jsx-a11y/tabindex-no-positive': string;
    };
}
declare module "src/legacy/frontend-plugin-node" {
    export const files: string[];
    export namespace plugins {
        export { node };
    }
    export const rules: {
        'node/no-unsupported-features/es-syntax': (string | {
            ignores: string[];
        })[];
    };
}
declare module "src/legacy/frontend-plugin-react-hooks" {
    export const files: string[];
    export const plugins: {
        'react-hooks': any;
    };
    export const rules: {
        'react-hooks/rules-of-hooks': string;
        'react-hooks/exhaustive-deps': string;
    };
}
declare module "src/legacy/frontend-plugin-react" {
    export namespace plugins {
        export { react };
    }
    export namespace settings {
        export namespace react_1 {
            const version: string;
        }
        export { react_1 as react };
    }
    export const rules: {
        'react/boolean-prop-naming': string;
        'react/button-has-type': string;
        'react/default-props-match-prop-types': string;
        'react/destructuring-assignment': string;
        'react/display-name': string;
        'react/forbid-component-props': string;
        'react/forbid-dom-props': string;
        'react/forbid-elements': string;
        'react/forbid-prop-types': (string | {
            forbid: string[];
        })[];
        'react/function-component-definition': (string | {
            namedComponents: string;
            unnamedComponents: string;
        })[];
        'react/forbid-foreign-prop-types': string;
        'react/no-access-state-in-setstate': string;
        'react/no-adjacent-inline-elements': string;
        'react/no-array-index-key': string;
        'react/no-children-prop': string;
        'react/no-danger': string;
        'react/no-danger-with-children': string;
        'react/no-deprecated': string;
        'react/no-did-mount-set-state': string;
        'react/no-did-update-set-state': string;
        'react/no-direct-mutation-state': string;
        'react/no-find-dom-node': string;
        'react/no-is-mounted': string;
        'react/no-multi-comp': string;
        'react/no-redundant-should-component-update': string;
        'react/no-render-return-value': string;
        'react/no-set-state': string;
        'react/no-typos': string;
        'react/no-string-refs': string;
        'react/no-this-in-sfc': string;
        'react/no-unescaped-entities': string;
        'react/no-unknown-property': string;
        'react/no-unsafe': string;
        'react/no-unused-prop-types': string;
        'react/no-unused-state': string;
        'react/no-will-update-set-state': string;
        'react/prefer-es6-class': string;
        'react/prefer-read-only-props': string;
        'react/prefer-stateless-function': (string | {
            ignorePureComponents: boolean;
        })[];
        'react/prop-types': string;
        'react/react-in-jsx-scope': string;
        'react/require-default-props': string;
        'react/require-optimization': string;
        'react/require-render-return': string;
        'react/self-closing-comp': string;
        'react/sort-comp': string;
        'react/sort-prop-types': (string | {
            ignoreCase: boolean;
        })[];
        'react/sort-prop-object': string;
        'react/style-prop-object': string;
        'react/state-in-constructor': string[];
        'react/static-property-placement': string;
        'react/void-dom-elements-no-children': string;
        'react/jsx-boolean-value': string;
        'react/jsx-child-element-spacing': string;
        'react/jsx-closing-bracket-location': string;
        'react/jsx-closing-tag-location': string;
        'react/jsx-curly-brace-presence': string[];
        'react/jsx-curly-spacing': string;
        'react/jsx-curly-newline': string[];
        'react/jsx-equals-spacing': string;
        'react/jsx-filename-extension': string;
        'react/jsx-first-prop-new-line': string[];
        'react/jsx-fragments': string[];
        'react/jsx-handler-names': string;
        'react/jsx-indent': string[];
        'react/jsx-indent-props': string[];
        'react/jsx-key': string;
        'react/jsx-max-depth': string;
        'react/jsx-max-props-per-line': string;
        'react/jsx-no-bind': string;
        'react/jsx-no-comment-textnodes': string;
        'react/jsx-no-duplicate-props': string;
        'react/jsx-no-literals': string;
        'react/jsx-no-script-url': string;
        'react/jsx-no-target-blank': string;
        'react/jsx-no-undef': string;
        'react/jsx-no-useless-fragment': string;
        'react/jsx-one-expression-per-line': string;
        'react/jsx-pascal-case': (string | {
            allowAllCaps: boolean;
            ignore: string[];
        })[];
        'react/jsx-props-no-multi-spaces': string;
        'react/jsx-props-no-spreading': string;
        'react/jsx-sort-props': string;
        'react/jsx-tag-spacing': (string | {
            closingSlash: string;
            beforeSelfClosing: string;
            afterOpening: string;
        })[];
        'react/jsx-uses-react': string;
        'react/jsx-uses-vars': string;
        'react/jsx-wrap-multilines': string;
        'react/sort-default-props': (string | {
            ignoreCase: boolean;
        })[];
    };
}
declare module "src/legacy/node-base" {
    export namespace languageOptions {
        namespace globals {
            const __filename: string;
            const __dirname: string;
            const console: string;
            const setImmediate: string;
            const process: string;
            const Buffer: string;
        }
    }
    export namespace plugins {
        export { node };
    }
    export const rules: {
        'node/handle-callback-err': string;
        'node/no-callback-literal': string;
        'node/no-exports-assign': string;
        'node/no-extraneous-import': string;
        'node/no-extraneous-require': string;
        'node/no-missing-import': string;
        'node/no-missing-require': string;
        'node/no-new-require': string;
        'node/no-path-concat': string;
        'node/no-process-exit': string;
        'node/no-unpublished-bin': string;
        'node/no-unpublished-import': string;
        'node/no-unpublished-require': string;
        'node/no-unsupported-features/es-builtins': string;
        'node/no-unsupported-features/es-syntax': (string | {
            ignores: string[];
        })[];
        'node/no-unsupported-features/node-builtins': string;
        'node/process-exit-as-throw': string;
        'node/shebang': string;
        'node/no-deprecated-api': string;
        'node/callback-return': (string | string[])[];
        'node/exports-style': string[];
        'node/file-extension-in-import': string;
        'node/global-require': string;
        'node/no-mixed-requires': string;
        'node/no-process-env': string;
        'node/no-restricted-import': string;
        'node/no-restricted-require': string;
        'node/no-sync': string;
        'node/prefer-global/buffer': string;
        'node/prefer-global/console': string;
        'node/prefer-global/process': string;
        'node/prefer-global/text-decoder': string;
        'node/prefer-global/text-encoder': string;
        'node/prefer-global/url-search-params': string;
        'node/prefer-global/url': string;
        'node/prefer-promises/dns': string;
        'node/prefer-promises/fs': string;
    };
}
declare module "src/legacy/testing-plugin-chai-expect" {
    export const files: string[];
    export namespace languageOptions {
        namespace globals {
            const chai: string;
            const expect: string;
        }
    }
    export const plugins: {
        'chai-expect': any;
    };
    export const rules: {
        'chai-expect/no-inner-compare': string;
        'chai-expect/no-inner-literal': string;
        'chai-expect/missing-assertion': string;
        'chai-expect/terminating-properties': string;
        'no-unused-expressions': string;
    };
}
declare module "src/legacy/testing-plugin-mocha" {
    export const files: string[];
    export namespace languageOptions {
        namespace globals {
            const after: string;
            const afterEach: string;
            const beforeEach: string;
            const describe: string;
            const it: string;
        }
    }
    export namespace plugins {
        export { mocha };
    }
    export const rules: {
        'mocha/handle-done-callback': string;
        'mocha/max-top-level-suites': string;
        'mocha/no-async-describe': string;
        'mocha/no-exclusive-tests': string;
        'mocha/no-global-tests': string;
        'mocha/no-hooks': string;
        'mocha/no-hooks-for-single-case': string;
        'mocha/no-identical-title': string;
        'mocha/no-mocha-arrows': string;
        'mocha/no-nested-tests': string;
        'mocha/no-pending-tests': string;
        'mocha/no-return-and-callback': string;
        'mocha/no-return-from-async': string;
        'mocha/no-setup-in-describe': string;
        'mocha/no-sibling-hooks': string;
        'mocha/no-skipped-tests': string;
        'mocha/no-synchronous-tests': string;
        'mocha/no-top-level-hooks': string;
        'mocha/prefer-arrow-callback': string;
        'mocha/valid-suite-description': string;
        'mocha/valid-test-description': string;
        'prefer-arrow-callback': string;
        'node/no-sync': string;
        'security/detect-non-literal-fs-filename': string;
        'filenames/match-regex': string;
    };
}
declare module "src/recommended/bluedrop-library" {
    export const rules: {
        'unicorn/prefer-module': string;
        'security/detect-non-literal-fs-filename': string;
        'unicorn/no-array-reduce': string;
        'security/detect-object-injection': string;
    };
}
declare module "src/recommended/plugin-eslint-comments" {
    export const rules: any;
    export const plugins: {
        'eslint-comments': any;
    };
}
declare module "src/recommended/plugin-filenames" {
    export namespace plugins {
        export { filenames };
    }
    export const rules: {
        'filenames/match-regex': (string | boolean)[];
        'filenames/match-exported': string;
        'filenames/no-index': string;
    };
}
declare module "src/recommended/plugin-import" {
    export const rules: any;
    export namespace plugins {
        export { imp0rt as import };
    }
}
declare module "src/recommended/plugin-jsdoc" {
    export const rules: any;
    export namespace plugins {
        export { jsdoc };
    }
}
declare module "src/recommended/plugin-n-module" {
    const globals: any;
    export const rules: any;
    export namespace languageOptions {
        export { globals };
    }
    export namespace plugins {
        export { n };
    }
    export {};
}
declare module "src/recommended/plugin-node-module" {
    const globals: any;
    export const rules: any;
    export namespace languageOptions {
        export { globals };
    }
    export namespace plugins {
        export { node };
    }
    export {};
}
declare module "src/recommended/plugin-promise" {
    export const rules: any;
    export namespace plugins {
        export { promise };
    }
}
declare module "src/recommended/plugin-security" {
    export const rules: {
        [k: string]: any;
    };
    export namespace plugins {
        export { security };
    }
}
declare module "src/recommended/plugin-unicorn" {
    export const rules: any;
    export namespace languageOptions {
        const ecmaVersion: string;
        const sourceType: string;
    }
    export namespace plugins {
        export { unicorn };
    }
}
