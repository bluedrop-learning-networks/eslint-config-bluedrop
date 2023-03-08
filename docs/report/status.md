## Summary
```sh
┌─────────┬────────┬─────────────────────┐
│ (index) │ number │       of-what       │
├─────────┼────────┼─────────────────────┤
│    0    │  751   │    'total rules'    │
│    1    │   6    │ 'deprecated rules'  │
│    2    │   67   │ 'overlapping rules' │
│    3    │   34   │   'unused rules'    │
└─────────┴────────┴─────────────────────┘
```
------
## Overlap Overview
```sh
                                LAYERS  |  RULES                                         
                    .................. ... ..................                            
 legacy/common-ruleset-ecmascript-2015 -|- arrow-parens                                  
 legacy/common-ruleset-ecmascript-2022 -|.                                               
                    .................. ... ..................                            
 legacy/common-ruleset-ecmascript-2015 -|- sort-imports                                  
legacy/common-ruleset-stylistic-issues -|.                                               
                    .................. ... ..................                            
 legacy/common-ruleset-possible-errors -|- no-console                                    
                   legacy/console-base -|.                                               
                    .................. ... ..................                            
         legacy/common-plugin-security -|- security/detect-child-process                 
        legacy/console-plugin-security -|- security/detect-unsafe-regex                  
           recommended/plugin-security -|.                                               
                    .................. ... ..................                            
         legacy/common-plugin-security -|- security/detect-non-literal-fs-filename       
        legacy/console-plugin-security -|.                                               
           legacy/testing-plugin-mocha -|.                                               
          recommended/bluedrop-library -|.                                               
           recommended/plugin-security -|.                                               
                    .................. ... ..................                            
  legacy/common-ruleset-best-practices -|- class-methods-use-this                        
                  legacy/frontend-base -|- no-invalid-this                               
                    .................. ... ..................                            
        legacy/common-plugin-filenames -|- filenames/match-regex                         
      legacy/frontend-plugin-filenames -|.                                               
           legacy/testing-plugin-mocha -|.                                               
          recommended/plugin-filenames -|.                                               
                    .................. ... ..................                            
        legacy/common-plugin-filenames -|- filenames/match-exported                      
      legacy/frontend-plugin-filenames -|.                                               
          recommended/plugin-filenames -|.                                               
                    .................. ... ..................                            
            legacy/console-plugin-node -|- node/no-process-env                           
                      legacy/node-base -|.                                               
                    .................. ... ..................                            
           legacy/frontend-plugin-node -|- node/no-unsupported-features/es-syntax        
                      legacy/node-base -|.                                               
        recommended/plugin-node-module -|.                                               
                    .................. ... ..................                            
  legacy/common-ruleset-best-practices -|- no-unused-expressions                         
     legacy/testing-plugin-chai-expect -|.                                               
                    .................. ... ..................                            
 legacy/common-ruleset-ecmascript-2015 -|- prefer-arrow-callback                         
           legacy/testing-plugin-mocha -|.                                               
                    .................. ... ..................                            
                      legacy/node-base -|- node/no-sync                                  
           legacy/testing-plugin-mocha -|.                                               
                    .................. ... ..................                            
         legacy/common-plugin-security -|- security/detect-object-injection              
          recommended/bluedrop-library -|.                                               
           recommended/plugin-security -|.                                               
                    .................. ... ..................                            
  legacy/common-plugin-eslint-comments -|- eslint-comments/disable-enable-pair           
    recommended/plugin-eslint-comments -|- eslint-comments/no-aggregating-enable         
                                       .|- eslint-comments/no-duplicate-disable          
                                       .|- eslint-comments/no-unused-enable              
                                       .|- eslint-comments/no-unlimited-disable          
                    .................. ... ..................                            
        legacy/common-plugin-filenames -|- filenames/no-index                            
          recommended/plugin-filenames -|.                                               
                    .................. ... ..................                            
           legacy/common-plugin-import -|- import/no-unresolved                          
             recommended/plugin-import -|- import/named                                  
                                       .|- import/default                                
                                       .|- import/namespace                              
                                       .|- import/export                                 
                                       .|- import/no-named-as-default                    
                                       .|- import/no-named-as-default-member             
                                       .|- import/no-duplicates                          
                    .................. ... ..................                            
            legacy/common-plugin-jsdoc -|- jsdoc/check-examples                          
              recommended/plugin-jsdoc -|- jsdoc/check-types                             
                    .................. ... ..................                            
                      legacy/node-base -|- node/no-exports-assign                        
        recommended/plugin-node-module -|- node/no-extraneous-import                     
                                       .|- node/no-extraneous-require                    
                                       .|- node/no-missing-import                        
                                       .|- node/no-missing-require                       
                                       .|- node/no-unpublished-bin                       
                                       .|- node/no-unpublished-import                    
                                       .|- node/no-unpublished-require                   
                                       .|- node/no-unsupported-features/es-builtins      
                                       .|- node/no-unsupported-features/node-builtins    
                                       .|- node/process-exit-as-throw                    
                                       .|- node/shebang                                  
                                       .|- node/no-deprecated-api                        
                    .................. ... ..................                            
          legacy/common-plugin-promise -|- promise/always-return                         
            recommended/plugin-promise -|- promise/avoid-new                             
                                       .|- promise/catch-or-return                       
                                       .|- promise/no-callback-in-promise                
                                       .|- promise/no-native                             
                                       .|- promise/no-nesting                            
                                       .|- promise/no-new-statics                        
                                       .|- promise/no-promise-in-callback                
                                       .|- promise/no-return-in-finally                  
                                       .|- promise/no-return-wrap                        
                                       .|- promise/param-names                           
                                       .|- promise/valid-params                          
                    .................. ... ..................                            
         legacy/common-plugin-security -|- security/detect-bidi-characters               
           recommended/plugin-security -|- security/detect-buffer-noassert               
                                       .|- security/detect-disable-mustache-escape       
                                       .|- security/detect-eval-with-expression          
                                       .|- security/detect-new-buffer                    
                                       .|- security/detect-no-csrf-before-method-override
                                       .|- security/detect-non-literal-regexp            
                                       .|- security/detect-non-literal-require           
                                       .|- security/detect-possible-timing-attacks       
                                       .|- security/detect-pseudoRandomBytes             
```
## Overlapping Rules by Layer
### `legacy/common-ruleset-ecmascript-2015`
```sh
Rule: arrow-parens
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-ecmascript-2015' │ '"error"' │
│    1    │ 'legacy/common-ruleset-ecmascript-2022' │  '"off"'  │
└─────────┴─────────────────────────────────────────┴───────────┘
Rule: sort-imports
┌─────────┬──────────────────────────────────────────┬───────────┐
│ (index) │                  layer                   │  setting  │
├─────────┼──────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-ecmascript-2015'  │ '"error"' │
│    1    │ 'legacy/common-ruleset-stylistic-issues' │  '"off"'  │
└─────────┴──────────────────────────────────────────┴───────────┘
Rule: prefer-arrow-callback
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-ecmascript-2015' │ '"error"' │
│    1    │      'legacy/testing-plugin-mocha'      │  '"off"'  │
└─────────┴─────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-ruleset-ecmascript-2022`
```sh
Rule: arrow-parens
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-ecmascript-2022' │  '"off"'  │
│    1    │ 'legacy/common-ruleset-ecmascript-2015' │ '"error"' │
└─────────┴─────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-ruleset-stylistic-issues`
```sh
Rule: sort-imports
┌─────────┬──────────────────────────────────────────┬───────────┐
│ (index) │                  layer                   │  setting  │
├─────────┼──────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-stylistic-issues' │  '"off"'  │
│    1    │ 'legacy/common-ruleset-ecmascript-2015'  │ '"error"' │
└─────────┴──────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-ruleset-possible-errors`
```sh
Rule: no-console
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-possible-errors' │ '"error"' │
│    1    │          'legacy/console-base'          │  '"off"'  │
└─────────┴─────────────────────────────────────────┴───────────┘
```
------
### `legacy/console-base`
```sh
Rule: no-console
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │          'legacy/console-base'          │  '"off"'  │
│    1    │ 'legacy/common-ruleset-possible-errors' │ '"error"' │
└─────────┴─────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-security`
```sh
Rule: security/detect-child-process
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security'  │ '"error"' │
│    1    │ 'legacy/console-plugin-security' │  '"off"'  │
│    2    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-fs-filename
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security'  │ '"error"' │
│    1    │ 'legacy/console-plugin-security' │  '"off"'  │
│    2    │  'legacy/testing-plugin-mocha'   │  '"off"'  │
│    3    │  'recommended/bluedrop-library'  │  '"off"'  │
│    4    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-unsafe-regex
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security'  │ '"error"' │
│    1    │ 'legacy/console-plugin-security' │  '"off"'  │
│    2    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-object-injection
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │  '"off"'  │
│    1    │ 'recommended/bluedrop-library'  │  '"off"'  │
│    2    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-bidi-characters
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-buffer-noassert
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-disable-mustache-escape
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-eval-with-expression
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-new-buffer
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │  '"off"'  │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-no-csrf-before-method-override
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-regexp
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-require
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-possible-timing-attacks
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-pseudoRandomBytes
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-security' │ '"error"' │
│    1    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
```
------
### `legacy/console-plugin-security`
```sh
Rule: security/detect-child-process
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/console-plugin-security' │  '"off"'  │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-fs-filename
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/console-plugin-security' │  '"off"'  │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │  'legacy/testing-plugin-mocha'   │  '"off"'  │
│    3    │  'recommended/bluedrop-library'  │  '"off"'  │
│    4    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-unsafe-regex
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'legacy/console-plugin-security' │  '"off"'  │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
```
------
### `recommended/plugin-security`
```sh
Rule: security/detect-child-process
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'   │ '"error"' │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │ 'legacy/console-plugin-security' │  '"off"'  │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-fs-filename
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'   │ '"error"' │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │ 'legacy/console-plugin-security' │  '"off"'  │
│    3    │  'legacy/testing-plugin-mocha'   │  '"off"'  │
│    4    │  'recommended/bluedrop-library'  │  '"off"'  │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-unsafe-regex
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'   │ '"error"' │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │ 'legacy/console-plugin-security' │  '"off"'  │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-object-injection
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │  '"off"'  │
│    2    │ 'recommended/bluedrop-library'  │  '"off"'  │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-bidi-characters
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-buffer-noassert
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-disable-mustache-escape
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-eval-with-expression
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-new-buffer
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │  '"off"'  │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-no-csrf-before-method-override
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-regexp
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-non-literal-require
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-possible-timing-attacks
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
Rule: security/detect-pseudoRandomBytes
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-security'  │ '"error"' │
│    1    │ 'legacy/common-plugin-security' │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
```
------
### `legacy/testing-plugin-mocha`
```sh
Rule: security/detect-non-literal-fs-filename
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │  'legacy/testing-plugin-mocha'   │  '"off"'  │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │ 'legacy/console-plugin-security' │  '"off"'  │
│    3    │  'recommended/bluedrop-library'  │  '"off"'  │
│    4    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: filenames/match-regex
┌─────────┬────────────────────────────────────┬──────────────────────────────────┐
│ (index) │               layer                │             setting              │
├─────────┼────────────────────────────────────┼──────────────────────────────────┤
│    0    │   'legacy/testing-plugin-mocha'    │             '"off"'              │
│    1    │  'legacy/common-plugin-filenames'  │ '["error","^[a-z0-9.-]+$",true]' │
│    2    │ 'legacy/frontend-plugin-filenames' │             '"off"'              │
│    3    │   'recommended/plugin-filenames'   │ '["error","^[a-z0-9.-]+$",true]' │
└─────────┴────────────────────────────────────┴──────────────────────────────────┘
Rule: prefer-arrow-callback
┌─────────┬─────────────────────────────────────────┬───────────┐
│ (index) │                  layer                  │  setting  │
├─────────┼─────────────────────────────────────────┼───────────┤
│    0    │      'legacy/testing-plugin-mocha'      │  '"off"'  │
│    1    │ 'legacy/common-ruleset-ecmascript-2015' │ '"error"' │
└─────────┴─────────────────────────────────────────┴───────────┘
Rule: node/no-sync
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/testing-plugin-mocha' │  '"off"'  │
│    1    │      'legacy/node-base'       │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
```
------
### `recommended/bluedrop-library`
```sh
Rule: security/detect-non-literal-fs-filename
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │  'recommended/bluedrop-library'  │  '"off"'  │
│    1    │ 'legacy/common-plugin-security'  │ '"error"' │
│    2    │ 'legacy/console-plugin-security' │  '"off"'  │
│    3    │  'legacy/testing-plugin-mocha'   │  '"off"'  │
│    4    │  'recommended/plugin-security'   │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: security/detect-object-injection
┌─────────┬─────────────────────────────────┬───────────┐
│ (index) │              layer              │  setting  │
├─────────┼─────────────────────────────────┼───────────┤
│    0    │ 'recommended/bluedrop-library'  │  '"off"'  │
│    1    │ 'legacy/common-plugin-security' │  '"off"'  │
│    2    │  'recommended/plugin-security'  │ '"error"' │
└─────────┴─────────────────────────────────┴───────────┘
```
------
### `legacy/common-ruleset-best-practices`
```sh
Rule: class-methods-use-this
┌─────────┬────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ (index) │                 layer                  │                                                                                                           setting                                                                                                           │
├─────────┼────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│    0    │ 'legacy/common-ruleset-best-practices' │                                                                                                          '"error"'                                                                                                          │
│    1    │         'legacy/frontend-base'         │ '["error",{"exceptMethods":["componentDidCatch","componentDidMount","componentDidUpdate","componentWillMount","componentWillReceiveProps","componentWillUnmount","componentWillUpdate","render","shouldComponentUpdate"]}]' │
└─────────┴────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Rule: no-invalid-this
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-best-practices' │ '"error"' │
│    1    │         'legacy/frontend-base'         │  '"off"'  │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: no-unused-expressions
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-ruleset-best-practices' │ '"error"' │
│    1    │  'legacy/testing-plugin-chai-expect'   │  '"off"'  │
└─────────┴────────────────────────────────────────┴───────────┘
```
------
### `legacy/frontend-base`
```sh
Rule: class-methods-use-this
┌─────────┬────────────────────────────────────────┬─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ (index) │                 layer                  │                                                                                                           setting                                                                                                           │
├─────────┼────────────────────────────────────────┼─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┤
│    0    │         'legacy/frontend-base'         │ '["error",{"exceptMethods":["componentDidCatch","componentDidMount","componentDidUpdate","componentWillMount","componentWillReceiveProps","componentWillUnmount","componentWillUpdate","render","shouldComponentUpdate"]}]' │
│    1    │ 'legacy/common-ruleset-best-practices' │                                                                                                          '"error"'                                                                                                          │
└─────────┴────────────────────────────────────────┴─────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
Rule: no-invalid-this
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │         'legacy/frontend-base'         │  '"off"'  │
│    1    │ 'legacy/common-ruleset-best-practices' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-filenames`
```sh
Rule: filenames/match-regex
┌─────────┬────────────────────────────────────┬──────────────────────────────────┐
│ (index) │               layer                │             setting              │
├─────────┼────────────────────────────────────┼──────────────────────────────────┤
│    0    │  'legacy/common-plugin-filenames'  │ '["error","^[a-z0-9.-]+$",true]' │
│    1    │ 'legacy/frontend-plugin-filenames' │             '"off"'              │
│    2    │   'legacy/testing-plugin-mocha'    │             '"off"'              │
│    3    │   'recommended/plugin-filenames'   │ '["error","^[a-z0-9.-]+$",true]' │
└─────────┴────────────────────────────────────┴──────────────────────────────────┘
Rule: filenames/match-exported
┌─────────┬────────────────────────────────────┬───────────┐
│ (index) │               layer                │  setting  │
├─────────┼────────────────────────────────────┼───────────┤
│    0    │  'legacy/common-plugin-filenames'  │  '"off"'  │
│    1    │ 'legacy/frontend-plugin-filenames' │ '"error"' │
│    2    │   'recommended/plugin-filenames'   │ '"error"' │
└─────────┴────────────────────────────────────┴───────────┘
Rule: filenames/no-index
┌─────────┬──────────────────────────────────┬─────────┐
│ (index) │              layer               │ setting │
├─────────┼──────────────────────────────────┼─────────┤
│    0    │ 'legacy/common-plugin-filenames' │ '"off"' │
│    1    │  'recommended/plugin-filenames'  │ '"off"' │
└─────────┴──────────────────────────────────┴─────────┘
```
------
### `legacy/frontend-plugin-filenames`
```sh
Rule: filenames/match-regex
┌─────────┬────────────────────────────────────┬──────────────────────────────────┐
│ (index) │               layer                │             setting              │
├─────────┼────────────────────────────────────┼──────────────────────────────────┤
│    0    │ 'legacy/frontend-plugin-filenames' │             '"off"'              │
│    1    │  'legacy/common-plugin-filenames'  │ '["error","^[a-z0-9.-]+$",true]' │
│    2    │   'legacy/testing-plugin-mocha'    │             '"off"'              │
│    3    │   'recommended/plugin-filenames'   │ '["error","^[a-z0-9.-]+$",true]' │
└─────────┴────────────────────────────────────┴──────────────────────────────────┘
Rule: filenames/match-exported
┌─────────┬────────────────────────────────────┬───────────┐
│ (index) │               layer                │  setting  │
├─────────┼────────────────────────────────────┼───────────┤
│    0    │ 'legacy/frontend-plugin-filenames' │ '"error"' │
│    1    │  'legacy/common-plugin-filenames'  │  '"off"'  │
│    2    │   'recommended/plugin-filenames'   │ '"error"' │
└─────────┴────────────────────────────────────┴───────────┘
```
------
### `recommended/plugin-filenames`
```sh
Rule: filenames/match-regex
┌─────────┬────────────────────────────────────┬──────────────────────────────────┐
│ (index) │               layer                │             setting              │
├─────────┼────────────────────────────────────┼──────────────────────────────────┤
│    0    │   'recommended/plugin-filenames'   │ '["error","^[a-z0-9.-]+$",true]' │
│    1    │  'legacy/common-plugin-filenames'  │ '["error","^[a-z0-9.-]+$",true]' │
│    2    │ 'legacy/frontend-plugin-filenames' │             '"off"'              │
│    3    │   'legacy/testing-plugin-mocha'    │             '"off"'              │
└─────────┴────────────────────────────────────┴──────────────────────────────────┘
Rule: filenames/match-exported
┌─────────┬────────────────────────────────────┬───────────┐
│ (index) │               layer                │  setting  │
├─────────┼────────────────────────────────────┼───────────┤
│    0    │   'recommended/plugin-filenames'   │ '"error"' │
│    1    │  'legacy/common-plugin-filenames'  │  '"off"'  │
│    2    │ 'legacy/frontend-plugin-filenames' │ '"error"' │
└─────────┴────────────────────────────────────┴───────────┘
Rule: filenames/no-index
┌─────────┬──────────────────────────────────┬─────────┐
│ (index) │              layer               │ setting │
├─────────┼──────────────────────────────────┼─────────┤
│    0    │  'recommended/plugin-filenames'  │ '"off"' │
│    1    │ 'legacy/common-plugin-filenames' │ '"off"' │
└─────────┴──────────────────────────────────┴─────────┘
```
------
### `legacy/console-plugin-node`
```sh
Rule: node/no-process-env
┌─────────┬──────────────────────────────┬───────────┐
│ (index) │            layer             │  setting  │
├─────────┼──────────────────────────────┼───────────┤
│    0    │ 'legacy/console-plugin-node' │  '"off"'  │
│    1    │      'legacy/node-base'      │ '"error"' │
└─────────┴──────────────────────────────┴───────────┘
```
------
### `legacy/node-base`
```sh
Rule: node/no-process-env
┌─────────┬──────────────────────────────┬───────────┐
│ (index) │            layer             │  setting  │
├─────────┼──────────────────────────────┼───────────┤
│    0    │      'legacy/node-base'      │ '"error"' │
│    1    │ 'legacy/console-plugin-node' │  '"off"'  │
└─────────┴──────────────────────────────┴───────────┘
Rule: node/no-unsupported-features/es-syntax
┌─────────┬──────────────────────────────────┬─────────────────────────────────────────────────────┐
│ (index) │              layer               │                       setting                       │
├─────────┼──────────────────────────────────┼─────────────────────────────────────────────────────┤
│    0    │        'legacy/node-base'        │ '["error",{"ignores":["modules","dynamicImport"]}]' │
│    1    │  'legacy/frontend-plugin-node'   │ '["error",{"ignores":["modules","dynamicImport"]}]' │
│    2    │ 'recommended/plugin-node-module' │         '["error",{"ignores":["modules"]}]'         │
└─────────┴──────────────────────────────────┴─────────────────────────────────────────────────────┘
Rule: node/no-sync
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │      'legacy/node-base'       │ '"error"' │
│    1    │ 'legacy/testing-plugin-mocha' │  '"off"'  │
└─────────┴───────────────────────────────┴───────────┘
Rule: node/no-exports-assign
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-extraneous-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-extraneous-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-missing-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-missing-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-bin
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │  '"off"'  │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │  '"off"'  │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unsupported-features/es-builtins
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unsupported-features/node-builtins
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/process-exit-as-throw
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/shebang
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-deprecated-api
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │        'legacy/node-base'        │ '"error"' │
│    1    │ 'recommended/plugin-node-module' │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
```
------
### `legacy/frontend-plugin-node`
```sh
Rule: node/no-unsupported-features/es-syntax
┌─────────┬──────────────────────────────────┬─────────────────────────────────────────────────────┐
│ (index) │              layer               │                       setting                       │
├─────────┼──────────────────────────────────┼─────────────────────────────────────────────────────┤
│    0    │  'legacy/frontend-plugin-node'   │ '["error",{"ignores":["modules","dynamicImport"]}]' │
│    1    │        'legacy/node-base'        │ '["error",{"ignores":["modules","dynamicImport"]}]' │
│    2    │ 'recommended/plugin-node-module' │         '["error",{"ignores":["modules"]}]'         │
└─────────┴──────────────────────────────────┴─────────────────────────────────────────────────────┘
```
------
### `recommended/plugin-node-module`
```sh
Rule: node/no-unsupported-features/es-syntax
┌─────────┬──────────────────────────────────┬─────────────────────────────────────────────────────┐
│ (index) │              layer               │                       setting                       │
├─────────┼──────────────────────────────────┼─────────────────────────────────────────────────────┤
│    0    │ 'recommended/plugin-node-module' │         '["error",{"ignores":["modules"]}]'         │
│    1    │  'legacy/frontend-plugin-node'   │ '["error",{"ignores":["modules","dynamicImport"]}]' │
│    2    │        'legacy/node-base'        │ '["error",{"ignores":["modules","dynamicImport"]}]' │
└─────────┴──────────────────────────────────┴─────────────────────────────────────────────────────┘
Rule: node/no-exports-assign
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-extraneous-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-extraneous-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-missing-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-missing-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-bin
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-import
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │  '"off"'  │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unpublished-require
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │  '"off"'  │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unsupported-features/es-builtins
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-unsupported-features/node-builtins
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/process-exit-as-throw
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/shebang
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
Rule: node/no-deprecated-api
┌─────────┬──────────────────────────────────┬───────────┐
│ (index) │              layer               │  setting  │
├─────────┼──────────────────────────────────┼───────────┤
│    0    │ 'recommended/plugin-node-module' │ '"error"' │
│    1    │        'legacy/node-base'        │ '"error"' │
└─────────┴──────────────────────────────────┴───────────┘
```
------
### `legacy/testing-plugin-chai-expect`
```sh
Rule: no-unused-expressions
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'legacy/testing-plugin-chai-expect'   │  '"off"'  │
│    1    │ 'legacy/common-ruleset-best-practices' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-eslint-comments`
```sh
Rule: eslint-comments/disable-enable-pair
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
│    1    │  'recommended/plugin-eslint-comments'  │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-aggregating-enable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
│    1    │  'recommended/plugin-eslint-comments'  │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-duplicate-disable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
│    1    │  'recommended/plugin-eslint-comments'  │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-unused-enable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
│    1    │  'recommended/plugin-eslint-comments'  │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-unlimited-disable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
│    1    │  'recommended/plugin-eslint-comments'  │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
```
------
### `recommended/plugin-eslint-comments`
```sh
Rule: eslint-comments/disable-enable-pair
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-eslint-comments'  │ '"error"' │
│    1    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-aggregating-enable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-eslint-comments'  │ '"error"' │
│    1    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-duplicate-disable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-eslint-comments'  │ '"error"' │
│    1    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-unused-enable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-eslint-comments'  │ '"error"' │
│    1    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
Rule: eslint-comments/no-unlimited-disable
┌─────────┬────────────────────────────────────────┬───────────┐
│ (index) │                 layer                  │  setting  │
├─────────┼────────────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-eslint-comments'  │ '"error"' │
│    1    │ 'legacy/common-plugin-eslint-comments' │ '"error"' │
└─────────┴────────────────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-import`
```sh
Rule: import/no-unresolved
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/named
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/default
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/namespace
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/export
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-named-as-default
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"warn"'  │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-named-as-default-member
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"warn"'  │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-duplicates
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-import' │ '"error"' │
│    1    │  'recommended/plugin-import'  │ '"warn"'  │
└─────────┴───────────────────────────────┴───────────┘
```
------
### `recommended/plugin-import`
```sh
Rule: import/no-unresolved
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"error"' │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/named
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"error"' │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/default
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"error"' │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/namespace
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"error"' │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/export
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"error"' │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-named-as-default
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"warn"'  │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-named-as-default-member
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"warn"'  │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
Rule: import/no-duplicates
┌─────────┬───────────────────────────────┬───────────┐
│ (index) │             layer             │  setting  │
├─────────┼───────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-import'  │ '"warn"'  │
│    1    │ 'legacy/common-plugin-import' │ '"error"' │
└─────────┴───────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-jsdoc`
```sh
Rule: jsdoc/check-examples
┌─────────┬──────────────────────────────┬─────────┐
│ (index) │            layer             │ setting │
├─────────┼──────────────────────────────┼─────────┤
│    0    │ 'legacy/common-plugin-jsdoc' │ '"off"' │
│    1    │  'recommended/plugin-jsdoc'  │ '"off"' │
└─────────┴──────────────────────────────┴─────────┘
Rule: jsdoc/check-types
┌─────────┬──────────────────────────────┬───────────┐
│ (index) │            layer             │  setting  │
├─────────┼──────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-jsdoc' │  '"off"'  │
│    1    │  'recommended/plugin-jsdoc'  │ '"error"' │
└─────────┴──────────────────────────────┴───────────┘
```
------
### `recommended/plugin-jsdoc`
```sh
Rule: jsdoc/check-examples
┌─────────┬──────────────────────────────┬─────────┐
│ (index) │            layer             │ setting │
├─────────┼──────────────────────────────┼─────────┤
│    0    │  'recommended/plugin-jsdoc'  │ '"off"' │
│    1    │ 'legacy/common-plugin-jsdoc' │ '"off"' │
└─────────┴──────────────────────────────┴─────────┘
Rule: jsdoc/check-types
┌─────────┬──────────────────────────────┬───────────┐
│ (index) │            layer             │  setting  │
├─────────┼──────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-jsdoc'  │ '"error"' │
│    1    │ 'legacy/common-plugin-jsdoc' │  '"off"'  │
└─────────┴──────────────────────────────┴───────────┘
```
------
### `legacy/common-plugin-promise`
```sh
Rule: promise/always-return
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/avoid-new
┌─────────┬────────────────────────────────┬─────────┐
│ (index) │             layer              │ setting │
├─────────┼────────────────────────────────┼─────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"off"' │
│    1    │  'recommended/plugin-promise'  │ '"off"' │
└─────────┴────────────────────────────────┴─────────┘
Rule: promise/catch-or-return
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-callback-in-promise
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"off"'  │
│    1    │  'recommended/plugin-promise'  │ '"warn"' │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-native
┌─────────┬────────────────────────────────┬─────────┐
│ (index) │             layer              │ setting │
├─────────┼────────────────────────────────┼─────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"off"' │
│    1    │  'recommended/plugin-promise'  │ '"off"' │
└─────────┴────────────────────────────────┴─────────┘
Rule: promise/no-nesting
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"off"'  │
│    1    │  'recommended/plugin-promise'  │ '"warn"' │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-new-statics
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-promise-in-callback
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"off"'  │
│    1    │  'recommended/plugin-promise'  │ '"warn"' │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-return-in-finally
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"warn"'  │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-return-wrap
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/param-names
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/valid-params
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │ 'legacy/common-plugin-promise' │ '"error"' │
│    1    │  'recommended/plugin-promise'  │ '"warn"'  │
└─────────┴────────────────────────────────┴───────────┘
```
------
### `recommended/plugin-promise`
```sh
Rule: promise/always-return
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"error"' │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/avoid-new
┌─────────┬────────────────────────────────┬─────────┐
│ (index) │             layer              │ setting │
├─────────┼────────────────────────────────┼─────────┤
│    0    │  'recommended/plugin-promise'  │ '"off"' │
│    1    │ 'legacy/common-plugin-promise' │ '"off"' │
└─────────┴────────────────────────────────┴─────────┘
Rule: promise/catch-or-return
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"error"' │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-callback-in-promise
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │  'recommended/plugin-promise'  │ '"warn"' │
│    1    │ 'legacy/common-plugin-promise' │ '"off"'  │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-native
┌─────────┬────────────────────────────────┬─────────┐
│ (index) │             layer              │ setting │
├─────────┼────────────────────────────────┼─────────┤
│    0    │  'recommended/plugin-promise'  │ '"off"' │
│    1    │ 'legacy/common-plugin-promise' │ '"off"' │
└─────────┴────────────────────────────────┴─────────┘
Rule: promise/no-nesting
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │  'recommended/plugin-promise'  │ '"warn"' │
│    1    │ 'legacy/common-plugin-promise' │ '"off"'  │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-new-statics
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"error"' │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-promise-in-callback
┌─────────┬────────────────────────────────┬──────────┐
│ (index) │             layer              │ setting  │
├─────────┼────────────────────────────────┼──────────┤
│    0    │  'recommended/plugin-promise'  │ '"warn"' │
│    1    │ 'legacy/common-plugin-promise' │ '"off"'  │
└─────────┴────────────────────────────────┴──────────┘
Rule: promise/no-return-in-finally
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"warn"'  │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/no-return-wrap
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"error"' │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/param-names
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"error"' │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
Rule: promise/valid-params
┌─────────┬────────────────────────────────┬───────────┐
│ (index) │             layer              │  setting  │
├─────────┼────────────────────────────────┼───────────┤
│    0    │  'recommended/plugin-promise'  │ '"warn"'  │
│    1    │ 'legacy/common-plugin-promise' │ '"error"' │
└─────────┴────────────────────────────────┴───────────┘
```
------
## Layer Overview
```sh

X ----> rule is set/unset in multiple layers
  + --> rule is enabled in this layer
  - --> rule is disabled in this layer
 X + LAYER                                  RULE                                                  
X + legacy/common-plugin-eslint-comments   eslint-comments/disable-enable-pair                   
X + legacy/common-plugin-eslint-comments   eslint-comments/no-aggregating-enable                 
X + legacy/common-plugin-eslint-comments   eslint-comments/no-duplicate-disable                  
  + legacy/common-plugin-eslint-comments   eslint-comments/no-unused-disable                     
X + legacy/common-plugin-eslint-comments   eslint-comments/no-unused-enable                      
X + legacy/common-plugin-eslint-comments   eslint-comments/no-unlimited-disable                  
  - legacy/common-plugin-eslint-comments   eslint-comments/no-restricted-disable                 
  + legacy/common-plugin-eslint-comments   eslint-comments/no-use                                
  - legacy/common-plugin-eslint-comments   eslint-comments/require-description                   
X + legacy/common-plugin-filenames         filenames/match-regex                                 
X - legacy/common-plugin-filenames         filenames/match-exported                              
X - legacy/common-plugin-filenames         filenames/no-index                                    
X + legacy/common-plugin-import            import/no-unresolved                                  
X + legacy/common-plugin-import            import/named                                          
X + legacy/common-plugin-import            import/default                                        
X + legacy/common-plugin-import            import/namespace                                      
  - legacy/common-plugin-import            import/no-restricted-paths                            
  + legacy/common-plugin-import            import/no-absolute-path                               
  - legacy/common-plugin-import            import/no-dynamic-require                             
  - legacy/common-plugin-import            import/no-internal-modules                            
  + legacy/common-plugin-import            import/no-webpack-loader-syntax                       
  + legacy/common-plugin-import            import/no-self-import                                 
  + legacy/common-plugin-import            import/no-cycle                                       
  + legacy/common-plugin-import            import/no-useless-path-segments                       
  - legacy/common-plugin-import            import/no-relative-parent-imports                     
  + legacy/common-plugin-import            import/no-unused-modules                              
X + legacy/common-plugin-import            import/export                                         
X + legacy/common-plugin-import            import/no-named-as-default                            
X + legacy/common-plugin-import            import/no-named-as-default-member                     
  + legacy/common-plugin-import            import/no-deprecated                                  
  + legacy/common-plugin-import            import/no-extraneous-dependencies                     
  + legacy/common-plugin-import            import/no-mutable-exports                             
  - legacy/common-plugin-import            import/unambiguous                                    
  - legacy/common-plugin-import            import/no-commonjs                                    
  - legacy/common-plugin-import            import/no-amd                                         
  - legacy/common-plugin-import            import/no-nodejs-modules                              
  + legacy/common-plugin-import            import/first                                          
  - legacy/common-plugin-import            import/exports-last                                   
X + legacy/common-plugin-import            import/no-duplicates                                  
  - legacy/common-plugin-import            import/no-namespace                                   
  + legacy/common-plugin-import            import/extensions                                     
  + legacy/common-plugin-import            import/order                                          
  + legacy/common-plugin-import            import/newline-after-import                           
  - legacy/common-plugin-import            import/prefer-default-export                          
  - legacy/common-plugin-import            import/max-dependencies                               
  + legacy/common-plugin-import            import/no-unassigned-import                           
  + legacy/common-plugin-import            import/no-named-default                               
  - legacy/common-plugin-import            import/no-default-export                              
  - legacy/common-plugin-import            import/no-named-export                                
  - legacy/common-plugin-import            import/no-anonymous-default-export                    
  - legacy/common-plugin-import            import/group-exports                                  
  + legacy/common-plugin-import            import/dynamic-import-chunkname                       
X - legacy/common-plugin-jsdoc             jsdoc/check-examples                                  
X - legacy/common-plugin-jsdoc             jsdoc/check-types                                     
X + legacy/common-plugin-promise           promise/always-return                                 
X - legacy/common-plugin-promise           promise/avoid-new                                     
X + legacy/common-plugin-promise           promise/catch-or-return                               
X - legacy/common-plugin-promise           promise/no-callback-in-promise                        
X - legacy/common-plugin-promise           promise/no-native                                     
X - legacy/common-plugin-promise           promise/no-nesting                                    
X + legacy/common-plugin-promise           promise/no-new-statics                                
X - legacy/common-plugin-promise           promise/no-promise-in-callback                        
X + legacy/common-plugin-promise           promise/no-return-in-finally                          
X + legacy/common-plugin-promise           promise/no-return-wrap                                
X + legacy/common-plugin-promise           promise/param-names                                   
X + legacy/common-plugin-promise           promise/valid-params                                  
X + legacy/common-plugin-security          security/detect-bidi-characters                       
X + legacy/common-plugin-security          security/detect-buffer-noassert                       
X + legacy/common-plugin-security          security/detect-child-process                         
X + legacy/common-plugin-security          security/detect-disable-mustache-escape               
X + legacy/common-plugin-security          security/detect-eval-with-expression                  
X - legacy/common-plugin-security          security/detect-new-buffer                            
X + legacy/common-plugin-security          security/detect-no-csrf-before-method-override        
X + legacy/common-plugin-security          security/detect-non-literal-fs-filename               
X + legacy/common-plugin-security          security/detect-non-literal-regexp                    
X + legacy/common-plugin-security          security/detect-non-literal-require                   
X - legacy/common-plugin-security          security/detect-object-injection                      
X + legacy/common-plugin-security          security/detect-possible-timing-attacks               
X + legacy/common-plugin-security          security/detect-pseudoRandomBytes                     
X + legacy/common-plugin-security          security/detect-unsafe-regex                          
  - legacy/common-plugin-unicorn           unicorn/better-regex                                  
  - legacy/common-plugin-unicorn           unicorn/catch-error-name                              
  - legacy/common-plugin-unicorn           unicorn/consistent-function-scoping                   
  - legacy/common-plugin-unicorn           unicorn/custom-error-definition                       
  + legacy/common-plugin-unicorn           unicorn/error-message                                 
  - legacy/common-plugin-unicorn           unicorn/escape-case                                   
  + legacy/common-plugin-unicorn           unicorn/expiring-todo-comments                        
  - legacy/common-plugin-unicorn           unicorn/explicit-length-check                         
  - legacy/common-plugin-unicorn           unicorn/filename-case                                 
  + legacy/common-plugin-unicorn           unicorn/import-index                                  
  + legacy/common-plugin-unicorn           unicorn/new-for-builtins                              
  - legacy/common-plugin-unicorn           unicorn/no-abusive-eslint-disable                     
  + legacy/common-plugin-unicorn           unicorn/no-array-instanceof                           
  + legacy/common-plugin-unicorn           unicorn/no-console-spaces                             
  - legacy/common-plugin-unicorn           unicorn/no-fn-reference-in-iterator                   
  + legacy/common-plugin-unicorn           unicorn/no-for-loop                                   
  - legacy/common-plugin-unicorn           unicorn/no-hex-escape                                 
  - legacy/common-plugin-unicorn           unicorn/no-keyword-prefix                             
  + legacy/common-plugin-unicorn           unicorn/no-nested-ternary                             
  - legacy/common-plugin-unicorn           unicorn/no-new-buffer                                 
  - legacy/common-plugin-unicorn           unicorn/no-null                                       
  - legacy/common-plugin-unicorn           unicorn/no-process-exit                               
  - legacy/common-plugin-unicorn           unicorn/no-reduce                                     
  + legacy/common-plugin-unicorn           unicorn/no-unreadable-array-destructuring             
  - legacy/common-plugin-unicorn           unicorn/no-unsafe-regex                               
  - legacy/common-plugin-unicorn           unicorn/no-unused-properties                          
  - legacy/common-plugin-unicorn           unicorn/no-useless-undefined                          
  - legacy/common-plugin-unicorn           unicorn/no-zero-fractions                             
  - legacy/common-plugin-unicorn           unicorn/number-literal-case                           
  + legacy/common-plugin-unicorn           unicorn/prefer-add-event-listener                     
  + legacy/common-plugin-unicorn           unicorn/prefer-dataset                                
  + legacy/common-plugin-unicorn           unicorn/prefer-event-key                              
  + legacy/common-plugin-unicorn           unicorn/prefer-flat-map                               
  + legacy/common-plugin-unicorn           unicorn/prefer-includes                               
  - legacy/common-plugin-unicorn           unicorn/prefer-modern-dom-apis                        
  + legacy/common-plugin-unicorn           unicorn/prefer-negative-index                         
  - legacy/common-plugin-unicorn           unicorn/prefer-node-append                            
  + legacy/common-plugin-unicorn           unicorn/prefer-node-remove                            
  - legacy/common-plugin-unicorn           unicorn/prefer-number-properties                      
  + legacy/common-plugin-unicorn           unicorn/prefer-optional-catch-binding                 
  - legacy/common-plugin-unicorn           unicorn/prefer-query-selector                         
  - legacy/common-plugin-unicorn           unicorn/prefer-reflect-apply                          
  + legacy/common-plugin-unicorn           unicorn/prefer-replace-all                            
  - legacy/common-plugin-unicorn           unicorn/prefer-set-has                                
  + legacy/common-plugin-unicorn           unicorn/prefer-spread                                 
  + legacy/common-plugin-unicorn           unicorn/prefer-starts-ends-with                       
  + legacy/common-plugin-unicorn           unicorn/prefer-trim-start-end                         
  + legacy/common-plugin-unicorn           unicorn/prefer-string-slice                           
  + legacy/common-plugin-unicorn           unicorn/prefer-text-content                           
  - legacy/common-plugin-unicorn           unicorn/prefer-type-error                             
  - legacy/common-plugin-unicorn           unicorn/prevent-abbreviations                         
  - legacy/common-plugin-unicorn           unicorn/string-content                                
  - legacy/common-plugin-unicorn           unicorn/throw-new-error                               
  - legacy/common-ruleset-best-practices   accessor-pairs                                        
  + legacy/common-ruleset-best-practices   array-callback-return                                 
  + legacy/common-ruleset-best-practices   block-scoped-var                                      
X + legacy/common-ruleset-best-practices   class-methods-use-this                                
  - legacy/common-ruleset-best-practices   complexity                                            
  + legacy/common-ruleset-best-practices   consistent-return                                     
  + legacy/common-ruleset-best-practices   curly                                                 
  + legacy/common-ruleset-best-practices   default-case                                          
  + legacy/common-ruleset-best-practices   default-case-last                                     
  + legacy/common-ruleset-best-practices   default-param-last                                    
  + legacy/common-ruleset-best-practices   dot-location                                          
  + legacy/common-ruleset-best-practices   dot-notation                                          
  + legacy/common-ruleset-best-practices   eqeqeq                                                
  + legacy/common-ruleset-best-practices   grouped-accessor-pairs                                
  + legacy/common-ruleset-best-practices   function-call-argument-newline                        
  - legacy/common-ruleset-best-practices   guard-for-in                                          
  + legacy/common-ruleset-best-practices   no-alert                                              
  + legacy/common-ruleset-best-practices   no-caller                                             
  + legacy/common-ruleset-best-practices   no-case-declarations                                  
  + legacy/common-ruleset-best-practices   no-constructor-return                                 
  + legacy/common-ruleset-best-practices   no-div-regex                                          
  + legacy/common-ruleset-best-practices   no-else-return                                        
  - legacy/common-ruleset-best-practices   no-empty-function                                     
  + legacy/common-ruleset-best-practices   no-empty-pattern                                      
  - legacy/common-ruleset-best-practices   no-eq-null                                            
  + legacy/common-ruleset-best-practices   no-eval                                               
  + legacy/common-ruleset-best-practices   no-extend-native                                      
  + legacy/common-ruleset-best-practices   no-extra-bind                                         
  + legacy/common-ruleset-best-practices   no-extra-label                                        
  + legacy/common-ruleset-best-practices   no-fallthrough                                        
  + legacy/common-ruleset-best-practices   no-floating-decimal                                   
  + legacy/common-ruleset-best-practices   no-global-assign                                      
  + legacy/common-ruleset-best-practices   no-implicit-coercion                                  
  + legacy/common-ruleset-best-practices   no-implicit-globals                                   
  + legacy/common-ruleset-best-practices   no-implied-eval                                       
X + legacy/common-ruleset-best-practices   no-invalid-this                                       
  + legacy/common-ruleset-best-practices   no-iterator                                           
  + legacy/common-ruleset-best-practices   no-labels                                             
  + legacy/common-ruleset-best-practices   no-lone-blocks                                        
  + legacy/common-ruleset-best-practices   no-loop-func                                          
  - legacy/common-ruleset-best-practices   no-magic-numbers                                      
  + legacy/common-ruleset-best-practices   no-multi-spaces                                       
  + legacy/common-ruleset-best-practices   no-multi-str                                          
  + legacy/common-ruleset-best-practices   no-misleading-character-class                         
  + legacy/common-ruleset-best-practices   no-new                                                
  + legacy/common-ruleset-best-practices   no-new-func                                           
  + legacy/common-ruleset-best-practices   no-new-wrappers                                       
  + legacy/common-ruleset-best-practices   no-octal                                              
  + legacy/common-ruleset-best-practices   no-octal-escape                                       
  + legacy/common-ruleset-best-practices   no-param-reassign                                     
  + legacy/common-ruleset-best-practices   no-proto                                              
  + legacy/common-ruleset-best-practices   no-redeclare                                          
  + legacy/common-ruleset-best-practices   no-restricted-properties                              
  + legacy/common-ruleset-best-practices   no-return-assign                                      
  + legacy/common-ruleset-best-practices   no-return-await                                       
  + legacy/common-ruleset-best-practices   no-script-url                                         
  + legacy/common-ruleset-best-practices   no-self-assign                                        
  + legacy/common-ruleset-best-practices   no-self-compare                                       
  + legacy/common-ruleset-best-practices   no-sequences                                          
  + legacy/common-ruleset-best-practices   no-throw-literal                                      
  + legacy/common-ruleset-best-practices   no-unmodified-loop-condition                          
X + legacy/common-ruleset-best-practices   no-unused-expressions                                 
  + legacy/common-ruleset-best-practices   no-unused-labels                                      
  + legacy/common-ruleset-best-practices   no-useless-call                                       
  + legacy/common-ruleset-best-practices   no-useless-catch                                      
  + legacy/common-ruleset-best-practices   no-useless-concat                                     
  + legacy/common-ruleset-best-practices   no-useless-escape                                     
  + legacy/common-ruleset-best-practices   no-useless-return                                     
  + legacy/common-ruleset-best-practices   no-void                                               
  + legacy/common-ruleset-best-practices   no-with                                               
  + legacy/common-ruleset-best-practices   prefer-promise-reject-errors                          
  + legacy/common-ruleset-best-practices   prefer-regex-literals                                 
  + legacy/common-ruleset-best-practices   prefer-named-capture-group                            
  + legacy/common-ruleset-best-practices   radix                                                 
  - legacy/common-ruleset-best-practices   require-await                                         
  + legacy/common-ruleset-best-practices   require-unicode-regexp                                
  + legacy/common-ruleset-best-practices   vars-on-top                                           
  + legacy/common-ruleset-best-practices   wrap-iife                                             
  - legacy/common-ruleset-best-practices   yoda                                                  
  - legacy/common-ruleset-ecmascript-2015  arrow-body-style                                      
X + legacy/common-ruleset-ecmascript-2015  arrow-parens                                          
  + legacy/common-ruleset-ecmascript-2015  arrow-spacing                                         
  + legacy/common-ruleset-ecmascript-2015  constructor-super                                     
  + legacy/common-ruleset-ecmascript-2015  generator-star-spacing                                
  + legacy/common-ruleset-ecmascript-2015  no-class-assign                                       
  + legacy/common-ruleset-ecmascript-2015  no-confusing-arrow                                    
  + legacy/common-ruleset-ecmascript-2015  no-const-assign                                       
  + legacy/common-ruleset-ecmascript-2015  no-dupe-class-members                                 
  + legacy/common-ruleset-ecmascript-2015  no-duplicate-imports                                  
  + legacy/common-ruleset-ecmascript-2015  no-new-symbol                                         
  - legacy/common-ruleset-ecmascript-2015  no-restricted-exports                                 
  - legacy/common-ruleset-ecmascript-2015  no-restricted-imports                                 
  + legacy/common-ruleset-ecmascript-2015  no-this-before-super                                  
  + legacy/common-ruleset-ecmascript-2015  no-useless-computed-key                               
  + legacy/common-ruleset-ecmascript-2015  no-useless-constructor                                
  + legacy/common-ruleset-ecmascript-2015  no-useless-rename                                     
  + legacy/common-ruleset-ecmascript-2015  no-var                                                
  + legacy/common-ruleset-ecmascript-2015  object-shorthand                                      
X + legacy/common-ruleset-ecmascript-2015  prefer-arrow-callback                                 
  + legacy/common-ruleset-ecmascript-2015  prefer-const                                          
  - legacy/common-ruleset-ecmascript-2015  prefer-destructuring                                  
  - legacy/common-ruleset-ecmascript-2015  prefer-numeric-literals                               
  + legacy/common-ruleset-ecmascript-2015  prefer-rest-params                                    
  + legacy/common-ruleset-ecmascript-2015  prefer-spread                                         
  + legacy/common-ruleset-ecmascript-2015  prefer-template                                       
  + legacy/common-ruleset-ecmascript-2015  require-yield                                         
  + legacy/common-ruleset-ecmascript-2015  rest-spread-spacing                                   
X + legacy/common-ruleset-ecmascript-2015  sort-imports                                          
  + legacy/common-ruleset-ecmascript-2015  symbol-description                                    
  + legacy/common-ruleset-ecmascript-2015  template-curly-spacing                                
  + legacy/common-ruleset-ecmascript-2015  yield-star-spacing                                    
  + legacy/common-ruleset-ecmascript-2017  promise/prefer-await-to-then                          
  + legacy/common-ruleset-ecmascript-2017  promise/prefer-await-to-callbacks                     
  + legacy/common-ruleset-ecmascript-2018  prefer-object-spread                                  
  - legacy/common-ruleset-ecmascript-2022  logical-assignment-operators                          
X - legacy/common-ruleset-ecmascript-2022  arrow-parens                                          
  + legacy/common-ruleset-possible-errors  no-async-promise-executor                             
  + legacy/common-ruleset-possible-errors  for-direction                                         
  + legacy/common-ruleset-possible-errors  getter-return                                         
  - legacy/common-ruleset-possible-errors  no-await-in-loop                                      
  + legacy/common-ruleset-possible-errors  no-compare-neg-zero                                   
  + legacy/common-ruleset-possible-errors  no-cond-assign                                        
X + legacy/common-ruleset-possible-errors  no-console                                            
  + legacy/common-ruleset-possible-errors  no-constant-condition                                 
  + legacy/common-ruleset-possible-errors  no-control-regex                                      
  + legacy/common-ruleset-possible-errors  no-debugger                                           
  + legacy/common-ruleset-possible-errors  no-dupe-args                                          
  + legacy/common-ruleset-possible-errors  no-dupe-else-if                                       
  + legacy/common-ruleset-possible-errors  no-dupe-keys                                          
  + legacy/common-ruleset-possible-errors  no-duplicate-case                                     
  + legacy/common-ruleset-possible-errors  no-empty                                              
  + legacy/common-ruleset-possible-errors  no-empty-character-class                              
  + legacy/common-ruleset-possible-errors  no-ex-assign                                          
  + legacy/common-ruleset-possible-errors  no-extra-boolean-cast                                 
  + legacy/common-ruleset-possible-errors  no-extra-parens                                       
  + legacy/common-ruleset-possible-errors  no-extra-semi                                         
  + legacy/common-ruleset-possible-errors  no-func-assign                                        
  + legacy/common-ruleset-possible-errors  no-import-assign                                      
  + legacy/common-ruleset-possible-errors  no-inner-declarations                                 
  + legacy/common-ruleset-possible-errors  no-invalid-regexp                                     
  + legacy/common-ruleset-possible-errors  no-irregular-whitespace                               
  + legacy/common-ruleset-possible-errors  no-loss-of-precision                                  
  + legacy/common-ruleset-possible-errors  no-obj-calls                                          
  + legacy/common-ruleset-possible-errors  no-promise-executor-return                            
  - legacy/common-ruleset-possible-errors  no-prototype-builtins                                 
  + legacy/common-ruleset-possible-errors  no-regex-spaces                                       
  + legacy/common-ruleset-possible-errors  no-setter-return                                      
  + legacy/common-ruleset-possible-errors  no-sparse-arrays                                      
  + legacy/common-ruleset-possible-errors  no-template-curly-in-string                           
  + legacy/common-ruleset-possible-errors  no-unexpected-multiline                               
  + legacy/common-ruleset-possible-errors  no-unreachable                                        
  + legacy/common-ruleset-possible-errors  no-unreachable-loop                                   
  + legacy/common-ruleset-possible-errors  no-unsafe-finally                                     
  + legacy/common-ruleset-possible-errors  no-unsafe-negation                                    
  + legacy/common-ruleset-possible-errors  no-useless-backreference                              
  - legacy/common-ruleset-possible-errors  require-atomic-updates                                
  + legacy/common-ruleset-possible-errors  use-isnan                                             
  + legacy/common-ruleset-possible-errors  valid-typeof                                          
  + legacy/common-ruleset-strict           strict                                                
  + legacy/common-ruleset-stylistic-issues array-bracket-newline                                 
  + legacy/common-ruleset-stylistic-issues array-bracket-spacing                                 
  - legacy/common-ruleset-stylistic-issues array-element-newline                                 
  + legacy/common-ruleset-stylistic-issues block-spacing                                         
  + legacy/common-ruleset-stylistic-issues brace-style                                           
  + legacy/common-ruleset-stylistic-issues camelcase                                             
  - legacy/common-ruleset-stylistic-issues capitalized-comments                                  
  + legacy/common-ruleset-stylistic-issues comma-dangle                                          
  + legacy/common-ruleset-stylistic-issues comma-spacing                                         
  + legacy/common-ruleset-stylistic-issues comma-style                                           
  + legacy/common-ruleset-stylistic-issues computed-property-spacing                             
  + legacy/common-ruleset-stylistic-issues consistent-this                                       
  + legacy/common-ruleset-stylistic-issues eol-last                                              
  + legacy/common-ruleset-stylistic-issues func-call-spacing                                     
  - legacy/common-ruleset-stylistic-issues func-name-matching                                    
  - legacy/common-ruleset-stylistic-issues func-names                                            
  - legacy/common-ruleset-stylistic-issues func-style                                            
  - legacy/common-ruleset-stylistic-issues function-paren-newline                                
  - legacy/common-ruleset-stylistic-issues id-length                                             
  - legacy/common-ruleset-stylistic-issues id-match                                              
  + legacy/common-ruleset-stylistic-issues implicit-arrow-linebreak                              
  + legacy/common-ruleset-stylistic-issues indent                                                
  + legacy/common-ruleset-stylistic-issues jsx-quotes                                            
  + legacy/common-ruleset-stylistic-issues key-spacing                                           
  + legacy/common-ruleset-stylistic-issues keyword-spacing                                       
  - legacy/common-ruleset-stylistic-issues line-comment-position                                 
  + legacy/common-ruleset-stylistic-issues linebreak-style                                       
  - legacy/common-ruleset-stylistic-issues lines-around-comment                                  
  + legacy/common-ruleset-stylistic-issues lines-between-class-members                           
  + legacy/common-ruleset-stylistic-issues max-depth                                             
  + legacy/common-ruleset-stylistic-issues max-len                                               
  - legacy/common-ruleset-stylistic-issues max-lines                                             
  - legacy/common-ruleset-stylistic-issues max-nested-callbacks                                  
  - legacy/common-ruleset-stylistic-issues max-params                                            
  - legacy/common-ruleset-stylistic-issues max-classes-per-file                                  
  - legacy/common-ruleset-stylistic-issues max-statements                                        
  - legacy/common-ruleset-stylistic-issues max-statements-per-line                               
  - legacy/common-ruleset-stylistic-issues max-lines-per-function                                
  - legacy/common-ruleset-stylistic-issues multiline-comment-style                               
  - legacy/common-ruleset-stylistic-issues multiline-ternary                                     
  + legacy/common-ruleset-stylistic-issues new-cap                                               
  + legacy/common-ruleset-stylistic-issues new-parens                                            
  + legacy/common-ruleset-stylistic-issues newline-per-chained-call                              
  + legacy/common-ruleset-stylistic-issues no-array-constructor                                  
  + legacy/common-ruleset-stylistic-issues no-bitwise                                            
  - legacy/common-ruleset-stylistic-issues no-continue                                           
  - legacy/common-ruleset-stylistic-issues no-inline-comments                                    
  + legacy/common-ruleset-stylistic-issues no-lonely-if                                          
  - legacy/common-ruleset-stylistic-issues no-mixed-operators                                    
  + legacy/common-ruleset-stylistic-issues no-mixed-spaces-and-tabs                              
  + legacy/common-ruleset-stylistic-issues no-multi-assign                                       
  + legacy/common-ruleset-stylistic-issues no-multiple-empty-lines                               
  + legacy/common-ruleset-stylistic-issues no-negated-condition                                  
  - legacy/common-ruleset-stylistic-issues no-nested-ternary                                     
  + legacy/common-ruleset-stylistic-issues no-new-object                                         
  - legacy/common-ruleset-stylistic-issues no-plusplus                                           
  - legacy/common-ruleset-stylistic-issues no-restricted-syntax                                  
  - legacy/common-ruleset-stylistic-issues no-tabs                                               
  - legacy/common-ruleset-stylistic-issues no-ternary                                            
  + legacy/common-ruleset-stylistic-issues no-trailing-spaces                                    
  - legacy/common-ruleset-stylistic-issues no-underscore-dangle                                  
  + legacy/common-ruleset-stylistic-issues no-unneeded-ternary                                   
  + legacy/common-ruleset-stylistic-issues no-whitespace-before-property                         
  - legacy/common-ruleset-stylistic-issues nonblock-statement-body-position                      
  - legacy/common-ruleset-stylistic-issues object-curly-newline                                  
  + legacy/common-ruleset-stylistic-issues object-curly-spacing                                  
  + legacy/common-ruleset-stylistic-issues object-property-newline                               
  + legacy/common-ruleset-stylistic-issues one-var                                               
  + legacy/common-ruleset-stylistic-issues one-var-declaration-per-line                          
  - legacy/common-ruleset-stylistic-issues operator-assignment                                   
  + legacy/common-ruleset-stylistic-issues operator-linebreak                                    
  + legacy/common-ruleset-stylistic-issues padded-blocks                                         
  + legacy/common-ruleset-stylistic-issues padding-line-between-statements                       
  + legacy/common-ruleset-stylistic-issues prefer-exponentiation-operator                        
  + legacy/common-ruleset-stylistic-issues quote-props                                           
  + legacy/common-ruleset-stylistic-issues quotes                                                
  + legacy/common-ruleset-stylistic-issues semi                                                  
  + legacy/common-ruleset-stylistic-issues semi-spacing                                          
  - legacy/common-ruleset-stylistic-issues semi-style                                            
  - legacy/common-ruleset-stylistic-issues sort-keys                                             
X - legacy/common-ruleset-stylistic-issues sort-imports                                          
  - legacy/common-ruleset-stylistic-issues sort-vars                                             
  + legacy/common-ruleset-stylistic-issues space-before-blocks                                   
  + legacy/common-ruleset-stylistic-issues space-before-function-paren                           
  + legacy/common-ruleset-stylistic-issues space-in-parens                                       
  + legacy/common-ruleset-stylistic-issues space-infix-ops                                       
  + legacy/common-ruleset-stylistic-issues space-unary-ops                                       
  + legacy/common-ruleset-stylistic-issues spaced-comment                                        
  + legacy/common-ruleset-stylistic-issues switch-colon-spacing                                  
  + legacy/common-ruleset-stylistic-issues template-tag-spacing                                  
  + legacy/common-ruleset-stylistic-issues unicode-bom                                           
  + legacy/common-ruleset-stylistic-issues wrap-regex                                            
  - legacy/common-ruleset-variables        init-declarations                                     
  - legacy/common-ruleset-variables        no-delete-var                                         
  + legacy/common-ruleset-variables        no-label-var                                          
  - legacy/common-ruleset-variables        no-restricted-globals                                 
  + legacy/common-ruleset-variables        no-shadow                                             
  + legacy/common-ruleset-variables        no-shadow-restricted-names                            
  + legacy/common-ruleset-variables        no-undef                                              
  + legacy/common-ruleset-variables        no-undef-init                                         
  - legacy/common-ruleset-variables        no-undefined                                          
  + legacy/common-ruleset-variables        no-unused-vars                                        
  + legacy/common-ruleset-variables        no-use-before-define                                  
X - legacy/console-base                    no-console                                            
X - legacy/console-plugin-node             node/no-process-env                                   
X - legacy/console-plugin-security         security/detect-child-process                         
X - legacy/console-plugin-security         security/detect-non-literal-fs-filename               
X - legacy/console-plugin-security         security/detect-unsafe-regex                          
X + legacy/frontend-base                   class-methods-use-this                                
X - legacy/frontend-base                   no-invalid-this                                       
  + legacy/frontend-plugin-babel           babel/camelcase                                       
  + legacy/frontend-plugin-babel           babel/new-cap                                         
  + legacy/frontend-plugin-babel           babel/no-invalid-this                                 
  + legacy/frontend-plugin-babel           babel/no-unused-expressions                           
  + legacy/frontend-plugin-babel           babel/object-curly-spacing                            
  + legacy/frontend-plugin-babel           babel/quotes                                          
  + legacy/frontend-plugin-babel           babel/semi                                            
  + legacy/frontend-plugin-babel           babel/valid-typeof                                    
X - legacy/frontend-plugin-filenames       filenames/match-regex                                 
X + legacy/frontend-plugin-filenames       filenames/match-exported                              
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/alt-text                                     
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/anchor-has-content                           
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/anchor-is-valid                              
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/aria-activedescendant-has-tabindex           
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/aria-props                                   
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/aria-proptypes                               
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/aria-role                                    
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/aria-unsupported-elements                    
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/autocomplete-valid                           
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/click-events-have-key-events                 
  - legacy/frontend-plugin-jsx-a11y        jsx-a11y/control-has-associated-label                 
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/heading-has-content                          
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/html-has-lang                                
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/iframe-has-title                             
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/img-redundant-alt                            
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/interactive-supports-focus                   
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/label-has-associated-control                 
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/lang                                         
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/media-has-caption                            
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/mouse-events-have-key-events                 
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-access-key                                
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-autofocus                                 
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-distracting-elements                      
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-interactive-element-to-noninteractive-role
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-noninteractive-element-interactions       
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-noninteractive-element-to-interactive-role
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-noninteractive-tabindex                   
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-redundant-roles                           
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/no-static-element-interactions               
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/role-has-required-aria-props                 
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/role-supports-aria-props                     
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/scope                                        
  + legacy/frontend-plugin-jsx-a11y        jsx-a11y/tabindex-no-positive                         
X + legacy/frontend-plugin-node            node/no-unsupported-features/es-syntax                
  + legacy/frontend-plugin-react-hooks     react-hooks/rules-of-hooks                            
  + legacy/frontend-plugin-react-hooks     react-hooks/exhaustive-deps                           
  + legacy/frontend-plugin-react           react/boolean-prop-naming                             
  + legacy/frontend-plugin-react           react/button-has-type                                 
  + legacy/frontend-plugin-react           react/default-props-match-prop-types                  
  - legacy/frontend-plugin-react           react/destructuring-assignment                        
  + legacy/frontend-plugin-react           react/display-name                                    
  - legacy/frontend-plugin-react           react/forbid-component-props                          
  - legacy/frontend-plugin-react           react/forbid-dom-props                                
  - legacy/frontend-plugin-react           react/forbid-elements                                 
  + legacy/frontend-plugin-react           react/forbid-prop-types                               
  + legacy/frontend-plugin-react           react/function-component-definition                   
  - legacy/frontend-plugin-react           react/forbid-foreign-prop-types                       
  - legacy/frontend-plugin-react           react/no-access-state-in-setstate                     
  - legacy/frontend-plugin-react           react/no-adjacent-inline-elements                     
  + legacy/frontend-plugin-react           react/no-array-index-key                              
  + legacy/frontend-plugin-react           react/no-children-prop                                
  + legacy/frontend-plugin-react           react/no-danger                                       
  + legacy/frontend-plugin-react           react/no-danger-with-children                         
  + legacy/frontend-plugin-react           react/no-deprecated                                   
  + legacy/frontend-plugin-react           react/no-did-mount-set-state                          
  + legacy/frontend-plugin-react           react/no-did-update-set-state                         
  + legacy/frontend-plugin-react           react/no-direct-mutation-state                        
  + legacy/frontend-plugin-react           react/no-find-dom-node                                
  + legacy/frontend-plugin-react           react/no-is-mounted                                   
  + legacy/frontend-plugin-react           react/no-multi-comp                                   
  + legacy/frontend-plugin-react           react/no-redundant-should-component-update            
  + legacy/frontend-plugin-react           react/no-render-return-value                          
  - legacy/frontend-plugin-react           react/no-set-state                                    
  + legacy/frontend-plugin-react           react/no-typos                                        
  + legacy/frontend-plugin-react           react/no-string-refs                                  
  + legacy/frontend-plugin-react           react/no-this-in-sfc                                  
  + legacy/frontend-plugin-react           react/no-unescaped-entities                           
  + legacy/frontend-plugin-react           react/no-unknown-property                             
  + legacy/frontend-plugin-react           react/no-unsafe                                       
  + legacy/frontend-plugin-react           react/no-unused-prop-types                            
  + legacy/frontend-plugin-react           react/no-unused-state                                 
  + legacy/frontend-plugin-react           react/no-will-update-set-state                        
  + legacy/frontend-plugin-react           react/prefer-es6-class                                
  - legacy/frontend-plugin-react           react/prefer-read-only-props                          
  + legacy/frontend-plugin-react           react/prefer-stateless-function                       
  + legacy/frontend-plugin-react           react/prop-types                                      
  + legacy/frontend-plugin-react           react/react-in-jsx-scope                              
  + legacy/frontend-plugin-react           react/require-default-props                           
  + legacy/frontend-plugin-react           react/require-optimization                            
  + legacy/frontend-plugin-react           react/require-render-return                           
  + legacy/frontend-plugin-react           react/self-closing-comp                               
  - legacy/frontend-plugin-react           react/sort-comp                                       
  + legacy/frontend-plugin-react           react/sort-prop-types                                 
  - legacy/frontend-plugin-react           react/sort-prop-object                                
  + legacy/frontend-plugin-react           react/style-prop-object                               
  + legacy/frontend-plugin-react           react/state-in-constructor                            
  + legacy/frontend-plugin-react           react/static-property-placement                       
  + legacy/frontend-plugin-react           react/void-dom-elements-no-children                   
  + legacy/frontend-plugin-react           react/jsx-boolean-value                               
  + legacy/frontend-plugin-react           react/jsx-child-element-spacing                       
  + legacy/frontend-plugin-react           react/jsx-closing-bracket-location                    
  + legacy/frontend-plugin-react           react/jsx-closing-tag-location                        
  + legacy/frontend-plugin-react           react/jsx-curly-brace-presence                        
  + legacy/frontend-plugin-react           react/jsx-curly-spacing                               
  + legacy/frontend-plugin-react           react/jsx-curly-newline                               
  + legacy/frontend-plugin-react           react/jsx-equals-spacing                              
  - legacy/frontend-plugin-react           react/jsx-filename-extension                          
  + legacy/frontend-plugin-react           react/jsx-first-prop-new-line                         
  + legacy/frontend-plugin-react           react/jsx-fragments                                   
  - legacy/frontend-plugin-react           react/jsx-handler-names                               
  + legacy/frontend-plugin-react           react/jsx-indent                                      
  + legacy/frontend-plugin-react           react/jsx-indent-props                                
  + legacy/frontend-plugin-react           react/jsx-key                                         
  - legacy/frontend-plugin-react           react/jsx-max-depth                                   
  - legacy/frontend-plugin-react           react/jsx-max-props-per-line                          
  + legacy/frontend-plugin-react           react/jsx-no-bind                                     
  + legacy/frontend-plugin-react           react/jsx-no-comment-textnodes                        
  + legacy/frontend-plugin-react           react/jsx-no-duplicate-props                          
  - legacy/frontend-plugin-react           react/jsx-no-literals                                 
  + legacy/frontend-plugin-react           react/jsx-no-script-url                               
  + legacy/frontend-plugin-react           react/jsx-no-target-blank                             
  + legacy/frontend-plugin-react           react/jsx-no-undef                                    
  + legacy/frontend-plugin-react           react/jsx-no-useless-fragment                         
  - legacy/frontend-plugin-react           react/jsx-one-expression-per-line                     
  + legacy/frontend-plugin-react           react/jsx-pascal-case                                 
  + legacy/frontend-plugin-react           react/jsx-props-no-multi-spaces                       
  - legacy/frontend-plugin-react           react/jsx-props-no-spreading                          
  - legacy/frontend-plugin-react           react/jsx-sort-props                                  
  + legacy/frontend-plugin-react           react/jsx-tag-spacing                                 
  + legacy/frontend-plugin-react           react/jsx-uses-react                                  
  + legacy/frontend-plugin-react           react/jsx-uses-vars                                   
  - legacy/frontend-plugin-react           react/jsx-wrap-multilines                             
  + legacy/frontend-plugin-react           react/sort-default-props                              
  + legacy/node-base                       node/handle-callback-err                              
  + legacy/node-base                       node/no-callback-literal                              
X + legacy/node-base                       node/no-exports-assign                                
X + legacy/node-base                       node/no-extraneous-import                             
X + legacy/node-base                       node/no-extraneous-require                            
X + legacy/node-base                       node/no-missing-import                                
X + legacy/node-base                       node/no-missing-require                               
  + legacy/node-base                       node/no-new-require                                   
  + legacy/node-base                       node/no-path-concat                                   
  + legacy/node-base                       node/no-process-exit                                  
X + legacy/node-base                       node/no-unpublished-bin                               
X - legacy/node-base                       node/no-unpublished-import                            
X - legacy/node-base                       node/no-unpublished-require                           
X + legacy/node-base                       node/no-unsupported-features/es-builtins              
X + legacy/node-base                       node/no-unsupported-features/es-syntax                
X + legacy/node-base                       node/no-unsupported-features/node-builtins            
X + legacy/node-base                       node/process-exit-as-throw                            
X + legacy/node-base                       node/shebang                                          
X + legacy/node-base                       node/no-deprecated-api                                
  + legacy/node-base                       node/callback-return                                  
  + legacy/node-base                       node/exports-style                                    
  - legacy/node-base                       node/file-extension-in-import                         
  - legacy/node-base                       node/global-require                                   
  + legacy/node-base                       node/no-mixed-requires                                
X + legacy/node-base                       node/no-process-env                                   
  - legacy/node-base                       node/no-restricted-import                             
  - legacy/node-base                       node/no-restricted-require                            
X + legacy/node-base                       node/no-sync                                          
  + legacy/node-base                       node/prefer-global/buffer                             
  + legacy/node-base                       node/prefer-global/console                            
  + legacy/node-base                       node/prefer-global/process                            
  + legacy/node-base                       node/prefer-global/text-decoder                       
  + legacy/node-base                       node/prefer-global/text-encoder                       
  + legacy/node-base                       node/prefer-global/url-search-params                  
  + legacy/node-base                       node/prefer-global/url                                
  + legacy/node-base                       node/prefer-promises/dns                              
  + legacy/node-base                       node/prefer-promises/fs                               
  + legacy/testing-plugin-chai-expect      chai-expect/no-inner-compare                          
  + legacy/testing-plugin-chai-expect      chai-expect/no-inner-literal                          
  + legacy/testing-plugin-chai-expect      chai-expect/missing-assertion                         
  + legacy/testing-plugin-chai-expect      chai-expect/terminating-properties                    
X - legacy/testing-plugin-chai-expect      no-unused-expressions                                 
  + legacy/testing-plugin-mocha            mocha/handle-done-callback                            
  + legacy/testing-plugin-mocha            mocha/max-top-level-suites                            
  + legacy/testing-plugin-mocha            mocha/no-async-describe                               
  + legacy/testing-plugin-mocha            mocha/no-exclusive-tests                              
  + legacy/testing-plugin-mocha            mocha/no-global-tests                                 
  - legacy/testing-plugin-mocha            mocha/no-hooks                                        
  + legacy/testing-plugin-mocha            mocha/no-hooks-for-single-case                        
  + legacy/testing-plugin-mocha            mocha/no-identical-title                              
  + legacy/testing-plugin-mocha            mocha/no-mocha-arrows                                 
  + legacy/testing-plugin-mocha            mocha/no-nested-tests                                 
  + legacy/testing-plugin-mocha            mocha/no-pending-tests                                
  + legacy/testing-plugin-mocha            mocha/no-return-and-callback                          
  + legacy/testing-plugin-mocha            mocha/no-return-from-async                            
  - legacy/testing-plugin-mocha            mocha/no-setup-in-describe                            
  + legacy/testing-plugin-mocha            mocha/no-sibling-hooks                                
  + legacy/testing-plugin-mocha            mocha/no-skipped-tests                                
  - legacy/testing-plugin-mocha            mocha/no-synchronous-tests                            
  + legacy/testing-plugin-mocha            mocha/no-top-level-hooks                              
  + legacy/testing-plugin-mocha            mocha/prefer-arrow-callback                           
  - legacy/testing-plugin-mocha            mocha/valid-suite-description                         
  + legacy/testing-plugin-mocha            mocha/valid-test-description                          
X - legacy/testing-plugin-mocha            prefer-arrow-callback                                 
X - legacy/testing-plugin-mocha            node/no-sync                                          
X - legacy/testing-plugin-mocha            security/detect-non-literal-fs-filename               
X - legacy/testing-plugin-mocha            filenames/match-regex                                 
  - recommended/bluedrop-library           unicorn/prefer-module                                 
X - recommended/bluedrop-library           security/detect-non-literal-fs-filename               
  - recommended/bluedrop-library           unicorn/no-array-reduce                               
X - recommended/bluedrop-library           security/detect-object-injection                      
X + recommended/plugin-eslint-comments     eslint-comments/disable-enable-pair                   
X + recommended/plugin-eslint-comments     eslint-comments/no-aggregating-enable                 
X + recommended/plugin-eslint-comments     eslint-comments/no-duplicate-disable                  
X + recommended/plugin-eslint-comments     eslint-comments/no-unlimited-disable                  
X + recommended/plugin-eslint-comments     eslint-comments/no-unused-enable                      
X + recommended/plugin-filenames           filenames/match-regex                                 
X + recommended/plugin-filenames           filenames/match-exported                              
X - recommended/plugin-filenames           filenames/no-index                                    
X + recommended/plugin-import              import/no-unresolved                                  
X + recommended/plugin-import              import/named                                          
X + recommended/plugin-import              import/namespace                                      
X + recommended/plugin-import              import/default                                        
X + recommended/plugin-import              import/export                                         
X + recommended/plugin-import              import/no-named-as-default                            
X + recommended/plugin-import              import/no-named-as-default-member                     
X + recommended/plugin-import              import/no-duplicates                                  
  + recommended/plugin-jsdoc               jsdoc/check-access                                    
  + recommended/plugin-jsdoc               jsdoc/check-alignment                                 
X - recommended/plugin-jsdoc               jsdoc/check-examples                                  
  - recommended/plugin-jsdoc               jsdoc/check-indentation                               
  - recommended/plugin-jsdoc               jsdoc/check-line-alignment                            
  + recommended/plugin-jsdoc               jsdoc/check-param-names                               
  + recommended/plugin-jsdoc               jsdoc/check-property-names                            
  - recommended/plugin-jsdoc               jsdoc/check-syntax                                    
  + recommended/plugin-jsdoc               jsdoc/check-tag-names                                 
X + recommended/plugin-jsdoc               jsdoc/check-types                                     
  + recommended/plugin-jsdoc               jsdoc/check-values                                    
  + recommended/plugin-jsdoc               jsdoc/empty-tags                                      
  + recommended/plugin-jsdoc               jsdoc/implements-on-classes                           
  - recommended/plugin-jsdoc               jsdoc/match-description                               
  - recommended/plugin-jsdoc               jsdoc/match-name                                      
  + recommended/plugin-jsdoc               jsdoc/multiline-blocks                                
  + recommended/plugin-jsdoc               jsdoc/newline-after-description                       
  - recommended/plugin-jsdoc               jsdoc/no-bad-blocks                                   
  - recommended/plugin-jsdoc               jsdoc/no-defaults                                     
  - recommended/plugin-jsdoc               jsdoc/no-missing-syntax                               
  + recommended/plugin-jsdoc               jsdoc/no-multi-asterisks                              
  - recommended/plugin-jsdoc               jsdoc/no-restricted-syntax                            
  - recommended/plugin-jsdoc               jsdoc/no-types                                        
  + recommended/plugin-jsdoc               jsdoc/no-undefined-types                              
  - recommended/plugin-jsdoc               jsdoc/require-asterisk-prefix                         
  - recommended/plugin-jsdoc               jsdoc/require-description                             
  - recommended/plugin-jsdoc               jsdoc/require-description-complete-sentence           
  - recommended/plugin-jsdoc               jsdoc/require-example                                 
  - recommended/plugin-jsdoc               jsdoc/require-file-overview                           
  - recommended/plugin-jsdoc               jsdoc/require-hyphen-before-param-description         
  + recommended/plugin-jsdoc               jsdoc/require-jsdoc                                   
  + recommended/plugin-jsdoc               jsdoc/require-param                                   
  + recommended/plugin-jsdoc               jsdoc/require-param-description                       
  + recommended/plugin-jsdoc               jsdoc/require-param-name                              
  + recommended/plugin-jsdoc               jsdoc/require-param-type                              
  + recommended/plugin-jsdoc               jsdoc/require-property                                
  + recommended/plugin-jsdoc               jsdoc/require-property-description                    
  + recommended/plugin-jsdoc               jsdoc/require-property-name                           
  + recommended/plugin-jsdoc               jsdoc/require-property-type                           
  + recommended/plugin-jsdoc               jsdoc/require-returns                                 
  + recommended/plugin-jsdoc               jsdoc/require-returns-check                           
  + recommended/plugin-jsdoc               jsdoc/require-returns-description                     
  + recommended/plugin-jsdoc               jsdoc/require-returns-type                            
  - recommended/plugin-jsdoc               jsdoc/require-throws                                  
  + recommended/plugin-jsdoc               jsdoc/require-yields                                  
  + recommended/plugin-jsdoc               jsdoc/require-yields-check                            
  - recommended/plugin-jsdoc               jsdoc/sort-tags                                       
  + recommended/plugin-jsdoc               jsdoc/tag-lines                                       
  - recommended/plugin-jsdoc               jsdoc/text-escaping                                   
  + recommended/plugin-jsdoc               jsdoc/valid-types                                     
  + recommended/plugin-n-module            n/no-deprecated-api                                   
  + recommended/plugin-n-module            n/no-extraneous-import                                
  + recommended/plugin-n-module            n/no-extraneous-require                               
  + recommended/plugin-n-module            n/no-exports-assign                                   
  + recommended/plugin-n-module            n/no-missing-import                                   
  + recommended/plugin-n-module            n/no-missing-require                                  
  + recommended/plugin-n-module            n/no-process-exit                                     
  + recommended/plugin-n-module            n/no-unpublished-bin                                  
  + recommended/plugin-n-module            n/no-unpublished-import                               
  + recommended/plugin-n-module            n/no-unpublished-require                              
  + recommended/plugin-n-module            n/no-unsupported-features/es-builtins                 
  + recommended/plugin-n-module            n/no-unsupported-features/es-syntax                   
  + recommended/plugin-n-module            n/no-unsupported-features/node-builtins               
  + recommended/plugin-n-module            n/process-exit-as-throw                               
  + recommended/plugin-n-module            n/shebang                                             
  + recommended/plugin-node-module         no-process-exit                                       
X + recommended/plugin-node-module         node/no-deprecated-api                                
X + recommended/plugin-node-module         node/no-extraneous-import                             
X + recommended/plugin-node-module         node/no-extraneous-require                            
X + recommended/plugin-node-module         node/no-exports-assign                                
X + recommended/plugin-node-module         node/no-missing-import                                
X + recommended/plugin-node-module         node/no-missing-require                               
X + recommended/plugin-node-module         node/no-unpublished-bin                               
X + recommended/plugin-node-module         node/no-unpublished-import                            
X + recommended/plugin-node-module         node/no-unpublished-require                           
X + recommended/plugin-node-module         node/no-unsupported-features/es-builtins              
X + recommended/plugin-node-module         node/no-unsupported-features/es-syntax                
X + recommended/plugin-node-module         node/no-unsupported-features/node-builtins            
X + recommended/plugin-node-module         node/process-exit-as-throw                            
X + recommended/plugin-node-module         node/shebang                                          
X + recommended/plugin-promise             promise/always-return                                 
X + recommended/plugin-promise             promise/no-return-wrap                                
X + recommended/plugin-promise             promise/param-names                                   
X + recommended/plugin-promise             promise/catch-or-return                               
X - recommended/plugin-promise             promise/no-native                                     
X + recommended/plugin-promise             promise/no-nesting                                    
X + recommended/plugin-promise             promise/no-promise-in-callback                        
X + recommended/plugin-promise             promise/no-callback-in-promise                        
X - recommended/plugin-promise             promise/avoid-new                                     
X + recommended/plugin-promise             promise/no-new-statics                                
X + recommended/plugin-promise             promise/no-return-in-finally                          
X + recommended/plugin-promise             promise/valid-params                                  
X + recommended/plugin-security            security/detect-buffer-noassert                       
X + recommended/plugin-security            security/detect-child-process                         
X + recommended/plugin-security            security/detect-disable-mustache-escape               
X + recommended/plugin-security            security/detect-eval-with-expression                  
X + recommended/plugin-security            security/detect-new-buffer                            
X + recommended/plugin-security            security/detect-no-csrf-before-method-override        
X + recommended/plugin-security            security/detect-non-literal-fs-filename               
X + recommended/plugin-security            security/detect-non-literal-regexp                    
X + recommended/plugin-security            security/detect-non-literal-require                   
X + recommended/plugin-security            security/detect-object-injection                      
X + recommended/plugin-security            security/detect-possible-timing-attacks               
X + recommended/plugin-security            security/detect-pseudoRandomBytes                     
X + recommended/plugin-security            security/detect-unsafe-regex                          
X + recommended/plugin-security            security/detect-bidi-characters                       
  + recommended/plugin-unicorn             unicorn/better-regex                                  
  + recommended/plugin-unicorn             unicorn/catch-error-name                              
  + recommended/plugin-unicorn             unicorn/consistent-destructuring                      
  + recommended/plugin-unicorn             unicorn/consistent-function-scoping                   
  - recommended/plugin-unicorn             unicorn/custom-error-definition                       
  + recommended/plugin-unicorn             unicorn/empty-brace-spaces                            
  + recommended/plugin-unicorn             unicorn/error-message                                 
  + recommended/plugin-unicorn             unicorn/escape-case                                   
  + recommended/plugin-unicorn             unicorn/expiring-todo-comments                        
  + recommended/plugin-unicorn             unicorn/explicit-length-check                         
  + recommended/plugin-unicorn             unicorn/filename-case                                 
  + recommended/plugin-unicorn             unicorn/import-style                                  
  + recommended/plugin-unicorn             unicorn/new-for-builtins                              
  + recommended/plugin-unicorn             unicorn/no-abusive-eslint-disable                     
  + recommended/plugin-unicorn             unicorn/no-array-callback-reference                   
  + recommended/plugin-unicorn             unicorn/no-array-for-each                             
  + recommended/plugin-unicorn             unicorn/no-array-method-this-argument                 
  + recommended/plugin-unicorn             unicorn/no-array-push-push                            
  + recommended/plugin-unicorn             unicorn/no-array-reduce                               
  + recommended/plugin-unicorn             unicorn/no-await-expression-member                    
  + recommended/plugin-unicorn             unicorn/no-console-spaces                             
  + recommended/plugin-unicorn             unicorn/no-document-cookie                            
  + recommended/plugin-unicorn             unicorn/no-empty-file                                 
  + recommended/plugin-unicorn             unicorn/no-for-loop                                   
  + recommended/plugin-unicorn             unicorn/no-hex-escape                                 
  + recommended/plugin-unicorn             unicorn/no-instanceof-array                           
  + recommended/plugin-unicorn             unicorn/no-invalid-remove-event-listener              
  - recommended/plugin-unicorn             unicorn/no-keyword-prefix                             
  + recommended/plugin-unicorn             unicorn/no-lonely-if                                  
  - recommended/plugin-unicorn             no-negated-condition                                  
  + recommended/plugin-unicorn             unicorn/no-negated-condition                          
  - recommended/plugin-unicorn             no-nested-ternary                                     
  + recommended/plugin-unicorn             unicorn/no-nested-ternary                             
  + recommended/plugin-unicorn             unicorn/no-new-array                                  
  + recommended/plugin-unicorn             unicorn/no-new-buffer                                 
  + recommended/plugin-unicorn             unicorn/no-null                                       
  + recommended/plugin-unicorn             unicorn/no-object-as-default-parameter                
  + recommended/plugin-unicorn             unicorn/no-process-exit                               
  + recommended/plugin-unicorn             unicorn/no-static-only-class                          
  + recommended/plugin-unicorn             unicorn/no-thenable                                   
  + recommended/plugin-unicorn             unicorn/no-this-assignment                            
  + recommended/plugin-unicorn             unicorn/no-typeof-undefined                           
  + recommended/plugin-unicorn             unicorn/no-unnecessary-await                          
  + recommended/plugin-unicorn             unicorn/no-unreadable-array-destructuring             
  + recommended/plugin-unicorn             unicorn/no-unreadable-iife                            
  - recommended/plugin-unicorn             unicorn/no-unsafe-regex                               
  - recommended/plugin-unicorn             unicorn/no-unused-properties                          
  + recommended/plugin-unicorn             unicorn/no-useless-fallback-in-spread                 
  + recommended/plugin-unicorn             unicorn/no-useless-length-check                       
  + recommended/plugin-unicorn             unicorn/no-useless-promise-resolve-reject             
  + recommended/plugin-unicorn             unicorn/no-useless-spread                             
  + recommended/plugin-unicorn             unicorn/no-useless-switch-case                        
  + recommended/plugin-unicorn             unicorn/no-useless-undefined                          
  + recommended/plugin-unicorn             unicorn/no-zero-fractions                             
  + recommended/plugin-unicorn             unicorn/number-literal-case                           
  + recommended/plugin-unicorn             unicorn/numeric-separators-style                      
  + recommended/plugin-unicorn             unicorn/prefer-add-event-listener                     
  + recommended/plugin-unicorn             unicorn/prefer-array-find                             
  + recommended/plugin-unicorn             unicorn/prefer-array-flat                             
  + recommended/plugin-unicorn             unicorn/prefer-array-flat-map                         
  + recommended/plugin-unicorn             unicorn/prefer-array-index-of                         
  + recommended/plugin-unicorn             unicorn/prefer-array-some                             
  - recommended/plugin-unicorn             unicorn/prefer-at                                     
  + recommended/plugin-unicorn             unicorn/prefer-code-point                             
  + recommended/plugin-unicorn             unicorn/prefer-date-now                               
  + recommended/plugin-unicorn             unicorn/prefer-default-parameters                     
  + recommended/plugin-unicorn             unicorn/prefer-dom-node-append                        
  + recommended/plugin-unicorn             unicorn/prefer-dom-node-dataset                       
  + recommended/plugin-unicorn             unicorn/prefer-dom-node-remove                        
  + recommended/plugin-unicorn             unicorn/prefer-dom-node-text-content                  
  - recommended/plugin-unicorn             unicorn/prefer-event-target                           
  + recommended/plugin-unicorn             unicorn/prefer-export-from                            
  + recommended/plugin-unicorn             unicorn/prefer-includes                               
  - recommended/plugin-unicorn             unicorn/prefer-json-parse-buffer                      
  + recommended/plugin-unicorn             unicorn/prefer-keyboard-event-key                     
  + recommended/plugin-unicorn             unicorn/prefer-logical-operator-over-ternary          
  + recommended/plugin-unicorn             unicorn/prefer-math-trunc                             
  + recommended/plugin-unicorn             unicorn/prefer-modern-dom-apis                        
  + recommended/plugin-unicorn             unicorn/prefer-modern-math-apis                       
  + recommended/plugin-unicorn             unicorn/prefer-module                                 
  + recommended/plugin-unicorn             unicorn/prefer-native-coercion-functions              
  + recommended/plugin-unicorn             unicorn/prefer-negative-index                         
  + recommended/plugin-unicorn             unicorn/prefer-node-protocol                          
  + recommended/plugin-unicorn             unicorn/prefer-number-properties                      
  + recommended/plugin-unicorn             unicorn/prefer-object-from-entries                    
  + recommended/plugin-unicorn             unicorn/prefer-optional-catch-binding                 
  + recommended/plugin-unicorn             unicorn/prefer-prototype-methods                      
  + recommended/plugin-unicorn             unicorn/prefer-query-selector                         
  + recommended/plugin-unicorn             unicorn/prefer-reflect-apply                          
  + recommended/plugin-unicorn             unicorn/prefer-regexp-test                            
  + recommended/plugin-unicorn             unicorn/prefer-set-has                                
  + recommended/plugin-unicorn             unicorn/prefer-set-size                               
  + recommended/plugin-unicorn             unicorn/prefer-spread                                 
  - recommended/plugin-unicorn             unicorn/prefer-string-replace-all                     
  + recommended/plugin-unicorn             unicorn/prefer-string-slice                           
  + recommended/plugin-unicorn             unicorn/prefer-string-starts-ends-with                
  + recommended/plugin-unicorn             unicorn/prefer-string-trim-start-end                  
  + recommended/plugin-unicorn             unicorn/prefer-switch                                 
  + recommended/plugin-unicorn             unicorn/prefer-ternary                                
  + recommended/plugin-unicorn             unicorn/prefer-top-level-await                        
  + recommended/plugin-unicorn             unicorn/prefer-type-error                             
  + recommended/plugin-unicorn             unicorn/prevent-abbreviations                         
  + recommended/plugin-unicorn             unicorn/relative-url-style                            
  + recommended/plugin-unicorn             unicorn/require-array-join-separator                  
  + recommended/plugin-unicorn             unicorn/require-number-to-fixed-digits-argument       
  - recommended/plugin-unicorn             unicorn/require-post-message-target-origin            
  - recommended/plugin-unicorn             unicorn/string-content                                
  + recommended/plugin-unicorn             unicorn/switch-case-braces                            
  + recommended/plugin-unicorn             unicorn/template-indent                               
  + recommended/plugin-unicorn             unicorn/text-encoding-identifier-case                 
  + recommended/plugin-unicorn             unicorn/throw-new-error                               
```
